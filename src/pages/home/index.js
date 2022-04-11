import './index.css'
import Track from '../../components/Track'
import Login from '../../components/Login';
import Search from '../../components/Search';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
    const isLogin = useSelector(state => state.token.isLogin);
    console.log(isLogin);

    return(
        <div>
            <div className="search">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                            {isLogin && <Redirect exact from={window.location.href} to="/create-playlist"/>}
                        </Route>

                        <Route exact path="/create-playlist">
                            {isLogin ? <Search /> : <Redirect exact from="/create-playlist" to="/" />}
                        </Route>
                    </Switch>
                </Router>
            </div>

            <div className="tracks">
                <Track />
            </div>
        </div>
    )
}

export default Home;