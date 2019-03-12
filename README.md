# Style Rules Exercise

This is just the source code of an exercise I do after a talk about "How to write clean CSS and BEM naming notation"

## Requirements

- A basic knowledge of [React](https://reactjs.org)

- [NodeJS](https://nodejs.org) 10.13.0. I recomend using [NVM](https://github.com/creationix/nvm) to manage Node versions on your machine

## Getting started

Clone the repo

```bash
git clone git@github.com:samfcmc/style_rules_exercise.git
```

Install dependencies

```bash
npm install
```

Start the local server

```bash
npm start
```

The server will start. Just open your browser and type the URL that is being shown in your terminal.
You can make changes to the source code and them will be immediately reflected in the browser.

## The exercise

The main component (App) is loading the `SectionMess` component.
Inside the `client/src/components` folder open `SectionMess.js` and `SectionMess.styl` files. The class names and all of the style rules are a totally mess. See if you can make it look nice and clean.
Use BEM notation for that ;)

The `.styl` file is a [Stylus](http://stylus-lang.com/) that is later transpiled to CSS. You don't need to worry about this process, because this project uses [Parcel](https://parceljs.org/) that handles everything for you.

Happy coding :)
