import React from "react";
// import React, { useState } from "react";
import "./style.css";
// import Container from "../../components/Container";
import Card from "../../components/FormCard";
// import { Input, LoginBtn, SignupBtn } from "../../components/Form";
// import { Link } from "react-router-dom";
import { Nav, NavLink } from "../../components/Navbar/NavbarElements"
import LoginButton from '../../components/LoginButton';
// import LogoutButton from '../../components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function LoginPage() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   const res = await fetch('/api/login',
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         email, password
  //       })
  //     })
  //   console.log(await res.json())
  // }

  return (
    <div>
      <Nav>
        <NavLink to="/dashboard" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
          {/* <LoginButton /> */}
          {/* <LogoutButton /> */}
        </NavLink>

      </Nav>

      {/* <Card style={{ marginTop: 100 }}>
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
      </Card > */}
    </div >
  );
}

export default LoginPage;
