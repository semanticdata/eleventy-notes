⚠ ARCHIVED: This project is no longer being developed. Unfortunately the `.app` approach does not work for me. ⚠

# 📒 Eleventy Notes

![code size](https://img.shields.io/github/languages/code-size/semanticdata/forgetful-notes) ![repository size](https://img.shields.io/github/repo-size/semanticdata/forgetful-notes) ![commits](https://img.shields.io/github/commit-activity/t/semanticdata/forgetful-notes) ![last commit](https://img.shields.io/github/last-commit/semanticdata/forgetful-notes) ![website up?](https://img.shields.io/website/https/forgetfulnotes.com.svg)

[Eleventy Notes](https://semanticdata.github.io/eleventy-notes/) is a different take on [Forgetful Notes](https://forgetfulnotes.com/), my [digital garden](https://forgetfulnotes.com/Digital-Garden). All content within is tecnically a placeholder since it's just mirroring the files in my current [digital garden](https://forgetfulnotes.com/).

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://semanticdata.github.io/eleventy-notes/) [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://eleventy-notes.vercel.app/)

## 📝 Notes

### Proxy `package.json`

The [package.json](package.json) in the root of the repository acts as a mediator between you and the actual `package.json` within the `.app/` directory.

### Formatting w/ Prettier

Scripts for [Prettier](https://github.com/prettier/prettier) have been added and configured in such a way that the [.prettierrc](.prettierrc) and [.prettierignore](..prettierignore) files can remain in the root of the repository meaning they can be modified without the fear of being overwritten by a future update.

### Git hooks w/ Husky

We use [Husky](https://github.com/typicode/husky) for pre-commit workflows. This project is set up by default to run `npm run check` and `npm run test` after any commit. This will warn you of any errors in formatting, or if the app build fails. All this happens after you commit any changes, but before you have the chance to push code with errors.

## 🔧 Useful Tips

You can run the following commands from the `.app` directory, or from the project's root.

```sh
# Install dependencies
npm i

# Start local dev server
npm start

# Build site
npm run build

# Update dependencies
npm update

# Run build test
npm run test

# Check formatting w/ Prettier
npm run check

# Format codebase w/ Prettier
npm run format
```

## 🛠️ Technology

The site uses various technologies cobbled together. Here's some of them:

- [11ty](https://www.11ty.dev/): a simpler static site generator.
- [Alpine.js](https://alpinejs.dev/): lightweight JavaScript framework.
- [FlexSearch](https://github.com/nextapps-de/flexsearch): fast and memory-flexible full-text search library with no dependencies.
- [Husky](https://github.com/typicode/husky): Git hooks manager.
- [Parcel](https://parceljs.org/): zero configuration build tool for the web.
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.
- [Sass](https://github.com/sass/sass): because CSS can be fun.

## 🚀 Deployments

### Vercel

The [vercel.json](vercel.json) file in the root directory defines our framework, our run commands, sets up cache and adds HTTP headers to any Vercel deployment. Read more about `vercel.json` configuration [here](https://vercel.com/docs/projects/project-configuration). The headers included are:

<!-- - [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) -->

- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
- [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [Permissions-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)

### GitHub Pages

The project includes two GitHub Actions: to aid deployment to GitHub Pages.

- [Build only](https://github.com/semanticdata/eleventy-notes/blob/main/.github/workflows/build-only.yml): no artifact is created. It's set up as process check and enabled to run automatically after push requests.
- [Deploy](https://github.com/semanticdata/eleventy-notes/blob/main/.github/workflows/deploy.yml): sets up permissions, concurreny limits, and environment variable to publish projects using `your-username.github.io/your-project`.

## 👨🏼‍💻 Changes from Upstream

- Added new [package.json](package.json) to the root directory. Works as middeman between user and the [.app/package.json](.app/package.json) file.
- Token `font-size-xs`: changed from `0.75rem` to `var(--font-size-fluid-x2)`.
- Token `font-size-sm`: changed from `0.875rem` to `var(--font-size-fluid-x1)`.
- Class `grouped-links__link` had `padding-block: var(--space-1)` changed to `padding-block: var(--space-2)`.[^1]
- Integrated [Husky](https://github.com/typicode/husky) with [pre-commit](/.app/.husky/pre-commit) scripts.[^2]
- Integrated [Prettier](https://github.com/prettier/prettier) with scripts to both check and fix formatting.[^3]
- Created new deployment workflows to deploy to [GitHub Pages](https://pages.github.com/).
- Added new `prepare` script to run Husky before all commits.
- Added new `test` script to dry run Eleventy.
- Added new [GitHub Actions](https://github.com/features/actions) workflows to [only Build](.github/workflows/build-only.yml) or [Deploy](.github/workflows/deploy.yml) to pages.
- Added new [vercel.json](vercel.json) to add build settings for [Vercel](https://vercel.com/) deployments. It also adds HTTP headers to your site.

## 💜 Attributions

This project is based on [Eleventy Notes](https://github.com/rothsandro/eleventy-notes), a project by [Sandro Roth](https://github.com/rothsandro).

## © License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: Fixed tap targets size in mobile-view to address [Lighthouse](https://developer.chrome.com/docs/lighthouse) SEO score.
[^2]: Currently set up to run `npm run check` and `npm run test` before all commits.
[^3]: Also included config files [.prettierrc](.prettierrc), and [.prettierignore](.prettierignore).
