# Additional to Eleventy Notes (Optional)

In this page we will cover:

- [Adding Husky and setting up a pre-commit workflow](#adding-husky).
- [Adding Prettier and scripts to format the entire repository](#adding-prettier).
- [Adding a root `package.json` that acts as mediator with the actual `package.json` inside `.app`.](#adding-new-packagejson-to-the-root)
- [Adding custom HTTP headers via `vercel.json`.](#custom-vercel-http-headers)

## Adding Husky

[Husky](https://typicode.github.io/husky/) allows pre-commit commands. This section will go over:

- How to add Husky to your project
- How to configure it for pre-commits

Check out Husky's official [documentation](https://typicode.github.io/husky/get-started.html).

> ⚠ Remember to `cd .app` before you start the instructions. These next commands should be ran from inside our `.app` directory.

### 1. Install Husky

```sh
# Install Husky with NPM
npm install --save-dev husky

# Install Husky with PNPM
pnpm add --save-dev husky

# Install Husky with Bun
bun add --dev husky
```

### 2. Initiate Husky

```sh
# Initiate Husky with NPM
npx husky init

# Initiate Husky with PNPM
pnpm exec husky init

# Initiate Husky with Bun
bun husky init
```

### 3. Add New Hooks

```sh
# Add the script `test` Git Hook with NPM.
echo "npm test" > .app.husky/pre-commit

# Add the script `test` Git Hook with PNPM.
echo "pnpm test" > .app/.husky/pre-commit

# Add the script `test` Git Hook with Bun.
echo "bun test" > .app/.husky/pre-commit
```

### 4. Revise `.husky/pre-commit`[^1]

```sh
cd .app # change into the project root
npm run check # check formatting w/ Prettier
npm run test # Format codebase w/ Prettier
```

### 5. Test Husky without a Commit

```sh
exit 1 # Add to the hook script to exit the test without committing anything

# Example
cd .app
npm run check
exit 1
```

### 6. Modify the `prepare` script in `.app/package.json`

```json
{
  "scripts": {
    "prepare": "cd .. && husky .app/.husky"
  }
}
```

Having issues? Be sure to visit the official [Troubleshooting](https://typicode.github.io/husky/troubleshoot.html) page for Husky.

## Adding Prettier

[Prettier](https://prettier.io/docs/en/) is an opinionated code formatter. This section will go over:

- How to add Prettier to your project
- How to configure it
- Scripts to check and format the entire repository
- How to add it to our pre-commit workflow

### 1. Install Prettier

```sh
# Install Prettier
npm install --save-dev --save-exact prettier
```

### 2. Create `.prettierrc`[^2]

You can use `node --eval "fs.writeFileSync('.prettierrc','{}\n')"` to create an empty config file.

Feel free to custumize it however you prefer. Find the codeblock below to reference. You can also just copy it into the file.

```json
{
  "$schema": "https://json.schemastore.org/prettierrc.json",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "consistent",
  "trailingComma": "none",
  "bracketSpacing": false,
  "bracketSameLine": true,
  "arrowParens": "always",
  "proseWrap": "never",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

### 3. Create `.prettierignore`

Copy the codeblock below into the new file.

```plaintext
node_modules
package-lock.json
pnpm-lock.yaml

.app/.parcel-cache
.app/dist
.app/node_modules
.app/package-lock.json
.app/pnpm-lock.yaml
```

### 4. Modify `.app/package.json`

Make sure you add the following scripts to the `package.json` inside the `.app` directory.

```json
{
  "scripts": {
    "check": "npx prettier .. --check --ignore-path ./../.prettierignore --config ./../.prettierrc",
    "format": "npx prettier .. --write --ignore-path ./../.prettierignore --config ./../.prettierrc"
  }
}
```

Now we can use `npm run check` to check the formatting of our code, and `npm run format` to have Prettier format it all.

Having issues? Be sure to visit the official [documentation](https://prettier.io/docs/en/) for Prettier.

## Adding New `package.json` to the Root

By adding an additional `paackge.json` file at the root of our repository, we can bridge the gap between you entering commands at the root directory and the commands being executed inside the `.app` folder.

### 1. Create `package.json` in the root directory

Copy the codeblock below into the new file.

```json
{
  "scripts": {
    "i": "cd .app && npm i",
    "install": "cd .app && npm install",
    "start": "cd .app && npm start",
    "build": "cd .app && npm run build",
    "update": "cd .app && npm update",
    "check": "cd .app && npm run check",
    "format": "cd .app && npm run format",
    "prepare": "cd .app && npm run prepare",
    "test": "cd .app && npm run test"
  }
}
```

### 2. Modify `.app/package.json`

Verify the following scripts are added.

```json
{
  "scripts": {
    "prepare": "cd .. && husky .app/.husky",
    "check": "npx prettier .. --check --ignore-path ./../.prettierignore --config ./../.prettierrc",
    "format": "npx prettier .. --write --ignore-path ./../.prettierignore --config ./../.prettierrc",
    "test": "npx @11ty/eleventy --dryrun"
  }
}
```

## Custom Vercel HTTP Headers

This section will touch on:

- [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
- [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [Permissions-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
<!-- - [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) -->

### Create a new `vercel.json` in the root

Copy the codeblock below into the new file.

```json
{
  "installCommand": "cd .app && npm i",
  "buildCommand": "cd .app && npm run build",
  "outputDirectory": ".app/dist",
  "framework": "eleventy",
  "headers": [
    {
      "source": "/service-worker.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(self), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(self), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(self), usb=(), web-share=(self), xr-spatial-tracking=(), clipboard-read=(self), clipboard-write=(self), gamepad=(), speaker-selection=(self), conversion-measurement=(self), focus-without-user-activation=(), hid=(self), idle-detection=(), interest-cohort=(), serial=(), sync-script=()"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

Having issues? Be sure to visit the official [documentation](https://vercel.com/docs/projects/project-configuration).

Enjoy!

[^1]: Swap in your favorite package manager (NPM, PNPM, Bun).
[^2]: This is the configuration I use for my projects.
