//vdo item

import React from 'react';

class VideoItem extends React.Component {
	render(){
		return <div className="video-item item">
			<img className="ui image" src={this.props.thumb}/>
			<div className="content">
				<a href={"https://www.youtube.com/watch?v="+this.props.link} className="header">{this.props.title}</a>
				<p className="description">by {this.props.channel}</p>
			</div>
		</div>
	}
}

export default VideoItem;