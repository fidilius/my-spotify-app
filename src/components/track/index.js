import './index.css';
import data from '../../data/data.js';
import {H2, H3} from '../header';
import Image from '../image';
import Button from '../button';

const track = () => {
    return (
        <div className='track'>
            <Image src={data.album.images[1].url} alt="" />
            <H2 text={data.album.name} />
            <H3 text={data.artists[0].name} />
            <Button text={'Select'} />
        </div>
    );
};

export default track;