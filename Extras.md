# Adding Husky

[Husky](https://typicode.github.io/husky/) enhances your commits. We This section will go over:

- How to add Husky to your project
- How to configure it for pre-commits

You are _strongly_ encouraged to follow the official documentation on how to setup your dependencies. Check out Husky's official [documentation](https://typicode.github.io/husky/get-started.html). For the stubborn ones, let's continue.

> [!Attention] Remember to `cd .app` before you start the instructions. These next commands should be ran from inside our `.app` directory.

## 1. Install Husky

```sh
npm install --save-dev husky
```

## 2. Initiate Husky

```sh
npx husky init
```

## 3. Create New Scripts

1. Open `.app/package.json` and find the `scripts` section.
2. Within it, add new `test` entry and verify the `prepare` script matches the one shown below:

```json
"scripts": {
    "prepare": "cd .. && husky .app/.husky",
    "test": "npx @11ty/eleventy --dryrun"
}
```

## 4. Add New Hooks

Add the script `test` to our pre-commit.

```sh
echo "npm test" > .husky/pre-commit
```

## 5. Test Husky without a Commit

Add `exit 1` to the hook script to exit the test without committing anything. for example:

```sh
npm test
exit 1
```

Having issues? Be sure to visit the official [Troubleshooting](https://typicode.github.io/husky/troubleshoot.html) page.
