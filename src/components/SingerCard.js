import React from 'react'

function SingerCard({ name, setCurrentSinger, singer, mic = '' }) {

  return (
        <h3 onClick={ () => setCurrentSinger(singer) } >{ name } { mic }</h3>
  )
}

export default SingerCard