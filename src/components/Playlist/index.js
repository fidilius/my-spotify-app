import "./index.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

const Playlist = ({songs}) => {
    const [playlist, setPlaylist] = useState({name: '', description: ''});
    const {access_token} = useSelector(state => state.token);

    const createPlaylist = async () => {
        const{name, description} = playlist;
        await axios.post('https://api.spotify.com/v1/me/playlists', {
            name,
            description,
            public: false,
            collaborative: false
        }, {
            headers: {
                'Authorization': 'Bearer ' + access_token,
            }
        })
        .then(response => {
            const {id} = response.data;
            axios.post(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                uris: songs
            }, {
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                }
            })
        })
        alert(`Playlist ${name} created! Check your Spotify account.`);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(songs.length === 0){
            alert('Please select songs!');
            return false;
        }
        playlist.name.length >= 10 ? createPlaylist() : alert('The title must be at least 10 characters long');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlaylist({...playlist, [name]: value});
    }

    return(
        <div className="playlist">
            <h2>Playlist</h2>
            <form>
                <table className="tablePlaylist">
                    <tbody>
                        <tr>
                            <td><label htmlFor="title">Title:</label></td>
                            <td><input type="text" name="name" onChange={handleInputChange} placeholder='must be at least 10 characters'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">Description:</label></td>
                            <td><textarea name="description" onChange={handleInputChange}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}

export default Playlist;