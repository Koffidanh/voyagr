import React, { useState } from "react";
import "./style.css";
import Container from "../../components/Container";
// import Card from "../../components/Card";
// import Navbar from "../../components/Navbar";
import { Input, FormBtn } from "../../components/Form";
// import { json } from "express";
import axios from 'axios'

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault()
    axios.post("/api/register",
      {
        email: email,
        password: password,
      }).then((res) => console.log(res));
  };

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h2>Sign up</h2>
        <form onSubmit={register}>
          <label> Email:</label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label> Password:</label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <FormBtn>
            Submit
              </FormBtn>
        </form>

      </Container>
    </div>
  );
}

export default RegisterUser;
