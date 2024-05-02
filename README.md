# 📒 Eleventy Notes

![code size](https://img.shields.io/github/languages/code-size/semanticdata/forgetful-notes)
![repository size](https://img.shields.io/github/repo-size/semanticdata/forgetful-notes)
![commits](https://img.shields.io/github/commit-activity/t/semanticdata/forgetful-notes)
![last commit](https://img.shields.io/github/last-commit/semanticdata/forgetful-notes)
![website up?](https://img.shields.io/website/https/forgetfulnotes.com.svg)

[Eleventy Notes](https://semanticdata.github.io/eleventy-notes/) is a different take on [Forgetful Notes](https://forgetfulnotes.com/), my [digital garden](https://forgetfulnotes.com/Digital-Garden). All content within is tecnically a placeholder since it's just mirroring the files in my current [digital garden](https://forgetfulnotes.com/).

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://semanticdata.github.io/eleventy-notes/)
<!-- [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://eleventy-notes.vercel.app/) -->

## 📝 Notes

- The `package.json` in the root of the repository acts as a mediator between you and the actual `package.json` within the `.app/` directory.
- Scripts for [Prettier](https://github.com/prettier/prettier) have been added and configured in such a way that the `.prettierrc` and `.prettierignore` files can remain in the root of the repository meaning they can be modified without the fear of being overwritten by a future update.
- We use [Husky](https://github.com/typicode/husky) for pre-commit workflows. This project is set up by default to run `npm run check` and `npm run test`. This will warn you of any errors in formatting, or if the app build fails. All this happens after you commit any changes, before you have the chance to push code that has errors.

## 🔧 Useful Tips

You can run the following commands from the `.app/` directory, or from the project's root.

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
- [Alpine.js](https://alpinejs.dev/): lightweight, JavaScript framework.
- [Parcel](https://parceljs.org/): zero configuration build tool for the web.
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.
- [Sass](https://github.com/sass/sass): because CSS can be fun.
- [Husky](https://github.com/typicode/husky): Git hooks manager.
- [FlexSearch](https://github.com/nextapps-de/flexsearch): fast and memory-flexible full-text search library with no dependencies.

## 💜 Attributions

This project is based on [Eleventy Notes](https://github.com/rothsandro/eleventy-notes), a project by [Sandro Roth](https://github.com/rothsandro).

## © License

Source code in this repository is available under the [MIT License](LICENSE).
