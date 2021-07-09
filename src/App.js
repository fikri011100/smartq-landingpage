<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { ProvideAuth, PrivateRoute } from "./common/login"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import './App.css';
import Homepage from './pages/landing/Homepage';
import About from './pages/landing/About';
import Contact from './pages/landing/Contact';
import Login from './pages/landing/Login';
import Register from './pages/landing/Register';

import Antrian from './pages/vendor/Antrian';
import Dashboard from './pages/vendor/Dashboard';
import Pegawai from './pages/vendor/Pegawai';
import Setelan from './pages/vendor/Setelan';


const App = () => {
    return ( <
        ProvideAuth >
        <
        Router >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Homepage }
        /> <
        Route path = "/login"
        exact component = { Login }
        /> <
        Route path = "/register"
        exact component = { Register }
        /> <
        PrivateRoute path = "/dashboard" >
        <
        Dashboard / >
        <
        /PrivateRoute> <
        /Switch> <
        /Router> <
        /ProvideAuth>

        // <Router>
        //   <Switch>
        //     <Route path='/' exact component={Homepage} />
        //     <Route path='/login' exact component={Login} />
        //     <Route path='/register' exact component={Register} />
        //     <Route path='/antrian' exact component={Antrian} />
        //     <Route path='/dashboard' exact component={Dashboard} />
        //     <Route path='/pegawai' exact component={Pegawai} />
        //     <Route path='/setelan' exact component={Setelan} />
        //   </Switch>

        // </Router>
    );

>>>>>>> Stashed changes
}

export default App;
