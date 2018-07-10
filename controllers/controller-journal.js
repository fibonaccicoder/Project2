var express = require("express");
var router = express.Router();
var db = require("../models");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

router.get("/journal", isLoggedIn, function (req, res) {

    db.Journal.findAll({
        where: {
            userId: req.user.id
        }
    }).then(function (results) {
        var hbsObject = {
            journals: results
        };
        // console.log(results);
        res.render("journal", hbsObject);
    });
});

// router.get("/journalEntries", function (req, res) {

//     res.render("journalEntries");
// });

// *** Book Routes
// =============================================================

// Request to find and display all books (complete/incomplete).
router.get("/journalEntries", isLoggedIn, function (req, res) {
    console.log('It fired!')
    db.Journal.findAll({
        where: {
            userId: req.user.id
        }
    }).then(function (results) {
        var hbsObject = {
            journals: results
        };
        // console.log(results);
        res.render("journalEntries", hbsObject);
    });
});


// Add new book to the db.
router.post("/journal/create", isLoggedIn, function (req, res) {
    // console.log("req.body: " + req.body);
    // console.log("req.post: " + req.post);
    db.Journal.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.user.id
    }).then(function (results) {
        return res.json(results);
    });
});

// Set book completed status to true.
router.put("/api/journal/:id", isLoggedIn, function (req, res) {
    db.Journal.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbJournal) {
        res.json(dbJournal);
    });
});

// Delete book from db.
router.delete("/journal/remove/:id", isLoggedIn, function (req, res) {
    db.Journal.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        if (results.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            return res.json(results);
            res.status(200).end();
        }
    });
});

module.exports = router;