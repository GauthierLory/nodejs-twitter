# About the project
NodeJs-twitter is a project to rewrite some of Twitter's functionality using a modern JavaScript-based tool chain. It's mainly a project to deepen my knowledge on Node.js, Express.js and MongoDB.

**This project is outdated**

# Getting Started
## Prerequisites
You must have Node.js and MongoDB installed if you want to run the application locally.
Node.js **v14.15.1**

## Installation
1. Clone the project
```bash
git clone https://github.com/GauthierLory/nodejs-twitter
```
2. install dependencies
```bash
cd ./nodejs-twitter
npm install
```
3. Configure env

The configuration is in the `root`. Please create your own `.env` file.

You can find an example of a `.env` file in `.env.example`.

4. Build tailwindcss file
```bash
npx tailwindcss-cli@latest build ./styles/styles.css -o ./public/css/app.css
```

5. Launch application
```bash
npm run dev
```
## Important
Twitter is a registered trademark of Twitter Inc. This project is intended for learning purposes and should be treated as such.
