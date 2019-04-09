const base_path = __dirname.replace('resources/node', '')
const result = require('dotenv').config({
    path: base_path + '/.env'
})

let env = result.parsed
if (result.error) {
    throw result.error
}

let express = require('express'),
    fs = require('fs'),
    app = express(),
    server = null,
    cors = require('cors'),
    port = env.NODE_PORT || 3000,
    bodyParser = require('body-parser')

// const Sentry = require('@sentry/node');
// Sentry.init({ dsn: env.SENTRY_URL });
//
// // The request handler must be the first middleware on the app
// app.use(Sentry.Handlers.requestHandler());
//
// app.get('/', function mainHandler(req, res) {
//     throw new Error('Broke!');
// });
//
// // The error handler must be before any other error middleware
// app.use(Sentry.Handlers.errorHandler());
//
// // Optional fallthrough error handler
// app.use(function onError(err, req, res, next) {
//     // The error id is attached to `res.sentry` to be returned
//     // and optionally displayed to the user for support.
//     res.statusCode = 500;
//     res.end(res.sentry + '\n');
// });

// app.listen(3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// setup Cross Origin Policies
app.use(cors({origin:true,credentials: true}));

// Generate Routes
let routes = require('./routes/portfolio'); //importing route
routes(app); //register the route

// Setup 404 Route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// if using HTTPS, setup a secure server
if (env.NODE_HTTPS === 'true') {
    console.log('HTTPS enabled');
    server = require('https').createServer({
        key: fs.readFileSync(env.NODE_SSL_KEY),
        cert: fs.readFileSync(env.NODE_SSL_CERT)
    }, app);
} else {
    server = require('http').createServer(app);
}

// Start Node Server
server.listen(port);

console.log('Node server started on port ' + port);
