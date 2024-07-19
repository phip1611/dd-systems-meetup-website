# DD Systems Meetup Website (Hosted via GitHub Pages)

This repository hosts the content of the systems meetup website. The website
is basically just a single HTML file with some bootstrap CSS.

## Deployment

This website is currently deployed as part of this Nix config:

https://github.com/phip1611/nixos-configs/pull/84

and reachable under <https://ukvly.org>.

## Format Code

- run `$ prettier public/index.html -w` \
  In a Nix shell: `$ nix develop --command bash -c "prettier public/index.html -w"`
