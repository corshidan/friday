// import the query method from the db folder
const { query } = require("../db/index");

// create a async function getScores() that will be called in the routes
// create a variable with the sql string
// query the database for all the scores from the database
// return the data(data.rows)
async function getScores() {
  const sqlString = `SELECT * FROM energizerscores;`;
  const data = await query(sqlString);
  return data.rows;
}

// export all the method from this file.
module.exports = {
  getScores,
};
