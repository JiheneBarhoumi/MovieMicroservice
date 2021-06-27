import React, { useState, useContext } from "react";
import Axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router";

import "./Signin.css";

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userParams = {
      username: username,
      password: password,
    };

    Axios.post("http://localhost:5000/auth/login", userParams)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data);
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <h2>Get logged in now !</h2><br/>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="text" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button className="btn-danger" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Signin;