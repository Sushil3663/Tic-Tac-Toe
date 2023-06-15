import './App.css';
import Board from './components/Board';
import Store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
 <Provider store={ Store}>
    <Board/> 
    </Provider>
    </div>
  );
}

export default App;
