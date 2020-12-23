import React from "react";
import Content from "./../content/content";
import Mouse from "../mouse/mouse";

const VideoPlayer = ({ source, live, github }) => {
  return (
    <>
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ width: "70vw", height: "70vh" }}
      >
        <source src={source} type="video/mp4" />
      </video>
      <Content action={<Mouse />} source={github} live={live} />
    </>
  );
};

export default VideoPlayer;
