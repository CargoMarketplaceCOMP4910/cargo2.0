# Cargo Marketplace

![CarGo_Temp_Logo](./public/--favicon.png)

Native Web app repo for building web application using [react-docs](https://reactjs.org/docs/getting-started.html)

## Installing

- Install Node.JS from the web
- Fork this repo to your user account 
- Clone this repo to your local machine 
`git clone https://gitlab.com/your-username/cargo2.0.git`
- Move into project directory 
`cd cargo2.0`
- Installing dependencies 
`yarn or npm install`


- Starting app in developement mode
`yarn start or npm start`
- Open localhost on your web browser



## Other Scripts

 ### Setting Upstream
 - Add the Remote Upstream Repository `git remote add upstream [Upstream git URL]`
 - Fetch the Upstream Branches `git fetch upstream`
 - Merge Upstream Changes into your Downstream Repository `git merge upstream/master`
 - Resolve conflicts if you have

 ### Developement
 - Starting  web  `yarn start or npm start`


 ## Package Managers

 - [Yarn](https://yarnpkg.com/en/docs/install)
 - [NPM](https://www.npmjs.com/)

 ## File Structure
It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:


my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── asssets
    ├── Components
    ├── Firebase
    ├── Handlers
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── Reducers
    ├── serviceWorker.js
    ├── setupTests.js
    └── Views


1.  *`/node_modules`*: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  *`/src`*: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  *`.gitignore`*: This file tells git which files it should not track / not maintain a version history for.

4.  *`.prettierrc`*: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. *`package-lock.json`* (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. *(You won’t change this file directly).*

6. *`package.json`*: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. *`actions`*: This folder has all the auth functions like basic auth, checkout and get product.

8. *`assets`*: This folder has all the css, images ,jss and scss files.

9. *`Components`*: This folder has all the components like header, footer, grid and other front end design elements.

10. *`Handlers`*: This folder has handlers like Image compressor and Product card dynamic load.

11. *`Reducers`*: This folder has all functions like auth functions like auth, checkout user and get product.

12. *`Views`*: This folder will have all the front end views - authentication, Checkout, Home, Pages. PostProduct, Product, profile.

13. *`README.md`*: A text file containing useful reference information about your project.


_Note_ : All these requires [node.js](https://nodejs.org/en/) installed on your local machine as we are using [react.js](https://github.com/facebook/react)
