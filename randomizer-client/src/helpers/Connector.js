import axios from 'axios';

const apiUrl = 'http://localhost:55226';

const countClicks = () => {
	axios.get(`${apiUrl}/api/Participant`);
	console.log('Function called.');
}


export default {
	countClicks,
}
