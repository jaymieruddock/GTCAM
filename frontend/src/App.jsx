import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

//Links
import Home from './components/home/home';
import Login from './components/login/login';
import Welcome from './components/welcome/welcome';
import Register from './components/register/register';
import MedicalInfo from './components/medicalinfo/medicalinfo';
import AppointmentList from './components/appointment/appointmentList';
import PrescriptionList from './components/prescription/prescriptionList';
import Pharmacies from './components/pharmacies/pharmacies';
import Message from './components/message/message';



class App extends Component {
  render() {
    return (
      <>
      <Router>
          <Switch>
            <Route exact path="/" component={ Welcome } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/DashBoard" component={ Home } />
            <Route exact path="/medicalinfo" component={ MedicalInfo} />
            <Route exact path="/appointment" component= { AppointmentList } />
            <Route exact path="/prescriptions" component={ PrescriptionList } />
            <Route exact path="/pharmacies" component= { Pharmacies} />
            <Route exact path="/message" component= { Message }/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
