const router = require("express").Router();


//const movies = require("../routes/movies.routes");
// use per cada ruta


//const celebrities = require("../routes/celebrities.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
