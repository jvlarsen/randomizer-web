import axios from 'axios';

const apiUrl = 'http://localhost:55226';

const countClicks = () => {
	axios.get(`${apiUrl}/api/Participant`);
	console.log('Function called.');
}

const savePlayer = (name) => {
	console.log('Save player called with ' + name + ' playing for {team}.')
}

export default {
	countClicks,
	savePlayer,
}
