import './index.css'
import data from '../../data/data.js';
import Track from '../../components/track'
import Login from '../../components/Login';
import Search from '../../components/Search';

const Home = () => {
    return(
        <div>
            <div className="search">
                <Login />
                <Search />
            </div>
            <div className="tracks">
                {data.map((track, index) => {
                    return <Track key={track.album.id + index} srcAlbum={track.album.images[1].url} textTitle={track.album.name} textArtist={track.artists[0].name}/>
                })}
            </div>
        </div>
    )
}

export default Home;