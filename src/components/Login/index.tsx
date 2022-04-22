import url from '../../lib/spotify';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonLogin = styled(Button)({
    color: "white",
    backgroundColor: "rgba(29, 185, 84, 0.8)",
    "&:hover": {
        backgroundColor: "rgb(29, 185, 84)",
    }
});

const Login = () => {
    const handleLogin = () => {
        window.location.href = url;
    }

    return(
        <ButtonLogin data-testid='btnLogin' onClick={handleLogin} size='large'>Login</ButtonLogin>
    )
}

export default Login;