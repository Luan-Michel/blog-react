// import logo from './logo.svg';
import './App.css';
import Listagem from './components/Listagem'
import Edit from './components/Edit';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App row">
        <Listagem />
        <Edit />
      </div>
    </Provider>
  );
}

export default App;
