import React from 'react';

class VideoDetail extends React.Component{
	render(){
		if(!this.props.video) return <div>loading...</div>
			
		return (<div>
			<div className="ui embed">
				<iframe src={"https://www.youtube.com/embed/"+this.props.video.id.videoId}></iframe>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{this.props.video.snippet.title}</h4>
				<p className="ui description"><i>by</i> {this.props.video.snippet.channelTitle}</p>
			</div>
		</div>);
	}
}

export default VideoDetail;