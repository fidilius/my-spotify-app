import './index.css';
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import Playlist from '../Playlist';
import FormSearch from './components/FormSearch';

const Search = () => {
    const [songs, setSongs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [selectedSong, setSelectedSong] = useState([]);
    const {access_token} = useSelector(state => state.token);

    const searchSongs = useCallback(async() => {
        const songs = await axios.get(`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=10`, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.data.tracks.items)   
        setSongs(songs);
    }, [keyword, access_token]);

    useEffect(() => {
        if (keyword.length === 0) {
            setSongs([]);
        } else if(keyword.length > 2){
            searchSongs();
        }
    }, [keyword, searchSongs]);

    const inputHandler = (e) => {
        setKeyword(e.target.value);
    }

    const searchButtonHandler = () => {
        if(keyword.length === 0){
            alert('Please enter a keyword!');
            return false;
        }
        searchSongs();
    }

    const resetButtonHandler = () => {
        setSelectedSong([]);
    };
    
    const selectButtonHandler = (uri) => {
        const indexSelectedSong = selectedSong.indexOf(uri);
        const newSelectedSong = [...selectedSong];
        (indexSelectedSong < 0) ? newSelectedSong.push(uri) : newSelectedSong.splice(indexSelectedSong, 1);
        setSelectedSong(newSelectedSong);
    };
    
    
    const msToMin = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return(
        <>
        <FormSearch onChange={inputHandler} onSearch={searchButtonHandler} onReset={resetButtonHandler}/>
        {songs.length > 0 && (
            <>
            <h2>Songs List:</h2>
            <div className="tableSearchResult">
                    {songs.map((song, index) => {
                    const {name, artists, album, uri, duration_ms, id} = song;
                    const isSelected = selectedSong.includes(uri);
                        return(
                            <div className='td' key={id+index}>
                                <img src={album.images[2].url} alt="song" />
                                <div className="songInfo">
                                    <h3>{name}</h3>
                                    <p className="lightText">{artists[0].name}</p>
                                    <p className="lightText">{album.name}</p>
                                    <input type="button" onClick={() => selectButtonHandler(uri)} className="selectButtonHandler" value={isSelected ? "Deselect" : "Select"} />
                                </div>
                                <p className="lightText duration">{msToMin(duration_ms)}</p>
                            </div>
                        )
                    })}
            </div>
            </>
        )}
        <Playlist songs={selectedSong} />
        </>
    )
}

export default Search;