'use strict';
module.exports = function(app) {

    let portfolio = require('../controllers/portfolioController');

    app.route('/portfolio/nav')
        .get(portfolio.getNav)

    app.route('/portfolio/videos/:category')
        .get(portfolio.getVideos)

    app.route('/portfolio/markdown/:category')
        .get(portfolio.getMarkdown)
};
