// *** Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var db = require("../models");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

// *** Routes
// =============================================================

// ========== Global Displays ==========
// Index Page (render all burgers to html)
router.get("/", isLoggedIn, function (req, res) {
    db.Task.findAll({}).then(function (results) {
        var hbsObject = {
            tasks: results
        };
        // console.log(hbsObject);
        res.render("dashboard", hbsObject);
    });
});

// Pull the user's name to display in the navbar
router.get("/userinfo", isLoggedIn, function (req, res) {
    db.user.findOne({
        where: {
            id: req.user.id
        }
    })
    .then(function (data) {
        // console.log(data);
        console.log(data.dataValues.firstname);
        return res.json(data.dataValues.firstname);
    });
});
// =============================================================

// ========== Exercise Displays ==========
// Request to find sum of exercise points
router.get("/exercise/points", isLoggedIn, function (req, res) {
    db.Task.sum("value", {
        where: {
            category: "Exercise",
            completed: 1,
            userId: req.user.id
        }
    }).then(function (results) {
        // Send the data to be retrieved by model.js document.ready
        return res.json(results);
        console.log("Exercise points: " + results);
    });
});

// Check to see if any exercise tasks remain incomplete
router.get("/exercise/alltasks", isLoggedIn, function (req, res) {
    db.Task.findOne({
        where: {
            category: "Exercise",
            completed: false,
            userId: req.user.id
        }
    }).then(function (data) {
        return res.json(data);
    });
});
// =============================================================

// ========== Reading Displays ==========
// Request to find sum of reading points
router.get("/reading/points", isLoggedIn, function (req, res) {
    db.Book.sum("value", {
        where: {
            completed: 1,
            userId: req.user.id
        }
    }).then(function (results) {
        // Send the data to be retrieved by model.js document.ready
        return res.json(results);
        console.log("Reading points: " + results);
    });
});
// =============================================================
module.exports = router;