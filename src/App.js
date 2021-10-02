import './App.css';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
    <div>
      <p>
        <ul className='App-header'>
          <li>WebCheck-in    </li>
          <li>Comprar Boletos Aéreos    </li>
          <li>Mis Reservaciones    </li>
          <li>A dónde volamos    </li>
        </ul>
      </p>
      {/* <p>
        <div className='App-logo'></div>
      </p> */}
    </div>
    </div>
  );
}

export default App;
