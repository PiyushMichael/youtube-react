//vdo item

import React from 'react';

class VideoItem extends React.Component {
	render(){
		return <div style={{margin: '10px'}}>
			<div>{this.props.title}</div>
			<div>{this.props.thumb}</div>
			<p>by {this.props.channel}</p>
		</div>
	}
}

export default VideoItem;