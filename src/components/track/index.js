import './index.css';
import {H2, H3} from '../header';
import Image from '../image';
import Button from '../button';

const track = ({srcAlbum, textTitle, textArtist}) => {
    return (
        <div className='track'>
            <Image src={srcAlbum} alt={textTitle} />
            <H2 text={textTitle} />
            <H3 text={textArtist} />
            <Button text={'Select'} />
        </div>
    );
};

export default track;