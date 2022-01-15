import React from 'react';
import Kalpas  from "../MainComponents/Kalpas"

import {
  BrowserRouter as Router,
  Switch,
  Route
,Redirect
} from "react-router-dom";

const RoutingValue = () => {
    return (
        <Router>
      <div>
       
        <Switch>
          <Route  path="/Kalpas">
            <Kalpas />
          </Route>
          <Route exact path="/">
          
            <Redirect  to="/Kalpas" />
          </Route>

          <Route  path="*">
          
            <Redirect  to="/Kalpas" />
          </Route>
         
        </Switch>
      </div>
    </Router>
    );
};

export default RoutingValue;