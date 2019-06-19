import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar.js';
import VideoDetail from './video-detail.js';
import VideoList from './video-list.js';
import youtube from './youtube'
import './youtube.css';


const KEY = 'AIzaSyC2RvDeHfik1ztpDEUfw2_N7cGllFLrIhg';

class App extends React.Component{
	state = {def: null, videos: []};
	
	setResponse = (r) => {
		this.setState({videos: r.data.items, def: r.data.items[0]});
		//console.log(this.state.videos);
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
	videoSelect = (video) => {
		console.log('from the app: ',video);
		this.setState({def: video});
	}
	
	render(){
		return <div className="ui container">
			<SearchBar onFormSubmit={this.onTermSubmit} />
			<VideoDetail video={this.state.def}/>
			<VideoList onVideoSelect={this.videoSelect} vids={this.state.videos}/>
		</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));