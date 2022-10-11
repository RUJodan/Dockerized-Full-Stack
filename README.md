# Dockerizing a Full Stack Skeleton Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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