
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Login} />
        </Switch>

      </Router>
    </div>


  );
}

export default App;
