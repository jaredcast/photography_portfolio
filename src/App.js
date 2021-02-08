import Navbar from './Navbar';
import Amsterdam from './Amsterdam';
import London from './London';
import Photo from './Photo';
import Footer from './Footer';
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
            <Route exact path = "/london"> 
              <London/>
            </Route>
          </Switch>
        </div>
      </div>
      <footer class = "footer"><p>test</p></footer>
    </Router>
  );
}

export default App;
