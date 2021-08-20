const getScoresButton = document.querySelector('#getscores');
const scoresSection = document.querySelector('#scores');

async function getScores() {
	console.log('test');
	const response = await fetch('/scores');
	const { payload } = await response.json();
	scoresSection.innerHTML = '';
	payload.forEach(showScores);
}
function showScores(score) {
	const scoreView = createScoreView(score);
	scoresSection.appendChild(scoreView);
}
function createScoreView({ id, name, score }) {
	const paragraph = document.createElement('div');
	const idOfPerson = document.createElement('span');
	const nameP = document.createElement('span');
	const scoreP = document.createElement('span');
	idOfPerson.innerText = id;
	nameP.innerText = name;
	scoreP.innerText = score;
	idOfPerson.appendChild(nameP);
	paragraph.appendChild(idOfPerson);
	paragraph.appendChild(scoreP);
	return paragraph;
}

getScoresButton.addEventListener('click', getScores);
