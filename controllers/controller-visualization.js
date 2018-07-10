var express = require("express");
var router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

router.get("/visualization", isLoggedIn, function (req, res) {

    res.render("visualization");
});

module.exports = router;