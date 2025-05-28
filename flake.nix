{
  description = "DD Systems Meetup Website";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
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
        devShells.default =
          let
            serve = pkgs.callPackage ./nix/serve.nix { };
          in
          pkgs.mkShell {
            packages = with pkgs; [
              fd
              libwebp
              nixfmt-rfc-style
              # format: `$ prettier -w index.html`
              nodePackages.prettier
              serve
              typos
            ];
          };
        formatter = pkgs.nixfmt-rfc-style;
      };
      flake = {
        # Put your original flake attributes here.
      };
    };
}
