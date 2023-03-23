# Cocktails - Cocktail Database App in React and Vite

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

## Project Briefing 👁

This is a cocktail database app created in React Js powered by Vite. For UI components, customized bootstrap theme from bootswatch is used. This app is using data from the CocktailDb website and contains details about loads of cocktails across the globe. Please support them, in my knowledge it's one of the easiest APIs to use with no authentication. 

Using this app you would be able to search through the cocktail collection by name, you'd be able to filter them by whether they're alcoholic or not, filter by ingredients and more.

### Why Vite ?

Vite achieves significant performance improvements over webpack by using intelligent code splitting.

In development mode, Vite splits the application code into two.

One is the dependency code, i.e. code imported from node_modules. This code is processed using esbuild. Esbuild is a javascript bundler written in Go that processes around 10-100 times faster than Webpack.

Two is the application code e.g. the custom-written code for the application such as .jsx, .vue, or .scss files.

Unlike Webpack, Vite uses route-based code splitting to load only the parts of the code that need to be loaded, unlike Webpack which has to rebundle everything.

Using Vite can dramatically improve the performance of coding many languages during development, and reduce the feedback loop time which is ordinarily incurred with Webpack.

Vite also provides an HMR API over native ESM. In this way, precise instant updates can be made to the page with reload or loss of application state. This is an in-built capability when using the Vite CLI to create an app using create-vite.

To optimise assets, Vite currently uses Rollup. Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. Rollup allows you to develop code in a modern way using ES modules, and compiles it back to older supported formats such as CommonJS modules, AMD modules, and IIFE-style scripts.

## Built With 🧰 

* [React JS](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Vite](https://vitejs.dev)
* [Docker](https://www.docker.com)
* [Nginx](https://www.nginx.com)

## Updates

- 23/3/23

Conversion into a Vite React project started. For this, package.json was first updated. Then, index.html file was copied from one of my other existing Vite React project inside the root folder.  

## Authors

* Made with ❤️ by **Amit Prafulla (APFirebolt)** - (https://apgiiit.com/)

## Project setup

This should be a piece of cake for you if you have worked under npm environment before. Simply initialize an empty project using 'npm init' and then install packages or simply clone the project and install dependencies.
```
npm install
npm run dev
```
### Compiles and minifies for production
```
npm run build
```

## Updates

- 26-05-2022 : Minor changes in the UI
## Project Screenshots

Please find some of the screenshots of the application. First screenshot depicts the homepage of the application. Updated screenshots would be added soon.

![alt text](./screenshots/home.png)

This shows Cock detail page which displays picture of the cocktail, name and ingredients used to make this variant.

![alt text](./screenshots/cocktail_detail.png)

This screenshot shows the list of cocktails fetched when searched by name for a cocktail.

![alt text](./screenshots/cocktail_list.png)

This shows page where list of all Cocktail names when filtered through categories, ingredients and glass.

![alt text](./screenshots/cocktail_tags.png)
