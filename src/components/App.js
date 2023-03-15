import React, { useState } from 'react'
import NowPlaying from './NowPlaying'
import SongList from './SongList';
import SingerList from './SingerList';

function App() {
  const [singer, setSinger] = useState(null)
  const [song, setSong] = useState(null)

  return (
    <div className="App">
      <h1>Karaoke Player</h1>
      <NowPlaying />
      <SongList />
      <SingerList />
    </div>
  );
}

export default App;
