import React from 'react'

function SongCard({ title, artist, setCurrentSong, song }) {
  return (
    <div onClick={ () => setCurrentSong(song) }>
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

export default SongCard