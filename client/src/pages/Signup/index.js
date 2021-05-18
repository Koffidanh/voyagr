import React, { useState } from "react";
import "./style.css";
// import Container from "../../components/Container";
import Card from "../../components/FormCard";
// import Navbar from "../../components/Navbar";
import { Input, LoginBtn, SignupBtn } from "../../components/Form";
// import { json } from "express";
import axios from 'axios'
import { Link } from "react-router-dom";
import NavbarSignup from "../../components/NavbarSignup";
import Footer from '../../components/Footer'
import BackgroundSlider from 'react-background-slider'

// Slider Image Imports 
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'
import image7 from '../../assets/images/image7.png'

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
       <NavbarSignup sticky="top"/>
       <BackgroundSlider
  images={[image1, image2, image3, image4, image5, image6, image7]}
  duration={3} transition={2} style={{maxHeight: '200px'}}/>
        <Card style={{ marginTop: 100, marginBottom: 100, opacity: "90%" }}>
      
          <h2>Sign up</h2>
      


          <h6 className="form-info">Already have an account?</h6>
          <Link to="/login">
            <LoginBtn> Log In </LoginBtn>
          </Link>
        </Card>
        <Footer />
    </div> 
      
  );
}

export default RegisterUser;
