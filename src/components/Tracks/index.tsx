import { Title, Artist } from './components/textSong';
import AlbumImage from './components/albumImage';
import Button from './components/button';
import data from '../../data/data';
import { Grid, Card, CardContent } from '@mui/material';

const Track: Function = () => {
    return (
        data.map((d, i) => {
            return (
                <Grid 
                    key={d.album.id + i} 
                    item 
                    xs={6}>
                    <Card
                        data-testid='track'  
                        sx={{ backgroundColor: "#5353533b",
                        display: 'flex', 
                        alignItems: "center", 
                        height: "100%",
                        '&:hover': {
                            backgroundColor: '#53535365',
                        }}} >
                            <CardContent sx={{flex: "1"}} >
                                <AlbumImage src={d.album.images[2].url} alt={d.album.name} />
                            </CardContent>
                            <CardContent sx={{flex: "4", textAlign:"left"}} >
                                <Title text={d.album.name} />
                                <Artist text={d.artists[0].name} />
                            </CardContent>
                            <CardContent sx={{flex: "1"}} >
                                <Button />
                            </CardContent>
                    </Card>
                </Grid>
            )
        })
    )
};

export default Track;