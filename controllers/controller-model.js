// *** Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var db = require("../models");

// *** Routes
// =============================================================
// Index Page (render all burgers to html)
router.get("/", function (req, res) {
    db.Task.findAll({}).then(function(results) {
        var hbsObject = {
            tasks: results
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);

        // !!! Only use line below to display WITHOUT data.
        // res.render("index");
    });
});

// Add new task to the db.
router.post("/api/tasks", function (req, res) {
    db.Task.create({
        task_name: req.body.task_name,
        category: req.body.category,
        value: req.body.value,
        estimated_time: req.body.estimated_time
    }).then(function(results) {
        return res.json(results);
    });
});

// Set task completed status to true.
router.put("/api/tasks/:id", function(req, res) {
    db.Task.update({
        completed: req.body.completed
    }, {where: {
        id: req.params.id
    }}).then(function(dbTask) {
        if (dbTask.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.json(dbTask);
            res.status(200).end();
        }
    });
});

// Delete task from db.
router.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({where: {
        id: req.params.id
    }}).then(function(results) {
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