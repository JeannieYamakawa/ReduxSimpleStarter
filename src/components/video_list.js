import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) =>{
    const videoItems = props.videos.map((thisVideo)=>{
        //passed property onVideoSelect is from App 
        return (
            < VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={thisVideo.etag}
            video={thisVideo} />
        )
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
