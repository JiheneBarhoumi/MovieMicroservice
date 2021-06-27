import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import Axios from "axios";
import { useHistory } from "react-router";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      username: userName,
      email: email,
      password: password,
    };
    console.log(newUser);
    Axios.post("http://localhost:5000/auth/register", newUser)
      .then((resp) => {
        console.log(resp);
        history.push("/signin");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  return (
    <div className="signup">
        <h2>Please fill out the form to get started !</h2>
      <form onSubmit={addUser}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="btn-danger" block bsSize="large" disabled={!validateForm()} type="submit">
          signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;