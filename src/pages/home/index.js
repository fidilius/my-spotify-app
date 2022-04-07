import './index.css'
import data from '../../data/data.js';
import Track from '../../components/track'
import Login from '../../components/Login';
import Search from '../../components/Search';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
    const isLogin = useSelector(state => state.token.access_token) !== '';
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
                {data.map((track, index) => {
                    return <Track key={track.album.id + index} srcAlbum={track.album.images[1].url} textTitle={track.album.name} textArtist={track.artists[0].name}/>
                })}
            </div>
        </div>
    )
}

export default Home;