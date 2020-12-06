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

```
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
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


__Note__ : All these requires [node.js](https://nodejs.org/en/) installed on your local machine as we are using [react.js](https://github.com/facebook/react)
