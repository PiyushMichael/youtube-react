import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component{
	render(){
		const renderedList = this.props.vids.map((vid) => {
			return <VideoItem title={vid.snippet.title} thumb={vid.snippet.thumbnails.default.url} channel={vid.snippet.channelTitle} />
		});
		
		return <div>{renderedList}</div>
	}
}

export default VideoList;