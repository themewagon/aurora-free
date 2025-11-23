# Getting Started with Aurora

This document will guide you on how to get started with the Aurora theme.

## Running in Local Environment

This project is scaffolded using Vite.

- Install Node.js if you do not already have it installed on your machine.
- Open the “Aurora” directory with your cmd or terminal and run “npm i”
- This command will download all the necessary dependencies for the Aurora theme in the node_modules directory.
- Run “npm run dev”. A local web server will start at http://localhost:3000.

## Creating a Production Build

After you've done your customization and are ready to build, follow these steps:

- Run “npm run build” command in your project directory to make the Production build.

This will create an optimized production build by compiling, merging, and minifying all the source files as necessary and will put them in the dist/ folder.

To run the production build locally, run the following commands:

```shell
 npm install -g serve
 serve -s build
```
