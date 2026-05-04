# DD Systems Meetup Website

This repository hosts the content of the systems meetup website. The website
is built with Astro and rendered as a static site.

## Deployment

This website is currently deployed as part of this Nix config:

https://github.com/phip1611/nixos-configs/pull/84

and reachable under <https://ukvly.org>.

## Format Code

- run `$ npm run format`
- check formatting with `$ npm run format:check` or
  `$ prettier --check .` if you use the Nix shell

## Serve Locally

- run `$ npm install`
- run `$ npm run dev -- --open`
- in a Nix shell: `$ nix develop --command npm run dev -- --open`

## Build Static Website

- run `$ npm run build`
- the generated static site is in `dist/`
- build with Nix: `$ nix build .#website`

## Website Structure

- `src/pages/index.astro` is the single page. Astro turns this file into
  `index.html` during the static build.
- `src/layouts/BaseLayout.astro` owns the HTML shell, metadata, analytics, and
  shared assets.
- `src/components/` contains reusable page sections.
- `src/data/meetups.ts` contains the past meetup data. Add a new past event by
  inserting a new object at the top of `pastMeetups`.
- Files in `public/` are copied unchanged to the site root. Put meetup images
  below `public/images/meetups/...` and reference them as `/images/...`.

## Converting Images to Webp

- Navigate into the folder
- run `$ fd --exec cwebp {} -o {}.webp -q 80`
