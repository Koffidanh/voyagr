import React from "react";
import "./style.css";
import Container from "../../components/Container";
// import Card from "../../components/Card";
// import Navbar from "../../components/Navbar";
import { Input, FormBtn } from "../../components/Form";
// import { json } from "express";

function SignupPage() {

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h2>Sign up</h2>
        <form>
          <label> Email:</label>
          <Input
            name="email"
          />
          <label> Password:</label>
          <Input
            name="password"
          />
          <FormBtn
            onClick={() => { }}
          >
            Submit
              </FormBtn>
        </form>

      </Container>
    </div>
  );
}

export default SignupPage;
