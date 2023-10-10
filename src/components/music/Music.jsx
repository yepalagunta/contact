// MusicPage.js
import React, { useState } from "react";
import "./Music.css"; // Add your CSS styles here
import { RaceBy } from '@uiball/loaders'
// import { Preloader, Oval } from 'react-preloader-icon';
import Progressbar from './progress bar';
import Time from './experiment'

function MusicPage() {
  // Sample music data
  const [tracks, setTracks] = useState([
    { id: 1, title: "Song 1", artist: "Artist 1", duration: 3*60+45 },
    { id: 2, title: "Song 2", artist: "Artist 2", duration: 4*60+15 },
    { id: 3, title: "Song 3", artist: "Artist 3", duration: 2*60+25 },
    { id: 4, title: "Song 4", artist: "Artist 4", duration: 3*60+7 },
    { id: 5, title: "Song 5", artist: "Artist 5", duration: 1*60+4 },
    { id: 6, title: "Song 6", artist: "Artist 6", duration: 3*60+5 },
    { id: 7, title: "Song 7", artist: "Artist 7", duration: 2*60+12 },
    // Add more sample tracks here
  ]);

  const [currentTrack, setCurrentTrack] = useState(null);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="music-page">
      <div className="track-list">
        <h2>Music Tracks</h2>
        <ul>
          {tracks.map((track) => (
            <li key={track.id} onClick={() => handleTrackClick(track)}>
              {track.title} - {track.artist}
            </li>
          ))}
        </ul>
      </div>
      <div className="player">
        <h2>Player</h2>d
        {currentTrack ? (
          <div>
            <h3>{currentTrack.title}</h3>
            <p>{currentTrack.artist}</p>  
            <RaceBy 
            size={300}
            lineWeight={6}
            speed={currentTrack.duration} 
            color="black" 
            />
            {/* <Progressbar bgcolor="orange" count=currentTrack.duration  height={30} /> */}
            <p>Duration: {String(parseInt(currentTrack.duration/60))+":"+((currentTrack.duration%60)<=10 ? ("0"+String(currentTrack.duration%60)):String(currentTrack.duration%60))}</p>
            {/* You can add a music player component here */}
          </div>
        ) : (
          <p>Select a track to play</p>
        )}
      </div>
      <>
      <Time/></>
    </div>
  );
}

export default MusicPage;
