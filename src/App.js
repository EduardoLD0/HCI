import './App.css';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Checkin from './pages/Checkin'

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/checkin'>
            <Checkin />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
