import './index.css';
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { saveToken } from '../../slice/token-slice';
import url from '../../lib/spotify';

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

const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.hash) {
            const { access_token } = getReturnedToken(window.location.hash);
            dispatch(saveToken(access_token));
            // localStorage.setItem('access_token', access_token);
        }
    });
    const handleLogin = () => {
        window.location.href = url;
    }

    return(
        <button data-testid='btnLogin' onClick={handleLogin} className="btnLogin">Login</button>
    )
}

export default Login;