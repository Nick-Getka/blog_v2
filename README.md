# Nick's Blog Site
This is my personal blog/portfolio site.  Though deployable by anyone the site itself is not intended to be customizable except through extensive superficial modification.  The PostgreSQL database initially loaded with 5 test articles.  When the site is pushed to production it will have actual articles.

##Deployment
The site is hosted on Docker containers and can be built from the project root using docker-compose.  As superuser use the command:
```
docker-compose up --build
```
Before deployment certain environmental variables need to be set in a file name .env.  These are:
```
POSTGRES_PORT=3000
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_PORT=5432
POSTGRES_URL=dockernetwork.postgres
```
