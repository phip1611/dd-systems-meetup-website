{
  description = "DD Systems Meetup Website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { self, ... }@inputs:
    let
      # Systems definition for dev shells and exported packages,
      # independent of the NixOS configurations and modules defined here. I
      # just use "every system" here to not restrict any user. However, it
      # likely happens that certain packages don't build for/under certain
      # systems.
      systems = inputs.nixpkgs.lib.systems.flakeExposed;

      # Generates the typical per-system flake attributes.
      forAllSystems =
        function:
        inputs.nixpkgs.lib.genAttrs systems (
          system: function system inputs.nixpkgs.legacyPackages.${system}
        );
    in
    {
      checks = forAllSystems (
        system: pkgs:
        let
          websiteNpmPackage = self.packages.${system}.website;
        in
        {
          fmt = websiteNpmPackage.overrideAttrs {
            dontNpmBuild = true;
            installPhase = ''
              runHook preInstall
              npm run format:check
              touch $out
              runHook postInstall
            '';
          };
          typos =
            pkgs.runCommandLocal "run-typos"
              {
                src = self;
                nativeBuildInputs = [ pkgs.typos ];
              }
              ''
                typos ${self}
                touch $out
              '';
        }
      );

      devShells = forAllSystems (
        system: pkgs: {
          default = pkgs.mkShell {
            inputsFrom = builtins.attrValues self.packages.${system};
            packages = with pkgs; [
              fd
              libwebp
              nodejs # comes with npm
              typos
            ];
          };
        }
      );

      packages = forAllSystems (
        system: pkgs:
        let
          npmDepsHash = "sha256-jjFqpn6xaXJ3ULOXm86ql09Mg2VVMmrOYzuyZcWiMXY=";
          website = pkgs.buildNpmPackage {
            pname = "dd-systems-meetup-website";
            version = "0.0.0-snapshot";
            src = self;
            inherit npmDepsHash;
            npmBuildScript = "build";

            installPhase = ''
              runHook preInstall
              mkdir -p $out
              cp -r dist/. $out/
              runHook postInstall
            '';
          };
        in
        {
          inherit website;
          default = website;
        }
      );

      formatter = forAllSystems (_system: pkgs: pkgs.nixfmt-tree);
    };
}
