import './index.css';
import React, { useState } from "react";
import Playlist from '../Playlist';

const Search = () => {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedSong, setSelectedSong] = useState([]);

    const searchSongs = async() => {
        const songs = await fetch('https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=10', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(response => response.json())
            .then(json => json.tracks.items)   
        setSongs(songs);
    }

    const inputHandler = (e) => {
        setSearch(e.target.value);
    }

    const msToMin = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const handleSelectBtn = (uri) => {
        const indexSelectedSong = selectedSong.indexOf(uri);

        const newSelectedSong = [...selectedSong];

        (indexSelectedSong < 0) ? newSelectedSong.push(uri) : newSelectedSong.splice(indexSelectedSong, 1);

        setSelectedSong(newSelectedSong);
    };

        return(
            <>
            <input onChange={inputHandler} className="inputSearch" placeholder='Artists, songs or albums'/>
            <button onClick={searchSongs} className="btnSearch">Search</button>
            {songs.length > 0 && (
                <>
                <h2>Songs List:</h2>
                <table className="tableSearchResult">
                    <thead>
                        <tr>
                            <td><p className="lightText">#</p></td>
                            <td colSpan='2'>
                                <p className="lightText">TITLE</p>
                            </td>
                            <td>
                                <p className="lightText">ALBUM</p>
                            </td>
                            <td>
                                <p className="lightText">DURATION</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => {
                        const isSelected = selectedSong.includes(song.uri);
                            return(
                                <tr key={song.album.name + index}>
                                    <td><p className="lightText">{index+1}</p></td>
                                    <td><img src={song.album.images[2].url} alt="song" key={song.id}/></td>
                                    <td className="songName">
                                        <h3>{song.name}</h3>
                                        <p className="artist">{song.artists[0].name}</p>
                                    </td>
                                    <td><p className="lightText">{song.album.name}</p></td>
                                    <td><p className="lightText">{msToMin(song.duration_ms)}</p></td>
                                    <td><input type="button" onClick={() => handleSelectBtn(song.uri)} className="handleSelectBtn" value={isSelected ? "Deselect" : "Select"} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </>
            )}
            <Playlist songs={selectedSong} />
            </>
        )
    
}

export default Search;