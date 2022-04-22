import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { searchSongs } from '../../lib/fetchAPI';
import Playlist from '../Playlist';
import FormSearch from './components/FormSearch';
import { Box, Grid, Card, CardContent, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface State {
    token: {
        access_token: string;
    }
}

interface ISongs {
    id: '',
    name: '',
    artists: [
        {
            name: '',
        }
    ],
    album: {
        images: [
            {
                url: '',
            },
            {
                url: '',
            },
            {
                url: '',
            }
        ],
        name: '',
    },
    uri: '',
    duration_ms: 0,
}

const ButtonSelect = styled(Button)({
    borderRadius: '40px',
    textTransform: "none",
    color: "white",
    backgroundColor: "rgba(29, 185, 84, 0.8)",
    "&:hover": {
        backgroundColor: "rgb(29, 185, 84)",
    }
});

const ButtonDeselect = styled(Button)({
    borderRadius: '40px',
    textTransform: "none",
    color: "rgb(48, 48, 48)",
    backgroundColor: "rgb(228, 228, 228)",
    "&:hover": {
        backgroundColor: "rgb(243, 242, 242)"
    }
});

const Search = () => {
    const [songs, setSongs] = useState<ISongs[]>([]);
    const [keyword, setKeyword] = useState('');
    const [selectedSong, setSelectedSong] = useState<string[]>([]);
    const { access_token } = useSelector((state:State) => state.token);

    useEffect(() => {
        if (keyword.length === 0) {
            setSongs([]);
        } else if(keyword.length > 2){
            searchSongs(keyword, access_token, setSongs);
        }
    }, [keyword, access_token]);

    const inputHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setKeyword(e.target.value);
    }

    const searchButtonHandler = () => {
        if(keyword.length === 0){
            alert('Please enter a keyword!');
            return false;
        }
        searchSongs(keyword, access_token, setSongs);
    }

    const resetButtonHandler = () => {
        setSelectedSong([]);
    };
    
    const selectButtonHandler = (uri: string) => {
        const indexSelectedSong = selectedSong.indexOf(uri);
        const newSelectedSong = [...selectedSong];
        (indexSelectedSong < 0) ? newSelectedSong.push(uri) : newSelectedSong.splice(indexSelectedSong, 1);
        setSelectedSong(newSelectedSong);
    };
    
    
    const msToMin = (millis: number) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < '10' ? '0' : '') + seconds;
    }

    return(
        <Box padding={3} 
            sx={{minHeight: "100vh",
            backgroundColor: "#212121",
            color: "white",
            textAlign: "center"}}>

            <FormSearch onChange={inputHandler} onSearch={searchButtonHandler} onReset={resetButtonHandler}/>
            <Box >
                {songs.length > 0 && (
                    <>
                    <Typography component='p' variant='h4' sx={{margin:"40px 0"}}>Songs List:</Typography>

                    <Grid 
                        data-testid="resultSearch" 
                        container 
                        spacing={2}
                        sx={{ 
                            backgroundColor: "#212121", 
                            paddingBottom: "40px"}}>

                            {songs.map((song, index) => {
                            const {name, artists, album, uri, duration_ms, id} = song;
                            const isSelected = selectedSong.includes(uri);
                                return(
                                    <Grid item xs={6} key={id+index}>

                                        <Card
                                            data-testid='track'  
                                            sx={{ backgroundColor: "#5353533b",
                                            display: 'flex', 
                                            alignItems: "center", 
                                            height: "100%",
                                            '&:hover': {
                                                backgroundColor: '#53535365',
                                            }}} >
                                                <CardContent sx={{flex: "1"}} >
                                                    <img src={album.images[0].url} alt={name} width="130"/>
                                                </CardContent>
                                                <CardContent sx={{flex: "5", textAlign:"left", color: "white"}} >
                                                    <h3>{name}</h3>
                                                    <p >{artists[0].name}</p>
                                                    <p >{album.name}</p>
                                                    <p >{msToMin(duration_ms)}</p>
                                                </CardContent>
                                                <CardContent sx={{flex: "1"}} >
                                                    {isSelected ? <ButtonDeselect onClick={() => selectButtonHandler(uri)} variant="contained">Deselect</ButtonDeselect> : <ButtonSelect onClick={() => selectButtonHandler(uri)} variant="contained">Select</ButtonSelect>}
                                                </CardContent>

                                        </Card>
                                    </Grid>
                                )
                            })}
                    </Grid>
                    </>
                )}
            </Box>
            <Playlist songs={selectedSong} />
        </Box>
    )
}

export default Search;