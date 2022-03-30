import './App.css';
import Track from './components/track';
import data from './data/data.js';
import Login from './components/Login';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className="search">
        <Login />
        <Search />
      </div>
      <div className="tracks">
        {data.map((track) => {
          return <Track key={track.album.id} srcAlbum={track.album.images[1].url} textTitle={track.album.name} textArtist={track.artists[0].name}/>
        })}
      </div>
    </div>
  );
}

export default App;
