# WIP 
More to come... still rough for now 

# How to install

1. `nvm use` - If you have NVM installed, it will ready the `.nvmrc` file and switch to Node 10.15
1. `npm i`
1. `npm i -g pm2` - If you do not have PM2 installed, this is meant to run the Node server
1. `npm run dev` || `npm run prod`
1. `pm2 start --name portfolio resources/node/server.js` - Will start the Node server

## Adding Portfolio Items and Content

Create folders under `./public/portfolio/`. For each folder created, a nav item will be generated. Node will look inside each folder for the following structure:
```
public/
    portfolio/
        content.md
        gifs/
        videos/*.mp4
        images/  
```

# What is this repo?

Generate a simple portfolio site through folder and assets alone. 

### How does it work?
...

### Why did I create this?
With little-to-no time to update a portfolio site, I wanted the ability to drop some assets and a markdown file into a public directory via SFTP and have my portfolio update.
