import * as React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import { createPlaylist } from "../../lib/fetchAPI";
import { Button, TextField, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface State {
    token: {
        access_token: string;
    }
}

const ButtonCreate = styled(Button)({
    borderRadius: '40px',
    textTransform: "none",
    color: "white",
    backgroundColor: "rgba(29, 185, 84, 0.8)",
    "&:hover": {
        backgroundColor: "rgb(29, 185, 84)",
    }
});

const Playlist: React.FC<{songs:string[]}> = ({songs}) => {
    const [playlist, setPlaylist] = useState({name: '', description: ''});
    const { access_token } = useSelector((state:State) => state.token);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(songs.length === 0){
            alert('Please select songs!');
            return false;
        }
        playlist.name.length >= 10 ? createPlaylist(playlist, access_token, songs) : alert('The title must be at least 10 characters long');
    }

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setPlaylist({...playlist, [name]: value});
    }

    return(
        <Grid 
            data-testid="playlist" 
            container 
            spacing={2} 
            justifyContent='center'
            sx={{
                width: '50%',
                margin: "50px auto 0",
                padding: "30px",
                borderRadius: "10px", 
                backgroundColor: "#53535365",
                '&:hover': {
                    backgroundColor: "#404040",
                }}}>

            <Grid item xs={12} mb={2}>
                <Typography component='div' variant='h3' fontFamily='serif'>Create Playlist</Typography>
            </Grid>
            
            <Grid item xs={9} >
                <Box component="form">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Typography component='div' variant='h5' fontFamily='serif'>Title:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                name="name" 
                                onChange={handleInputChange}
                                variant="filled" 
                                label="must be at least 10 characters"
                                sx={{backgroundColor: "#ccffcc"}}
                                fullWidth
                                color='success'/>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography component='div' variant='h5' fontFamily='serif'>Description:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField 
                                name="description" 
                                onChange={handleInputChange}
                                variant="filled" 
                                label="description" 
                                sx={{backgroundColor: "#ccffcc"}}
                                fullWidth multiline 
                                rows={2}
                                color='success'/>
                        </Grid>

                        <Grid item xs={12} mt={2}>
                            <ButtonCreate 
                                type='submit'
                                size='large' 
                                variant="contained" 
                                onClick={handleSubmit}
                                >Create
                            </ButtonCreate>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Playlist;