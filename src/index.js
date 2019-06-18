import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar.js';
import VideoDetail from './video-detail.js';
import VideoList from './video-list.js';
import youtube from './youtube'

const KEY = 'AIzaSyC2RvDeHfik1ztpDEUfw2_N7cGllFLrIhg';

class App extends React.Component{
	onTermSubmit = (term) => {
		//alert('searching '+term);
		youtube.get('/search',{
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				key: KEY
			}
		});
	}
	
	render(){
		return <div className="ui container">
			<SearchBar onFormSubmit={this.onTermSubmit} />
			<VideoDetail />
			<VideoList />
		</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));