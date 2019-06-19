//vdo item

import React from 'react';

const VideoItem = ({video,onVideoSelect}) => {
	return <div onClick={() => onVideoSelect(video)} className="video-item item">
		<img className="ui image" src={video.snippet.thumbnails.medium.url}/>
		<div className="ui content">
			<a onClick={(e) => e.preventDefault()} href={"https://www.youtube.com/watch?v="+video.id.videoId} className="ui header">{video.snippet.title}</a>
			<p className="ui description">by {video.snippet.channelTitle}</p>
		</div>
	</div>
}

export default VideoItem;

/*title={vid} thumb={vid.snippet.thumbnails.medium.url} channel={vid.snippet.channelTitle}*/