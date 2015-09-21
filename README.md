# pui-starter-project
A blank slate for playing with or accepting pui components

You can put react components in js/myComponents.js and css components in index.html to try them out. You need to install the appropriate packages, either the released versions (follow the [styleguide instructions](http://styleguide-staging.cfapps.io/)) or the [bleeding edge versions found here](https://github.com/pivotal-cf/pivotal-ui/blob/master/CORE_TEAM_DOCS.md#acceptance).

To build CSS and JavaScript, and serve on port 8080, run `gulp`. No need to run dr-frankenstyle first!

To quickly clean up a project (for example to test a different component in isolation), `npm run clean`.

To install edge pui packages running on a Sinopia server per [the acceptance docs](https://github.com/pivotal-cf/pivotal-ui/blob/master/CORE_TEAM_DOCS.md#acceptance), `npm run si [package name]` will install the package. (This actually runs `npm install --save --registry http://localhost:4873` but is faster to type and easier to remember).

The sample project is set up to run jasmine tests in the spec folder, with suffix of `_spec.js` with `gulp jasmine`.
