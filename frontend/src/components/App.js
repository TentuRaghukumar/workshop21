import React from 'react'
import { Switch , Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import LoginUser from './Login-cmpnt';
import RegistrationForm from './Register-cmpnt';


function App() {

  return (
    <BrowserRouter>
     <Switch>
     <Route exact path='/' component={RegistrationForm} />
     <Route exact path='/login' component={LoginUser} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
