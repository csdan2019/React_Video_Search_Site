import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, VideoSelect }) => {
    //takes the array of videos and passes it as a single object in the array

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} videoProp={video} VideoSelect={VideoSelect} />;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

