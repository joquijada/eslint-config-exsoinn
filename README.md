# eslint-config-exsoinn
![banner](doc/img/style-police.jpg)
> Enforcing Node.js code style since 2021.

### Overview
This NPM package wraps around [neostandard](https://github.com/neostandard/neostandard) to provide my favorite ESLint configs to consuming projects, all consolidated in a single place to avoid replicating them in consuming projects. Feel free to re-use t your own leisure, and override ESLint configs in your consuming Node projects with your preferred ESLint configs. 

### Install
_**Note**_: If you're migrating this package from when it used ESLint 8.x, see `Migrating to ESLint 9.x` below first.

```shell
npm install --save-dev @exsoinn/eslint-config-exsoinn@latest neostandard@latest
```


### Prepare Your Project
1. Create a file called `eslint.config.js` and add the following contents to it:

```
import exSoInnStyleConfig from '@exsoinn/eslint-config-exsoinn'

export default [ ...exSoInnStyleConfig() ]
```

2. In WebStorm enable ESLint. Go to `Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint` and select the `Automatic ESLint configuration` radio button.

3. Make WebStorm reformat code (`⌥⌘L`) according to ESLint rules by doing the following. Note that you need to repeat these steps _if_ you update ESLint rules,
   1. Right-click on `eslint.config.js`, select `Apply ESLint Code Style Rules`.
   2. Go to `Editor | Code Style | TypeScript`, click `Set From...` and select `JavaScript`.
   3. Automatically fix lint errors on saving, go to `Languages & Frameworks | JavaScript | Code Quality Tools | ESLint`, check the `Run eslint --fix on save` box.

### Usage
In addition to problems getting reported in the IDE in real-time fashion, you can run ESLint to report errors and optionally fix them automatically via the command line:

```shell
npx lint # report errors, but do not fix them

# or 

npx lint-fix # automatically fix errors
```

### Overriding ESLint Configs
Most times this won't be necessary, and you can use as-is the ESLint rules that this configuration provides. But if you need to override any of the inherited ESLint configs, you can just add them to the `eslint.config.js` file. The details of how to configure ESLint are beyond the scope of this document, but you can go [here](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file) to learn more.

### Migrating to ESLint 9.x
ESLint 9.x introduced [major breaking changes](https://eslint.org/docs/latest/use/migrate-to-9.0.0), which among others now uses [a flat configuration file format](https://eslint.org/docs/latest/use/configure/configuration-files#:~:text=This%20page%20explains%20how%20to%20use%20flat%20config%20files) (read more [here](https://eslint.org/blog/2023/10/flat-config-rollout-plans/)). If you have installed the previous version of this package which used ESLint 8.x, migrate your consuming Node project using these steps:

1. Uninstall these dependencies, some of which are now [managed as a single consolidated dependency](https://v4.eslint.style/guide/migration#:~:text=To%20make%20the%20rules%20configuration%20easier%2C%20we%20merged%20all%20three%20plugins%20into%20one%20single%20plugin),
   ```shell
   npm uninstall eslint-config-serverless-stack eslint-plugin-import eslint-plugin-n eslint-plugin-promise @typescript-eslint/type-utils @typescript-eslint/utils
   ```
2. Install,
   ```shell
   npm install --save-dev @exsoinn/eslint-config-exsoinn@latest neostandard@latest
   ```

### Developer
If you need to update this package, run below commands to release a new version, making sure you strictly adhere to NPM [semver](https://semver.org/) rules:

- `npm run release:dry-run # a dry run gives you a chance to review the resulting new version`
- `npm run release         # performs a release, publishing the updated package to the NPM registry`
