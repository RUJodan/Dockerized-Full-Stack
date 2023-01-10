# Dockerizing a Full Stack Skeleton Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project was also bootstrapped with [Auth0 Typescript](https://github.com/auth0-developer-hub/spa_react_javascript_hello-world_react-router-6/tree/basic-authentication-with-api-integration) and modified with inspiration from their UI layout.

This project includes: Full docker containers (database is abstracted so you can use what you want via standard images), Typescript, Oauth2, EsLint, Prettier, basic account login and creation (via postgres), and modern solutions like CSS vars/theme, React Router V6, and more!

## Available Scripts

In the project directory, you can run:

### `docker-compose up --build`

Runs the app in the development mode.\
Open [http://localhost:3050](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Local development without docker is also available by using the scripts in `package.json` (build, dev, start, eject etc)

### `docker compose -f docker-compose.yml -f production.yml up`

Runs the app in the production mode.\
Open [http://localhost:3050](http://localhost:3050) to view it in the browser.

You will have to inject production environment variables into the `production.yml` file as desired.

Local development without docker is also available by using the scripts in `package.json` (build, dev, etc)

## PG & PGAdmin Commands

PGADmin
`docker run --name pgadmin -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=youremail -e PGADMIN_DEFAULT_PASSWORD=yourpassword -d dpage/pgadmin4`

Configure Server on PGAdmin by using `docker inspect [container id]` and use the Gateway IP Address in your connection

`docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v data:/var/lib/postgresql/data -d postgres` to pull the postgress container from docker
