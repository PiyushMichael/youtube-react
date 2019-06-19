import React from 'react';
import VideoItem from './video-item';

const VideoList = ({vids,onVideoSelect}) => {
	const renderedList = vids.map((vid) => {
		return <VideoItem onVideoSelect={() => onVideoSelect(vid)} key={vid.id.videoId} video={vid} />
	});
	return <div className="ui relaxed divided list">{renderedList}</div>
}


export default VideoList;