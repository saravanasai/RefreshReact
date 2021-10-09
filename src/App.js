
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/"> 
              <Home/>
          </Route>
          <Route path="/create"> 
              <Create/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
