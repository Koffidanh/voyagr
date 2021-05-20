import React, { useState } from "react";
import "./style.css";
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


  return (
    <div>
      <NavbarSignup sticky="top" />
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5, image6, image7]}
        duration={3} transition={2} style={{ maxHeight: '200px' }} />

      <Footer />
    </div>

  );
}

export default RegisterUser;
