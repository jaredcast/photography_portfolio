import Navbar from './Navbar';
import Amsterdam from './Amsterdam';
import Photo from './Photo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> {/*Add different paths in switch*/}
            <Route exact path = "/">
              <Photo/>
            </Route>
            <Route exact path = "/amsterdam"> 
              <Amsterdam/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
