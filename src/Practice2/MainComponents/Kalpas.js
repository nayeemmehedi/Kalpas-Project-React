import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";
import Home from "./Home";
import KalpasChild from "./KalpasChild";
import { kalpasContext } from "../ContextValue/SecendKalpasContext";
import Avator from "./Avator/Avator";
import Feedback from "./Feedback/Feedback";
import FeedbackChild from "./Feedback/FeedbackChild";
import { FormContext } from "../ContextValue/ThirdFormContext";

const Kalpash = () => {
  const [formValue3] = useContext(FormContext);

  const [toggleValue, settoggleValue] = useContext(kalpasContext);

  const toggle = () => {
    settoggleValue(!toggleValue);
  };

  return (
    <Router>
    <div className="row ">
      <div className="col-3 ">
        <div
          className="pt-5 border border-danger me-5 shadow"
          style={{ height: "100vh" }}
        >
          <Avator></Avator>

          {formValue3 && (
            <KalpasChild state={toggleValue} toggle={toggle}></KalpasChild>
          )}

          <Feedback />
        </div>
      </div>

     
      

      <div className="col-8 pt-5">

        <Switch>
     
        <Route exact path="/Kalpas">
          <Home></Home>
        </Route>

        <Route   path="/Kalpas/home">
          <Home></Home>
        </Route>
        <Route  path="/Kalpas/feedback">
          <FeedbackChild></FeedbackChild>
        </Route>
        </Switch>
       
      
      </div>
      
     
    </div>
    </Router>
  );
};

export default Kalpash;
