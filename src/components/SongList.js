import React from "react"
import SongItem from "./SongItem"

function SongList(props) {
    const handleDeleteClick = props.handleClick
    const songList = props.songs
    const songs = songList.map(element => <SongItem songs={element} 
        key={element.songId} handleClick={handleDeleteClick}/>)
    return(
        <div>
            {songs}
        </div>
    )
}

export default SongList