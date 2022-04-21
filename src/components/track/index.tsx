import { Title, Artist } from './components/textSong';
import AlbumImage from './components/albumImage';
import Button from './components/button';
import data from '../../data/data';
import { Grid, Card, CardContent, Box } from '@mui/material';

const Track: Function = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ backgroundColor: "#212121" }}>
                {data.map((d, i) => {
                    return (
                        <Grid data-testid='track' key={d.album.id + i} item xs={6}>
                            <Card sx={{ backgroundColor: "#5353533b", display: 'flex', alignItems: "center", height: "100%"}} >
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
                })}
            </Grid>
        </Box>
    )
};

export default Track;