import './App.css';
import data from './data/data.js';

function App() {
  return (
    <div className="App">
      <div className='song'>
        <img src={data.album.images[1].url} alt="" />
        <h2>{data.album.name}</h2>
        <h3>{data.artists[0].name}</h3>
        <button>Select</button>
      </div>
    </div>
  );
}

export default App;
