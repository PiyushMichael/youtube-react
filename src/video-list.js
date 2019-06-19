import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component{
	render(){
		const renderedList = this.props.vids.map((vid) => {
			return <VideoItem link={vid.id.videoId} key={vid.id.videoId} title={vid.snippet.title} thumb={vid.snippet.thumbnails.medium.url} channel={vid.snippet.channelTitle} />
		});
		
		return <div className="ui relaxed divided list">{renderedList}</div>
	}
}

export default VideoList;