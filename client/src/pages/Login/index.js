import React, { useState } from "react";
import "./style.css";
// import Container from "../../components/Container";
import Card from "../../components/FormCard";
import { Input, LoginBtn, SignupBtn } from "../../components/Form";
import { Link } from "react-router-dom";


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

      <Card style={{ marginTop: 100 }}>
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
          <LoginBtn>
            Log In
          </LoginBtn>
        </form>

        <h6 className="form-info">Don't Have an Account?</h6>
        <Link to="/signup">
          <SignupBtn> Sign up </SignupBtn>
        </Link>
      </Card >
    </div >
  );
}

export default LoginPage;
