import React from "react";
import Content from "./../content/content";
import Mouse from "../mouse/mouse";
import "./VideoPlayer.css";

const VideoPlayer = ({ source, live, github }) => {
  return (
    <>
      <video className="videoTag" autoPlay loop muted className="videoPlayer">
        <source src={source} type="video/mp4" />
      </video>
      <Content action={<Mouse />} source={github} live={live} />
    </>
  );
};

export default VideoPlayer;
