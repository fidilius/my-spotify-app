import Login from '../components/Login';
import Tracks from '../components/Tracks';
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { saveToken } from '../slice/token-slice';
import { Box, Grid } from '@mui/material';

type Acc = { [key: string]: string };

const getReturnedToken = (hash:string) => {
    const stringAfterHastag = hash.substring(1);
    const params = stringAfterHastag.split('&');
    const paramsSplitUp = params.reduce<Acc>((acc:Acc, param) => {
        // console.log(param);
        const [key, value] = param.split('=');
        acc[key] = value;
        return acc;
    }, {});

    return paramsSplitUp;
}

const LoginPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.hash) {
            const { access_token } = getReturnedToken(window.location.hash);
            dispatch(saveToken(access_token));
            // localStorage.setItem('access_token', access_token);
        }
    });

    return(
        <Box sx={{ flexGrow: 1}}>
            <Grid 
                container 
                spacing={2}
                sx={{ 
                    backgroundColor: "#212121", 
                    padding: "0 20px 40px"}}>
                        
                    <Grid 
                        item xs={12} 
                        sx={{
                            height:"100vh",
                            display:"flex", 
                            justifyContent: 'center', 
                            alignItems:"center"}}>
                                
                        <Login />
                    </Grid>
                    
                    <Tracks />
            </Grid>
        </Box>
    )
}

export default LoginPage;