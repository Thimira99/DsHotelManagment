
import './App.css';
import './components/SideBar/SideBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Home from './components/Home/home';
import SideBar from './components/SideBar/Sidebar';
import RoomManagement from './pages/RoomManagement';
import TaxiManagement from './pages/TaxiManagement';
import Payment from './pages/Payment';
import Notification from './pages/Notification';

function App() {
  return (
    
    <div>
    
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Login} />
          <Route path='/roomManagement' exact component={RoomManagement} />
          <Route path='/taxiManagement' exact component={TaxiManagement} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/notification' exact component={Notification} />
        </Switch>

        

      </Router>

    </div>

    


  );
}

export default App;
