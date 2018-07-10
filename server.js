// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var mysql2 = require('mysql2')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//welcome to passport
// app.get('/', function (req, res) {

//     res.send('Welcome to Passport with Sequelize');

// });

// Import routes and give the server access to them.
// =============================================================
var indexRoutes = require("./controllers/controller-model.js");
var exerciseRoutes = require("./controllers/controller-exercise.js");
var affirmationsRoutes = require("./controllers/controller-affirmations.js");
var visualizationRoutes = require("./controllers/controller-visualization.js");
var booksRoutes = require("./controllers/controller-books.js");
var journalRoutes = require("./controllers/controller-journal.js");
app.use(indexRoutes, exerciseRoutes, affirmationsRoutes, visualizationRoutes, booksRoutes, journalRoutes);


// Requiring our models for syncing
var db = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});