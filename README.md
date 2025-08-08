# DD Systems Meetup Website

This repository hosts the content of the systems meetup website. The website
is basically just a single HTML file with some bootstrap CSS.

## Deployment

This website is currently deployed as part of this Nix config:

https://github.com/phip1611/nixos-configs/pull/84

and reachable under <https://ukvly.org>.

## Format Code

- run `$ prettier -w public/index.html` \
  In a Nix shell: `$ nix develop --command bash -c "prettier public/index.html -w"`

## Serve Locally

- run `$ nix develop --command "serve"`

## Converting Images to Webp

- Navigate into the folder
- run `$ fd --exec cwebp {} -o {}.webp -q 80`
