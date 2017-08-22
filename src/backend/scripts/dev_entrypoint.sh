#!/bin/bash

cd /app
npm install
./node_modules/nodemon/bin/nodemon.js --legacy-watch index.js

/*Script taken from guide at: http://paislee.io/the-ultimate-nodejs-development-setup-with-docker/
*Notes:
*
*This runs when the dev container starts. In the previously mounted app directory
*is the npm dependencies to be installed
*
*Instead of node we use nodeam which wraps node and restarts the server when our
*project files change.  The Nodemon executable avoids global install and the
*--legacy-watch is needed for this https://github.com/remy/nodemon#application-isnt-restarting
*
*/
