import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar.js';
import VideoDetail from './video-detail.js';
import VideoList from './video-list.js';
import youtube from './youtube'


const KEY = 'AIzaSyC2RvDeHfik1ztpDEUfw2_N7cGllFLrIhg';

class App extends React.Component{
	state = {videos: []};
	
	setResponse = (r) => {
		this.setState({videos: r.data.items});
		console.log(this.state.videos);
	}
	
	onTermSubmit = term => {
		const response = youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				key: KEY
			}
		}).then((response) => this.setResponse(response));
	}
	
	render(){
		return <div className="ui container">
			<SearchBar onFormSubmit={this.onTermSubmit} />
			<VideoDetail />
			<VideoList vids={this.state.videos}/>
		</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));