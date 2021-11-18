import './App.css';
import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import configureStore from './redux/configureStore';
import Routing from './components/Routing';

function App() {
  const store = configureStore;

  return (
    <Provider store={store}>
      <div>
        <Routing />
      </div>
    </Provider>
  );
}

export default App;

library.add(fab, faCheckSquare, faCoffee);
