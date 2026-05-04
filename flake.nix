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
        system: pkgs: {
          fmt =
            pkgs.runCommandLocal "check-site-fmt"
              {
                src = self;
                nativeBuildInputs = [ pkgs.prettier ];
              }
              ''
                prettier --check \
                  ${self}/README.md \
                  ${self}/astro.config.mjs \
                  ${self}/package.json \
                  ${self}/public/manifest.json \
                  ${self}/tsconfig.json
                touch $out
              '';
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
              # Astro-aware formatting is added by the formatter tooling step.
              prettier
              typos
            ];
          };
        }
      );

      packages = forAllSystems (
        system: pkgs:
        let
          website = pkgs.buildNpmPackage {
            pname = "dd-systems-meetup-website";
            version = "0.0.0-snapshot";
            src = self;
            npmDepsHash = "sha256-JYTfPeRTbjnKgEMM0sYxAHBGvX+Rm/GTs6y6knJ0104=";
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
