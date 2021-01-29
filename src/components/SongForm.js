import React, { Component } from "react"

class SongForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newIitle: "",
            newArtist: "",
            newGenre: "",
            newRating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {value, name} = event.target
        this.setState({ [name]: value})
    }
    handleClick(event){
        event.preventDefault()
        console.log("click")
        const newSongItem = {Title: this.state.newTitle, Artist: this.state.newArtist, 
                            Genre: this.state.newGenre, Rating: this.state.newRating}
        this.props.addSong(newSongItem)
        this.setState({newIitle: "", newArtist: "", newGenre: "", newRating: ""})
    }

    render(){
    return(
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    name="newTitle"
                    value={this.state.newTitle}
                    onChange={this.handleChange}
                    >
                </input>
                <input 
                    type="text"
                    placeholder="Artist"
                    name="newArtist"
                    value={this.state.newArtist}
                    onChange={this.handleChange}
                    >
                </input>
        
                <select id="Genre" name="newGenre" size="1" onChange={this.handleChange} value={this.state.newGenre} multiple={false}>
                    <option value="Select Genre">Select Genre</option>
                    <option value="Rock">Rock</option>                     
                    <option value="Hiphop">Hip-Hop</option>
                    <option value="Nederlandstalig">Nederlandstalig</option>                  
                    <option value="House">House</option>
                    <option value="Klassiek">Klassiek</option>
                </select>
           
                <select id="Rating" name="newRating" size="1" onChange={this.handleChange} value={this.state.newRating} multiple={false}>
                    <option value="Give rating">Give rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button className="add-button"
                    onClick={this.handleClick}
                >Add Song</button>
            </form>
        </div>
    )
}
}
export default SongForm

