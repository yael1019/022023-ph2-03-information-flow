import React, { useState } from 'react'
import NowPlaying from './NowPlaying'
import SongList from './SongList';
import SingerList from './SingerList';

function App() {
  const [singer, setSinger] = useState(null)
  const [song, setSong] = useState(null)

  function displayNowPlaying(singer, song) {
    console.log(singer)
    console.log(song)
  }

  return (
    <div className="App">
      <h1>Karaoke Player</h1>
      <NowPlaying song={song} singer={singer} />
      <SongList displayNowPlaying={displayNowPlaying} setSong={setSong} />
      <SingerList displayNowPlaying={displayNowPlaying} />
    </div>
  );
}

export default App;
