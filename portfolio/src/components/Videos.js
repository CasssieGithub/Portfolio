import React, { useState, useRef } from "react";
import { Waypoint } from "react-waypoint";

const Video = (props) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <Waypoint
      onEnter={handleVideoPress}
      onLeave={handleVideoPress}
      topOffset={"40%"}
      bottomOffset={"40%"}
    >
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        width="550px"
        height="350px"
        muted
        autoplay="autoplay"
        ref={videoRef}
      >
        <source width="300px" height="300px" src={props.src} type="video/mp4" />
      </video>
    </Waypoint>
  );
};
export default Video;
