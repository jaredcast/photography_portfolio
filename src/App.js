import Navbar from './Navbar';
import Photo from './Photo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Photo/>
        <div className="content"></div>
      </div>
    </Router>
  );
}

export default App;
