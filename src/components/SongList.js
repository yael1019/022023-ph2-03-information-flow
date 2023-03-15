import SongCard from './SongCard.js'
import { songs } from '../data/data.js'

function SongList() {

    const songsDisplay = songs.map(song => <SongCard title={song.title} artist={song.artist} key={song.id} />)
    return (
        <div>
            <h1>Songs:</h1>
            {songsDisplay}
        </div>
    )
}

export default SongList