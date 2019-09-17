<h1 align="center">Welcome to Leboncoin Messages App 👋</h1>

<em>Note: L'utilisation de redux n'était pas nécéssaire/est overkill. Je l'ai utilisé ici afin de démontrer mes connaissances de cette lib utilisée tres souvent dans des projets plus conséquents.</em>

## Install

You may have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/fr/) installed on your machine.

Then, clone the project and run the following command:

```sh
yarn
```

## Usage

### Development

In development, use this command to have hot module replacement:

```sh
yarn start
```

<br>
By default, the application is run at http://localhost:3000  
Be sure you don't have another application running on this port when you start it

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Production

```sh
yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Run tests

Tests are run thanks to [Jest](https://jestjs.io).  
React components are tested with [React testing library](https://testing-library.com/docs/react-testing-library/intro)

To launch them, run this command

```sh
yarn test
```
