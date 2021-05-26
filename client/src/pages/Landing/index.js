import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
// import NavbarSignup from "../../components/NavbarSignup";
import Header from '../../components/Header/Header';
import PlacesToVisit from '../../components/About/AboutCards';
import Footer from '../../components/Footer';
import Image from '../../assets/images/bg.png';

const RegisterUser = ()  => {

  const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: '60vh',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  },
  })); 
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlacesToVisit />
      <Footer />
    </div>
  );
}

export default RegisterUser;

// import BackgroundSlider from 'react-background-slider'


// Slider Image Imports 
// import image1 from '../../assets/images/image1.png'
// import image2 from '../../assets/images/image2.png'
// import image3 from '../../assets/images/image3.png'
// import image4 from '../../assets/images/image4.png'
// import image5 from '../../assets/images/image5.png'
// import image6 from '../../assets/images/image6.png'
// import image7 from '../../assets/images/image7.png'

{/* <BackgroundSlider
images={[image1, image2, image3, image4, image5, image6, image7]}
duration={3} transition={2} style={{ maxHeight: '200px' }} /> */}