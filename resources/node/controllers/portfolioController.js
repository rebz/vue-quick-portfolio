'use strict';
const result = require('dotenv').config({path: './.env'})
const env = result.parsed,
      fs = require('fs'),
      showdown  = require('showdown'),
      converter = new showdown.Converter();

function checkCategory(req, res) {
    return !req.params.category ? res.status(400).send({text: 'You did not specify a category.', error: null}) : true
}

exports.getNav = (req, res) => {
    return res.json(fs.readdirSync('./public/portfolio/').filter(i => !(i.indexOf('.') > -1)))
};

// TODO - Convert (getVideos, getMarkdown) to function
//        that returns items from directory, look at
//        params to determine folder.

exports.getVideos = (req, res) => {

    if (checkCategory(req, res)) {

        const path = `/portfolio/${req.params.category}/videos`
        const absPath = './public'+path

        if (!fs.existsSync(absPath)) {
            return res.status(400).send({text: 'The category you specified does not exist.', error: null})
        }

        return res.json(fs.readdirSync(absPath).map(f => {
            return `${path}/${f}`
        }))

    }
};

exports.getMarkdown = (req, res) => {

    if (checkCategory(req, res)) {

        // TODO - get all *.md files
        const markdownFile = `./public/portfolio/${req.params.category}/content.md`;

        if (!fs.existsSync(markdownFile)) {
            return res.status(400).send({text: 'The category you specified does not exist.', error: null})
        }

        fs.readFile(markdownFile, 'utf8', (err, fileContent) => {
            return res.json(converter.makeHtml(fileContent))
        });
    }
};
