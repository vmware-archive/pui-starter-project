# Pivotal UI Starter Project

A blank slate for playing with or prototyping [PUI components.](http://styleguide.pivotal.io)

What does this do for me?
It's a self-contained project that has the React and Pivotal UI CSS pipeline already setup. Drop in various Pivotal UI React components and easily see how they look.

If you want to start a fully operational React application (but can live without automatic building of Pivotal UI CSS) check out our [React Starter](https://github.com/pivotal-cf/react-starter)

## How to use:

### Quick Overview

1. Download project
1. Run `npm install`
1. Paste styleguide elements into myComponents.js
1. Run `gulp` to start the server
1. See your changes at [http://localhost:8080](http://localhost:8080)

### Detailed Overview

- Download project (see .ZIP file on the right hand side)
- Unzip, switch to that directory and get the latest npm packages 
`npm install`
- Grab a [styleguide element](http://styleguide.cfapps.io/react.html#dropdown_react) that you want to play with 
`npm install pui-react-dropdowns --save-dev`

- Paste the [styleguide code example](http://styleguide.cfapps.io/react.html#dropdown_react) into myComponents.js . That file is where all your React code resides.
- Run `gulp` to start the server on [http://localhost:8080](http://localhost:8080). This compiles the Pivotal UI css for you.

- To clean up your project: `npm run clean`.

## Internal Team Only:

To install edge PUI packages running on a Sinopia server per [the acceptance docs](https://github.com/pivotal-cf/pivotal-ui/blob/master/CORE_TEAM_DOCS.md#acceptance), `npm run si [package name]` will install the package. (This actually runs `npm install --save --registry http://localhost:4873` but is faster and easier to remember).
