import React from "react";
import video from "../assets/video/1.mp4";
import "./VideoBar.css";

const VideoBar = () => {
    return (
        <div className="video-container">
            <div className="full-screen">
                <div className="full-screen__body">
                    <div className="full-screen__title">Your </div>
                    <div className="full-screen__text">treiner</div>
                </div>
                <div className="full-screen__body">
                    <div className="full-screen__title">There</div>
                    <div className="full-screen__text">mantra</div>
                </div>
                <div className="full-screen__body">
                    <div className="full-screen__title">Your</div>
                    <div className="full-screen__text">Motivation</div>
                </div>
                <video
                    controls
                    autoPlay
                    loop
                    muted
                    className="full-screen__video"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default VideoBar;
