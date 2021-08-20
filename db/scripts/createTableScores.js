const { query } = require('../index');

async function createTable() {
	const createTableQuery = `CREATE TABLE energizerscores(
                                                id SERIAL PRIMARY KEY,
                                                name TEXT NOT NULL,
                                                score INTEGER NOT NULL)`;
	const res = await query(createTableQuery);
	console.log('new table created!');
	console.table(res);
}

createTable();
