import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app_video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app_video-overlay flex_center">
        <div
          className="app_video-overlay-circle flex_center"
          role="button"
          tabIndex={0}
          onClick={handleVideo}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              // Trigger the same action as the click event handle
            }
          }}
        >
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
