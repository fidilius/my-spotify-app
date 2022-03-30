import { Component } from "react";
import './index.css';

class Search extends Component{
    state = {songs:[], search:''};

    searchSongs = async() => {
        const songs = await fetch('https://api.spotify.com/v1/search?q=' + this.state.search + '&type=track&limit=10', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response => response.json())
            .then(json => json.tracks.items);   
        this.setState({songs: songs});
    }

    inputHandler = (e) => {
        this.setState({search: e.target.value});
    }

    msToMin(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render(){
        const {songs} = this.state;
        return(
            <>
            <input onChange={this.inputHandler} className="inputSearch"/>
            <button onClick={this.searchSongs} className="btnSearch">Search</button>
            {songs.length > 0 && (
                <>
                <h2>Songs List:</h2>
                <table className="tableSearchResult">
                <tr>
                    <td><p className="lightText">#</p></td>
                    <td colspan='2'>
                        <p className="lightText">TITLE</p>
                    </td>
                    <td>
                        <p className="lightText">ALBUM</p>
                    </td>
                    <td>
                        <p className="lightText">DURATION</p>
                    </td>
                </tr>
                {songs.map((song, index) => (
                    <>
                        <tr>
                            <td><p className="lightText">{index+1}</p></td>
                            <td><img src={song.album.images[2].url} alt="song" key={song.id}/></td>
                            <td className="songName">
                                <h3>{song.name}</h3>
                                <p className="artist">{song.artists[0].name}</p>
                            </td>
                            <td><p className="lightText">{song.album.name}</p></td>
                            <td ><p className="lightText">{this.msToMin(song.duration_ms)}</p></td>                             
                        </tr>
                    </>
                ))}
                </table>
                </>
            )}
            </>
        )
    }
}

export default Search;