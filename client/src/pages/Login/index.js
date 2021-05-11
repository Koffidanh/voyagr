import React, { useState } from "react";
import "./style.css";
import Container from "../../components/Container";
// import Card from "../../components/Card";
// import Navbar from "../../components/Navbar";
import { Input, FormBtn } from "../../components/Form";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email, password
        })
      })
    console.log(await res.json())
  }

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h2>Log in</h2>
        <form onSubmit={onSubmit}>
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

export default LoginPage;
