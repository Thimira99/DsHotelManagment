
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientHome from './Home/clientHome';
import ClientLogin from './Login/clientLogin';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ClientBooking from './ClientBooking/clientBooking';
import ViewClientBooking from './ViewClientBooking/viewBooking';
import ClientUpdate from './EditClient/clientUpdate';
import register from './Login/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={ClientHome} />
          <Route path='/bookings' component={ClientBooking} />
          <Route path='/viewBookings' component={ViewClientBooking} />
          <Route path='/edit/:id' component={ClientUpdate} />
          <Route path='/' exact component={ClientLogin} />

          {/* Client register routes */}
          <Route path='/JoinNow' component={register} />

          <Redirect to='/' />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
