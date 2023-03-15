import React, { useState } from 'react'
import { singers } from '../data/data.js'
import SingerCard from './SingerCard';

function SingerList({ currentSinger, setCurrentSinger }) {

  // const [currentSinger, setCurrentSinger] = useState(null)

  const karaokeSingerDisplay = singers.map(singer => {
    if (currentSinger === singer) {
      return (
        <>
          <SingerCard
            name={singer.name}
            setCurrentSinger={setCurrentSinger}
            singer={singer} key={singer.id}
            mic={'🎤'}
          />
          {/* <div>🎤</div> */}
        </>
      )
    } else {
      return (
        <SingerCard
          name={singer.name}
          setCurrentSinger={setCurrentSinger}
          singer={singer} key={singer.id}
        />)
    }
  }
  )

  return (
    <div>
      <h2>Singers:</h2>
      {karaokeSingerDisplay}
    </div>
  )
}

export default SingerList