import PrivateRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <PrivateRoutes />
    </Provider>
  );
}

export default App;
