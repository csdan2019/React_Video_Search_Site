import './VideoItem.css';
import React from 'react';

const VideoItem = ({ videoProp, VideoSelect }) => {

    //console.log(props.videoProp.snippet.title); or you can destructure and use {videoProp}
    //recives the single object and gets title
    return (

        <div onClick={()=>VideoSelect(videoProp)} className="video-item item">
            <img alt = {videoProp.snippet.title}className="ui image" src={videoProp.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {videoProp.snippet.title}
                </div>

            </div>
        </div>
    );
};

export default VideoItem;