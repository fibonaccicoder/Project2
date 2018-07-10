var express = require("express");
var router = express.Router();


router.get("/affirmations", function (req, res) {

    res.render("affirmations");
});

module.exports = router;