import './index.css';
import {Title, Artist} from './components/textSong';
import AlbumImage from './components/albumImage';
import Button from './components/button';
import data from '../../data/data';

const Track: Function = () => {
    return (
        data.map((d,i) => {
            return (
                <div className='track' key={d.album.id+i}>
                    <AlbumImage src={d.album.images[1].url} alt={d.album.name} />
                    <Title text={d.album.name} />
                    <Artist text={d.artists[0].name} />
                    <Button />
                </div>
            )    
        })
    )
};

export default Track;