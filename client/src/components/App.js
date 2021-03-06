import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import Auth from '../hoc/auth'
import NavBar from './views/NavBar/NavBar'
import ListPage from './views/ListPage/ListPage'
import Expage from './views/ex/Expage'
import SearchPage from './views/Search/SearchPage'
import {Provider} from 'react-redux'


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
          //주소규칙, component는 보여주고 싶은 컴포넌트
          <Route exact path="/" component={Auth(LandingPage, null,true )} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/listpage" component={ListPage} />
          <Route exact path="/ex" component={Expage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
      {/*</Provider>*/}
    </Router>

  );
}

export default App;

