import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import PlanList from './PlanList';
import PlanDetails from './PlanDetails';
import Billing from './Billing';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/plans" component={PlanList} />
        <Route path="/details" component={PlanDetails} />
        <Route path="/billing" component={Billing} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;
