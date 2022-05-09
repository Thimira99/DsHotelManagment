
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientHome from './Home/clientHome';
import ClientLogin from './Login/clientLogin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={ClientHome} />
          <Route path='/' exact component={ClientLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
