import React from "react"

function SongItem(props){
    return(
            <table class="table">
                 <tbody>
                 <tr>
                    <td className="songItem">{props.songs.Title} </td>
                    <td className="songItem">{props.songs.Artist} </td>
                    <td className="songItem">{props.songs.Genre} </td> 
                    <td className="songItem">{props.songs.Rating} </td>
                </tr>

                 </tbody>
               
                <button className="del-button" onClick={() => props.handleClick(props.songs.Id)}>Delete</button> 
            </table>
    )
}

export default SongItem

