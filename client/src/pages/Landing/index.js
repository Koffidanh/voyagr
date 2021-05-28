import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
// import NavbarSignup from "../../components/NavbarSignup";
import Header from '../../components/Header/Header';
import PlacesToVisit from '../../components/About/AboutCards';
import Footer from '../../components/Footer';
import Image from '../../assets/images/bg.png';
import MessageSender from "../../components/MessageSender"


const RegisterUser = () => {
  const [addPostLocation, setAddPostLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '60vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 2
  });

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
      <MessageSender addPostLocation={addPostLocation} setAddPostLocation={setAddPostLocation} viewport={viewport} setViewport={setViewport} />

      <PlacesToVisit />
      <Footer />
    </div>
  );
}

export default RegisterUser;

// import BackgroundSlider from 'react-background-slider'


// Slider Image Imports 

{/* <BackgroundSlider
images={[image1, image2, image3, image4, image5, image6, image7]}
duration={3} transition={2} style={{ maxHeight: '200px' }} /> */}