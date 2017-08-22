#!/bin/bash
CONTAINER_NAME=blog_backend_dev
WEBSITE_ASSETS=/home/ngetka/Desktop/blog_v2/src/frontend

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME

docker run -d -p 80:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v ${WEBSITE_ASSETS}:/static/ -v `pwd`:/app library/node:latest /app/scripts/dev_entrypoint.sh

/*Script taken from guide at: http://paislee.io/the-ultimate-nodejs-development-setup-with-docker/
*Notes:
*
*1.  WEBSITE_ASSETS is the path to the compiled front-end files, i.e. all your linted and/or uglified website stuff.
*
*2. This example assumes a backend running on port 3000 that's wired out to port 80.
*
*3. `pwd` is the current working directory so make sure to run this from backend-codebase with ./scripts/development.sh.
*
*4. We're starting from the public NodeJS Docker image, although nothing is keeping us from using our own prebuilt development image. -- I changed it to latest
*
*5. We're starting the container on a custom entrypoint…
*/
