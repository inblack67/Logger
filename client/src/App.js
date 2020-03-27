import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/dumb/Navbar';
import Techs from './components/smart/Techs';
import Logs from './components/smart/Logs';
import Home from './components/dumb/Home'


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/techs' component={Techs}/>
            <Route exact path='/logs' component={Logs}/>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
