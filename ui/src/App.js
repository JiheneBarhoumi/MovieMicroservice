import React, {useState} from 'react';
import Main from './Main.js';
import Signup from './Signup.js';
import Signin from './Signin.js';
import Feedbacks from './Feedbacks.js';
import {motion} from 'framer-motion';
import logo from './img/movieapp.png';
import { BrowserRouter, Route } from 'react-router-dom';
import {Bootstrap,Button} from 'react-bootstrap';
import { useHistory } from "react-router";
function App() {
  const history = useHistory();
  return (
        <BrowserRouter>
        <div className="App">
          <br/>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/feedbacks' component={Feedbacks} />
            <Route exact path='/movies' component={Main} />
        </div>
        </BrowserRouter>
  );
}

export default App;
