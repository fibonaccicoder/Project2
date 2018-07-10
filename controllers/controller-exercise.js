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

// *** Exercise Routes
// =============================================================

// Request to find and display all exercise tasks (complete/incomplete).
router.get("/exercise", isLoggedIn, function (req, res) {
    db.Task.findAll({
        where: {
            category: "Exercise",
            userId: req.user.id
        }
    }).then(function (results) {
        var hbsObject = {
            tasks: results
        };
        // console.log(results);
        res.render("exercise", hbsObject);
    });
});

// Add new exercise task to the db.
router.post("/exercise/create", isLoggedIn, function (req, res) {
    console.log("req.body: " + req.body);
    console.log("req.post: " + req.post);
    db.Task.create({
        task_name: req.body.task_name,
        category: req.body.category,
        value: req.body.value,
        // estimated_time: req.body.estimated_time,
        frequency: req.body.frequency,
        userId: req.user.id
    }).then(function (results) {
        return res.json(results);
    });
});

// Set exercise task completed status to true.
router.put("/exercise/update/:id", isLoggedIn, function (req, res) {
    db.Task.update({
        completed: req.body.completed
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbTask) {
        if (dbTask.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.json(dbTask);
            res.status(200).end();
        }
    });
});

// Delete exercise task from db.
router.delete("/api/tasks/:id", isLoggedIn, function (req, res) {
    db.Task.destroy({
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

// // Delete task from db.
// router.delete("/api/tasks/:id", function (req, res) {
//     db.Task.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (results) {
//         if (results.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404.
//             return res.status(404).end();
//         } else {
//             return res.json(results);
//             res.status(200).end();
//         }
//     });
// });
module.exports = router;