import React, { useState, useRef } from 'react';
import '../styles/reel.css';
import reel1 from '../reels/1.mp4';
import reel2 from '../reels/2.mp4';
import reel3 from '../reels/3.mp4';
import reel4 from '../reels/4.mp4';
import reel5 from '../reels/5.mp4';

function Reel() {
  const reels = [
    { id: 1, video: reel1, user: "ananya", profileLink: "https://hackclub.slack.com/team/U09JC4QN747" },
    { id: 2, video: reel2, user: "canva", profileLink: "canva.com" },
    { id: 3, video: reel3, user: "canva", profileLink: "canva.com" },
    { id: 4, video: reel5, user: "athena_hackclub", profileLink: "https://slack.com/your-profile" },
    { id: 5, video: reel4, user: "canva", profileLink: "canva.com" },
  ];

  const [currentReel, setCurrentReel] = useState(0);
  const videoRefs = useRef([]);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const reelHeight = container.clientHeight;
    const index = Math.round(scrollTop / reelHeight);
    
    // When at last reel and scrolling down, loop to first
    if (index === reels.length - 1 && scrollTop > (reels.length - 1) * reelHeight + 100) {
      container.scrollTop = 0;
      videoRefs.current[currentReel]?.pause();
      videoRefs.current[0]?.play();
      setCurrentReel(0);
    } else if (index !== currentReel && index < reels.length) {
      videoRefs.current[currentReel]?.pause();
      videoRefs.current[index]?.play();
      setCurrentReel(index);
    }
  };

  return (
    <div className="reels-container" onScroll={handleScroll}>
      {reels.map((reel, index) => (
        <div key={reel.id} className="reel">
          <video 
            ref={el => videoRefs.current[index] = el}
            src={reel.video}
            loop
            muted
            className="reel-video"
          />
          <div className="reel-overlay">
            <a target="_blank" rel="noopener noreferrer" href={reel.profileLink} className="profile-link">@{reel.user}</a>
            <button 
              className="audio-btn"
              onClick={(e) => {
                e.stopPropagation();
                const video = videoRefs.current[index];
                video.muted = !video.muted;
              }}
            >
              {videoRefs.current[index]?.muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reel;