# WIP 
More to come... still rough for now 

# How to install
1. `nvm use` - If NVM is installed it will read `.nvmrc` in the root directory and switch to Node 10.15
1. `npm i`
1. `cp .env.example .env` - Copy ENV Example to `.env`
1. Edit `.env` to match your environment
1. `npm run dev` || `npm run prod` 
1. (optional) `npm i -g pm2` - Installs PM2 globally, use to manage `resources/node/server.js`
1. (run server.js, optional) `pm2 start --name portfolio resources/node/server.js` - Will start the Node server

## Adding Portfolio Items and Content
Create folders under `public/portfolio/`. For each folder created, a nav item will be generated. Node will look inside each folder for the following structure:
```
root
├── public/
│   └── portfolio/
│       └── create-your-portfolio-item-folder-here/
│           └── content.md
│           └── gifs/
│               └── # in progress
│           └── videos/
│               └── *.mp4
│           └── images/  
│               └── # in progress
├── resources/
```

# What is this repo?
Generate a simple portfolio site through folder and assets alone. 

### How does it work?
Node returns an array of names based off of folders under `./public/portfolio` to generate the main nav. The same is being applied to content under each portfolio item, Node reads the content and returns a list.

### Why did I create this?
With little-to-no time to update a portfolio site, I wanted the ability to drop some assets and a markdown file into a public directory via SFTP and have my portfolio update.

## TODO
- Ignore pre-defined folder structure, use any folder names to create sub-nav.
- Ignore pre-defined content.md and request any MD files
- Read any file types and understand what to parse them under
- Cache data instead of performing an API request for each route change
- Apply styles and attributes to specific portfolio item assets based off modifiers in filename
- Remove Laravel-Mix and go straight to webpack so we can properly use Dynamic Imports to lazy load routes and components (currently an issue specific to laravel mix that prevents CSS from being rendered when using `.extract()`)
    - https://github.com/JeffreyWay/laravel-mix/issues/1914
- Make it look pretty and responsive!
