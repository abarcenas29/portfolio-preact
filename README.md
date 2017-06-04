# Preact Sandbox

A custom made react-sandbox to only include the minimal set of features that is relevent (at least to me) to setup a small-medium size project

# Features

**_Preact_**

Instead of using the bulkier react module set. Preact is a good alternative in delivering efficient react apps with a small footprint. While you can create large apps in Preact. This is (personally) ideal to launch small to medium sized react project. *This fork is fully compatible with most of the react third party modules available in `npm`*

Official Website: [Preact](https://preactjs.com/)

**_Redux_**

Pretty standard if you want to create React Apps that needs to handle data across components. Basically a _predictable state contaner_ its commonly bundled with any react boilerplate like peanut butter to jelly in a sandwich, or _dinuguan (pig's blood)_ to _puto (rice cake)_.

Official Website: [Redux](http://redux.js.org)

**_Thunk_**

An async _redux_ middleware.

_I was originally going for *redux_saga* but given that this sandbox is for small-medium projects, I decided to go with the simpler async callers._

Official Website: [Redux Thunk](https://github.com/gaearon/redux-thunk)

**_PWA_**

Loads the essentials resources in your browser to increase the performance of the app. 

**_Semantic UI_**

This sandbox already includes the semantic-ui style suite as well as option to personalize it to your liking.

Official Website: [Semantic UI Framework](https://semantic-ui.com/), [Semantic UI React](http://react.semantic-ui.com/)

**_Styled Components_**

Component styling. Better than using the `css-loaders` or `style-loders`.

Official Website: [Styled Components](https://www.styled-components.com/)

**_Quick Scaffolding_**

Because `react-router v4` takes an amount of work to setup new routes. This uses `plop` in generating the necessary route and files needed to get started in writing new segments of your app

Other Features ...

* PrettierJS - the opinionated JS formatter to make sure your codebase is standard through out the dev cycle.
* ES Lint (Standard) - this boilerplate is using the [Standard](https://standardjs.com/) style of coding, but running under ESLint.

## Quick Setup

1. Clone the repo  `git clone git@github.com:abarcenas29/preact-sandbox.git`
2. Execute these set of commands:
    1. `yarn`
    2. `yarn run postinstall` -- configures the semantic theme files in the `src` folder
    3. `yarn run eject` -- remove the git folder for creating a new repo
3. Run `yarn run start:dev` or `yarn run start:prod` for production build
4. visit `http://locahost:3333` for dev. `http://localhost:3100` for prod

## Generators

Generators (using `plop`) is used to generate the necessary files to create a new component, or setup a new route.

Script: `yarn run generate`

## To-Dos

* Isomorphic JS (Not working properly with `preact`)
* React Hot Loader (Apparently its not working properly in `preact`)

## Author Notes

This sandbox is merely a way for me to understand on react-boilerplates work. Also give me the capability to make custom-tailored toolset, or edit exisiting toolset in future projects. Anyone is free to use this if they understand how this sandbox work.