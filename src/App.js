import './App.css';
import Track from './components/track';
import data from './data/data.js';

function App() {
  return (
    <div className="App">
      <div className="tracks">
        {data.map((track) => {
          return <Track key={track.album.id} srcAlbum={track.album.images[1].url} textTitle={track.album.name} textArtist={track.artists[0].name}/>
        })}
      </div>
    </div>
  );
}

export default App;
