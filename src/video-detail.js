import React from 'react';

class VideoDetail extends React.Component{
	render(){
		if(this.props.video) return <div>
		video detail...
		<p>{this.props.video.snippet.title}</p>
		</div>
		else return <div>video detail...</div>
	}
}

export default VideoDetail;