import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import CreatePlaylistPage from '../pages/CreatePlaylistPage';

interface State {
    token: {
        isLogin: boolean;
    }
}

const PrivateRoutes = () => {
    const { isLogin } = useSelector((state:State) => state.token);
    // console.log(isLogin);

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                    {isLogin && <Redirect exact from={window.location.href} to="/create-playlist"/>}
                </Route>

                <Route exact path="/create-playlist">
                    {isLogin ? <CreatePlaylistPage /> : <Redirect exact from="/create-playlist" to="/" />}
                </Route>
            </Switch>
        </Router>
    )
}

export default PrivateRoutes;