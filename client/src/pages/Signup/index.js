import React, { useState } from "react";
import "./style.css";
// import Container from "../../components/Container";
import Card from "../../components/FormCard";
// import Navbar from "../../components/Navbar";
import { Input, LoginBtn, SignupBtn } from "../../components/Form";
// import { json } from "express";
import axios from 'axios'
import { Link } from "react-router-dom";


const RegisterUser = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const register = async (e) => {
  //   e.preventDefault()
  //   axios.post("/api/register",
  //     {
  //       email: email,
  //       password: password,
  //     }).then((res) => console.log(res));
  // };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <h2>Sign up</h2>
        <form
        // onSubmit={register}
        >
          <label> Email:</label>
          <Input
            // onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label> Password:</label>
          <Input
            // onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <SignupBtn>
            Create Account
              </SignupBtn>
        </form>

        <h6 className="form-info">Already have an account?</h6>
        <Link to="/login">
          <LoginBtn> Log In </LoginBtn>
        </Link>
      </Card>
    </div>
  );
}

export default RegisterUser;
