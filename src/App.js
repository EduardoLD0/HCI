import './App.css';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Checkin from './pages/Checkin';
import About from './pages/About/About';
import Flota from './pages/About/Flota';
import Destinos from './pages/About/Destinos';

const App = (props) => {

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
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/about/flota'>
            <Flota />
          </Route>
          <Route exact path='/about/destinos'>
            <Destinos />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
