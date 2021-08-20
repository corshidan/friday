var express = require("express");
var router = express.Router();
const { getScores } = require("../models/scores");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // create async function
  // create a variable to store the scores
  // assign the variable to the response we await from the db
  // res.json with all the data
  // change the status code to 200 ok
  // wrap everything in the catch block
  // account for any possible errors. send 400 status code with different msg

  try {
    const scores = await getScores();
    res.status(200).json({
      message: "Here are the scores",
      payload: scores,
    });
  } catch (error) {
    res.status(404).json({
      message: "Cant load the scores",
      payload: error.message,
    });
  }
});

module.exports = router;
