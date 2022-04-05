import "./index.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Playlist = ({songs}) => {
    const [playlist, setPlaylist] = useState({title: '', description: ''});
    const access_token = useSelector(state => state.token.access_token);

    const createPlaylist = async () => {
        await fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playlist.title,
                description: playlist.description,
                public: false
            })
        })
        .then(response => response.json())
        .then(json => {
            const id = json.id;
            fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uris: songs
                })
            })
        })
        alert(`Playlist ${playlist.title} created!`);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        playlist.title.length >= 10 ? createPlaylist() : alert('The title must be at least 10 characters long');
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
                            <td><input type="text" name="title" onChange={handleInputChange} /></td>
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