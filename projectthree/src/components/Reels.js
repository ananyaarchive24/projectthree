import React, { useState, useRef } from 'react';
import '../styles/reel.css';
import reel1 from '../reels/1.mp4';
import reel2 from '../reels/2.mp4';
import reel3 from '../reels/3.mp4';
import reel4 from '../reels/4.mp4';
import reel5 from '../reels/5.mp4';
import reel6 from '../reels/6.mp4';
import reel7 from '../reels/7.mp4';
import reel8 from '../reels/8.mp4';
import reel9 from '../reels/9.mp4';
import reel10 from '../reels/10.mp4';



function Reel() { //adding several ids to give it more of an infinite feed feel atleast for now (same vids repeated)
  const reels = [
    { id: 1, video: reel1, user: "ananya", profileLink: "https://hackclub.slack.com/team/U09JC4QN747" },
    { id: 2, video: reel2, user: "canva", profileLink: "canva.com" },
    { id: 3, video: reel3, user: "canva", profileLink: "canva.com" },
    { id: 4, video: reel4, user: "athena_hackclub", profileLink: "athena.hackclub.com" },
    { id: 5, video: reel5, user: "canva", profileLink: "canva.com" },
    { id: 6, video: reel2, user: "ananya", profileLink: "canva.com" },
    { id: 7, video: reel1, user: "hackclub", profileLink: "canva.com" },
    { id: 8, video: reel2, user: "ananya", profileLink: "canva.com" },
    { id: 9, video: reel5, user: "canva", profileLink: "canva.com" },
    { id: 10, video: reel6, user: "athena", profileLink: "athena.hackclub.com" },
    { id: 11, video: reel7, user: "athena", profileLink: "athena.hackclub.com" },
    { id: 12, video: reel8, user: "ananya", profileLink: "canva.com" },
    { id: 13, video: reel9, user: "hackclub", profileLink: "athena.hackclub.com" },
    { id: 14, video: reel10, user: "canva", profileLink: "canva.com" },
    { id: 15, video: reel4, user: "ananya", profileLink: "canva.com" }
  ];

  const [currentReel, setCurrentReel] = useState(0); //which reel is currently playing
  const videoRefs = useRef([]); 

  const handleScroll = (e) => { //to detect which reel is in view, i learnt this by experimenting a lot with scroll events. all the const below r tp find which reel is in view
    const container = e.target; 
    const scrollTop = container.scrollTop; 
    const reelHeight = container.clientHeight; 
    const index = Math.round(scrollTop / reelHeight);
    
    // When at last reel and scrolling down, loop to first, but this dont work
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
      {reels.map((reel, index) => ( //to show each reel
        <div key={reel.id} className="reel"> 
          <video 
            ref={el => videoRefs.current[index] = el}
            src={reel.video}
            loop
            unmuted
            className="reel-video"
          />

          
          <div className="reel-overlay"> 
            <a target="_blank" rel="noopener noreferrer" href={reel.profileLink} className="profile-link">@{reel.user}</a> 
            <button  //mute unmute btn
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