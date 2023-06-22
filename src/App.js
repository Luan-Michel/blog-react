// import logo from './logo.svg';
import './App.css';
import Listagem from './components/Listagem'
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Listagem />
      </div>
    </Provider>
  );
}

export default App;
