import React, { useState } from 'react'
import NowPlaying from './NowPlaying'
import SongList from './SongList';
import SingerList from './SingerList';

function App() {
  // const [singer, setSinger] = useState(null)
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSinger, setCurrentSinger] = useState(null)

  return (
    <div className="App">
      <h1>Karaoke Player</h1>
      <NowPlaying currentSong={ currentSong } currentSinger={ currentSinger } />
      <SongList setCurrentSong={ setCurrentSong } />
      <SingerList currentSinger={ currentSinger } setCurrentSinger={ setCurrentSinger } />
    </div>
  );
}

export default App;
