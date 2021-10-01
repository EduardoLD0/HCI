import './App.css';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  return (
    <div className='App-header'>
      <div className='App-logo'></div>
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
    <Link to='/home'>
      home
    </Link>
    </div>
  );
}

export default App;
