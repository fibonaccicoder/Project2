var express = require("express");
var router = express.Router();


router.get("/meditation", function (req, res) {

    res.render("meditation");
});

module.exports = router;