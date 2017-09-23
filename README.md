# Nick's Blog Site
This is my personal blog/portfolio site.  Though deployable by anyone the site itself is not intended to be customizable except through extensive superficial modification.  The PostgreSQL database initially loaded with 5 test articles.  When the site is pushed to production it will have actual articles.

## Deployment
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

## Site Structure and Features
The blog site is built using a ReactJS frontend, ExpressJS backend and PostgreSQL database.  The ExpressJS server could have been by passed in favor of a direction connection between the the ReactJS frontend and the PostgreSQL database, but I decided it to use the full web-application stack with separate Application, Web/App Server, and Database as a learning exercise in web development as well as provide later room for expansion.

### Frontend
The client side interface is built using ReactJS and is meant to be a responsive, clean website that allows for the easy searching and viewing of the posts.  That being said this is my first ReactJS website and one of my first cracks at frontend design.  The results were mixed and will probably need some massive superficial retooling.  If any designer has any suggestions I am more than happy to hear them!
#### Features
* Responsive and Intuitive Blogsite
* Easy searching for posts
* Admin Portal - Login and Adding, Editing, and Deleting posts
#### Built With
* NodeJS - Javascript framework
* ReactJS - The framework
* React-Router - URL page routing
* React-Bootstrap - Bootstrap for ReactJS
* Webpack - Minifying and bundling the code for production

### Backend
The ExpressJS backend server provides a RESTful API for retrieving, editing and deleting posts from the database.
#### API Queries
* api/Latest -  retrieves latest post
* api/getAllPosts - retrieves all posts
* api/getPosts/:category - retrieves all posts of the :category specified
* api/getPostByID/:id - retrieves post according to the :id specified
#### Built With
* NodeJS - Javascript framework
* ExpressJS - API services
* Bluebird - handling promises
* PG-Promise - handling postgres querying

### Database
```
posts (
  post_id SERIAL NOT NULL,
  post_category cat NOT NULL,
  post_title VARCHAR(100) NOT NULL,
  post_date DATE NOT NULL,
  post_sum TEXT NOT NULL,
  post_text TEXT NOT NULL,

  PRIMARY KEY (post_id)
);
```

## To Do List
* Add Login and secure api authentication
* Add Frontend Login page
* Add Edit Post page
* Add New Post page
* Add Delete Post page
* Deploy system to AWS
* Link system to nicholasgetka.com
* Create update pipeline for the in production site
