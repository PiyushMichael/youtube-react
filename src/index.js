import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar.js';
import VideoDetail from './video-detail.js';
import VideoList from './video-list.js';
import youtube from './youtube'
import './youtube.css';


const KEY = 'AIzaSyC2RvDeHfik1ztpDEUfw2_N7cGllFLrIhg';

class App extends React.Component{
	state = {selectedVideo: null, videos: []};
	
	setResponse = (r) => {
		this.setState({videos: r.data.items, selectedVideo: r.data.items[0]});
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
		this.setState({selectedVideo: video});
	}
	
	render(){
		return <div className="ui container">
			<SearchBar onFormSubmit={this.onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="ten wide column"><VideoDetail video={this.state.selectedVideo}/></div>
					<div className="six wide column"><VideoList onVideoSelect={this.videoSelect} vids={this.state.videos}/></div>
				</div>
			</div>
		</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));