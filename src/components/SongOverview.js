import React, { Component } from "react"
import SongForm from "./SongForm"
import SongHeader from "./SongHeader"
import SongList from "./SongList"

class SongOverview extends Component {
  
    constructor() {
      super()
      this.state = 
      {
        songsList: [
          { Title: "",  // was songName
            Artist: "", 
            Genre: "", 
            Rating: "", 
            Id: ""}   // was songId
        ],
        itemId: ""
      }
      this.addSong = this.addSong.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
    }
  
    addSong = (song) => {
        this.setState(prevState => {prevState.itemId++})
        console.log(this.state.itemId)
        const addSong = {...song, Id: this.state.itemId}
        this.setState(prevState => {
            const newSongList = [...prevState.songsList, addSong]
            return {songsList: newSongList}
        })
    }
    handleDelete(itemId){
        let newSongList = this.state.songsList.filter(item => item.Id !== itemId)
        this.setState({songsList: newSongList})
    }
  
    render() {
      return (
        <div>
            <SongForm addSong={this.addSong} />
            <SongHeader />
            <SongList songs={this.state.songsList} handleClick={this.handleDelete}/>
        </div>
      );
    }
  }
  
  export default SongOverview;

  