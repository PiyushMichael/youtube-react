//youtube API file
import axios from 'axios';
const KEY = 'AIzaSyC2RvDeHfik1ztpDEUfw2_N7cGllFLrIhg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 15,
		key: KEY
	}
});