import React from 'react'

function SongCard({title, artist}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

export default SongCard