This is a [Next.JS](https://nextjs.org) boilerplate, set up with additional, opinionated, tooling, such as ESLint / Prettier configs, folder structures, and Typescript / Javascript configs.

Additionally, this boilerplate highly recommends (but does not require) using VSCode as an editor, as it has links appropriate plugins and tools to help with development.

## Requirements

- [NodeJS](https://nodejs.com) - `v18+`
- [Yarn](https://yarnpkg.com) - `v1.22`
- (recommended) [VSCode](https://code.visualstudio.com/) - `latest`

## Installation
Use `yarn create next-app` to clone and setup the boilerplate

```
$ yarn create next-app --example https://github.com/eheaton/cna-boilerplate
```

_NOTE: The template is made to use with `yarn` ... `npm` / `npx` can be used, but documentation is geared towards the former_

## Setup

- From the base of the project directory, run:

```
$ yarn install
```

- Create `.env` file

```
$ copy .env.example .env
```

- Set up `.env` file (replace any secure values, as necessary)

### Commands

- `yarn dev` - Start the NextJS development environment (default to port: 3000)
- `yarn build` - Create a next production build
- `yarn lint` - Run ESLint Accross the project
- `yarn prepare` - (automatically run after `yarn install`) Runs the Husky install scripts
- `yarn refresh` - Delete `node_modules` and `yarn.lock` and do a fresh `yarn install`
- `yarn create-*` - See section on [Helper Commands](#helper-commands-for-creating-components)

## Project Structure

```bash
├── dist                # Build folder for the project (default for NextJS)
├── public              # Publically available files (via. URL)
├── src
│   ├── components
│   │   ├── atoms         # (see "Component Structure" section)
│   │   ├── layouts       # Layout files for the NextJS project
│   │   ├── modules       # (see "Component Structure" section)
│   │   ├── molecules     # (see "Component Structure" section)
│   │   └── organisms     # (see "Component Structure" section)
│   ├── config
│   │   └── site.ts       # (see "Environemnt Variables" section)
│   ├── pages
│   │   ├── api           # API routes for NextJS
│   │   └── ...           # Pages components for the site
│   ├── styles            # Global styles used through out the project / tailwind
│   │   └── fonts         # Local repository of fonts used by OMGYES, but not in project
│   └── constants.ts      # Global contants / ENUMS used around the site
├── global-env.d.ts           # Global types used through out the site
├── next-env.d.ts             # NextJS types for project build (default for NextJS)
├── next.config.js            # Config for nextJS
├── package.json              # Project dependencies, commands, and configurations
├── postcss.config.js         # Config for PostCSS
├── tailwind.config.js        # Tailwinds Config
└── tsconfig.json             # Typescript Config
```

## Component Organization Structure

Components are meant to use the Atomic Design methodology. The structure starts with the smallest, most primative, components and then leverages them as building blocks to become more rhobust and fuller featured components.

In general, they should follow the following principles:

##### Atoms:

Atoms are the basic building block of anything. So, in web development, primary elements like HTML tags, labels, buttons can be considered atoms.

The important thing here is, you have to analyze the context of your product and come up with Atoms. For example, you might define an Atom for Aviator with variant property supporting square and circle images.

##### Molecules:

They are more tangible and can identify as a group of Atoms bonded together. Thus, molecules serve as the backbone of the design system.

As an example, the composition of a search box and a button can be considered as a Molecule. And, whenever we need to use a search, we can reuse this component keeping a consistent look and feel across the application.

##### Organisms:

An organism is a combination of Molecules and Atoms to build a little complex, distinct component. For example, a header or a footer with buttons and a logo can be considered an organism.

The difference with a Molecule is that it will also manage the state and become fully functional as a unit.

##### Modules:

Modules are templates that can be comprised of are reusable collections of Organisms, Molecules, and Atoms put together. Therefore, they are more concrete.

Like an organism, state can also be managed in a Module, to sync updates between the included Organisms, Molecules, and Atoms.

### Helper Commands for Creating Components

A simple script has been added to the project to create components based on a folder / file template that exists in the project under `.fs-templates/react-ts-template`. This automatically scaffolds new components in the appropriate folders. The format for these commands is the following:

```
$ yarn create-(atom|molecule|organism|layout) [ComponentName]
```

_NOTE: Be sure to keep `ComponentName` in CamelCase, as it's the appropriate naming syntax_

## Git Commits

We use [Angular Commit Message Format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format) to maintain a structure for our git messages. This is enforced with [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) and is run before every commit message to determine a valid structure of the GIT commit message.

## Tooling Included For Development

- [PostCSS](https://postcss.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)

### VSCode & Extenstions

VSCode is the recommended cross-platform tool for working with this project. Below are recommended extensions for the project that help with development and ease development and keep it in sync with the core requirements that have been designed for development.

- [Typescript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [.gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)
- [CSS Tools - PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

_NOTE: Extensions can be auto-managed for developers using the `.vscode/extensions.json` for team members_

### Git Hooks

- `pre-commit` - Runs `yarn lint` to lint project
- `commit-msg` - Runs Git MSG linter prior to commmitting messages
- `pre-push` - Runs `yarn build` to ensure project can fully compile

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
