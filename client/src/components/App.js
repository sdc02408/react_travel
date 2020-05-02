import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import Auth from '../hoc/auth'
import NavBar from './views/NavBar/NavBar'
import ListPage from './views/ListPage/ListPage'
import {Provider} from 'react-redux'
import store from '../store/store'



function App() {
  return (
 
    <Router>
      {/*<Provider store={store}>*/}
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
    
        <NavBar />
      {/*style={{paddingTop: '1px', minHeight: 'calc(100vh -80px'}}*/}
        <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null,true )} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/listpage" component={ListPage} />
        </Switch>
      </div>
      {/*</Provider>*/}
    </Router>

  );
}

export default App;

