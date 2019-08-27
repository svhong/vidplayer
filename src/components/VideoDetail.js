import React from "react";

export default function VideoDetail({ video }) {

    if (!video) {
        return <div></div>
    }

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-player">
            <div className="ui embed">
                <iframe src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video.snippet.title}></iframe>
            </div>
            <div className="video-description ui segment">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}