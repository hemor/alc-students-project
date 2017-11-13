# ALC Students Project
> ALC students project for intermediate web

## How To Setup

```bash
# All commands start from the project root
# This project required mongodb database

# Install dependencies for API app
npm install

# Install dependencies for VueJS web app
cd web/
npm install

# Start API only in dev server (http://localhost:3000)
npm run dev

# Start VueJS web app in dev server with hot reloading (http://localhost:8080)
cd web/
npm run dev

# Build VueJS web app for production with minification
cd web/
npm build


# Start full app in production (api + built vue js web app) (http://localhost:3000)
npm start
