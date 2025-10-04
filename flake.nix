{
  description = "DD Systems Meetup Website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
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
        inputs.nixpkgs.lib.genAttrs systems (system: function inputs.nixpkgs.legacyPackages.${system});
    in
    {
      checks = forAllSystems (pkgs: {
        fmt =
          pkgs.runCommandLocal "check-html-fmt"
            {
              src = self;
              nativeBuildInputs = [ pkgs.nodePackages.prettier ];
            }
            ''
              prettier --check ${self}/public/index.html
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
      });

      devShells = forAllSystems (pkgs: {
        default =
          let
            serve = pkgs.callPackage ./nix/serve.nix { };
          in
          pkgs.mkShell {
            inputsFrom = builtins.attrValues self.packages.${pkgs.system};
            packages = with pkgs; [
              fd
              libwebp
              nixfmt-rfc-style
              # format: `$ prettier -w public/index.html`
              nodePackages.prettier
              serve
              typos
            ];
          };
      });

      packages = forAllSystems (
        pkgs:
        let
          website = pkgs.runCommand "website" { } ''
            mkdir $out
            cp -r ${./public}/. $out
          '';
        in
        {
          inherit website;
          default = website;
        }
      );

      formatter = forAllSystems (pkgs: pkgs.nixfmt-tree);
    };
}
