const { query } = require("../index");
const scores = require("./scoresData");

async function populateTableScores(data) {
  for (let i = 0; i < data.length; i++) {
    const res = await query(
      `INSERT INTO energizerscores(name,score) VALUES ($1, $2) RETURNING *`,
      [data[i].name, data[i].score]
    );
    console.table(res.rows);
  }
}
populateTableScores(scores);
