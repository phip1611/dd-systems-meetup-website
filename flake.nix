{
  description = "DD Systems Meetup Website";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
  };

  outputs = { self, flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = inputs.nixpkgs.lib.systems.flakeExposed;
      perSystem = { config, pkgs, ... }: {
        checks = {
          fmt = pkgs.runCommandLocal "check-html-fmt"
            {
              src = self;
              nativeBuildInputs = [ pkgs.nodePackages.prettier ];
            } ''
            prettier --check ${self}/public/index.html
            touch $out
          '';
          typos = pkgs.runCommandLocal "run-typos"
            {
              src = self;
              nativeBuildInputs = [ pkgs.typos ];
            } ''
            typos ${self}
            touch $out
          '';
        };
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nixpkgs-fmt
            # format: `$ prettier -w index.html`
            nodePackages.prettier
            typos
          ];
        };
        formatter = pkgs.nixpkgs-fmt;
      };
      flake = {
        # Put your original flake attributes here.
      };
    };
}
