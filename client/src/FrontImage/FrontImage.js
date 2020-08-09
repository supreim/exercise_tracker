import React from 'react';
import classes from './FrontImage.module.css';
import image from '../assets/images/shoes.jpg';

const frongImage = (props) => {
    return <div className={classes.imageDiv}>
        <img className={classes.image} src={image} alt="exercise" />
    </div>
};

export default frongImage;