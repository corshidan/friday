const path = require('path');
const express = require('express');
const app = express();
const port = 5000;
const scoresRouter = require('./routes/scores');

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
	res.sendFile(path.join(`${__dirname}/views/index.html`));
});
app.use('/scores', scoresRouter);
app.use('/scores/:id', scoresRouter);

app.listen(port, () => {
	console.log('listening on port ' + port);
});
