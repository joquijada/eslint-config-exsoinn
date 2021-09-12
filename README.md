# eslint-config-exsoinn
![banner](doc/img/style-police.jpg)
> Enforcing Node.js code style since 2021.

### Install
```shell
npm install --save-dev --save-exact @exsoinn/eslint-config-exsoinn@latest eslint@8.22 eslint-config-standard@"<18" eslint-plugin-import@"<3" eslint-plugin-n@"<16" eslint-plugin-promise@"<7" eslint-config-serverless-stack@"<1"
```


### Prepare Your Project
1. Create a file called `.eslintrc.yml` and add the following contents to it:

```
extends:
  - '@exsoinn/eslint-config-exsoinn'
```

2. In WebStorm enable ESLint. Go to `Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint` and select the `Automatic ESLint configuration` radio button.

3. Make WebStorm reformat code (`⌥⌘L`) according to ESLint rules by doing the following. Note that you need to repeat these steps _if_ you update ESLint rules,
   1. Right-click on `.eslintrc.yml`, select `Apply ESLint Code Style Rules`.
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
Most times this won't be necessary, and you can use as-is the ESLint rules that this configuration provides. But if you need to override any of the inherited ESLint configs, you can just add them to the `.eslintrc.yml` file. The details of how to configure ESLint are beyond the scope of this document, but you can go [here](https://eslint.org/docs/user-guide/configuring/) to learn more.

### Developer
If you need to update this package, run below commands to release a new version, making sure you strictly adhere to NPM [semver](https://semver.org/) rules:

- `npm run release:dry-run # a dry run gives you a chance to review the resulting new version`
- `npm run release         # performs a release, publishing the updated package to the NPM registry`
