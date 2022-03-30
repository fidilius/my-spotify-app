import './index.css';
import {Title, Artist} from '../textSong';
import AlbumImage from '../albumImage';
import Button from '../button';

const track = ({srcAlbum, textTitle, textArtist}) => {
    return (
        <div className='track'>
            <AlbumImage src={srcAlbum} alt={textTitle} />
            <Title text={textTitle} />
            <Artist text={textArtist} />
            <Button text={'Select'} />
        </div>
    );
};

export default track;