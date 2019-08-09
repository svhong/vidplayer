import React from "react";

const VideoItem = ({ video }) => {
    return (
        <div>
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.channelTitle}
            />
        </div>
    )
}

export default VideoItem;