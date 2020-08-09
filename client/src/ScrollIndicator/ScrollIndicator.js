import React from 'react';
import classes from './ScrollIndicator.module.css';
import scroll from '../assets/images/scroll.png';

const scrollIndicator = (props) => {
    return <div className={classes.scrollDiv}>
        <img className={classes.scrollImage} src={scroll} alt="scroll indicator"></img>
    </div>
};

export default scrollIndicator;