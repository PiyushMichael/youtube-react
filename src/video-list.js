import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component{
	render(){
		return <div>
			video list...
			<p>I have {this.props.vids.length} videos..</p>
		</div>
	}
}

export default VideoList;