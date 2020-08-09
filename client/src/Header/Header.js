import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return <div className={classes.container}>
        <h1 className={classes.quote}>Push Through The Limits And Advance</h1>
        <p className={classes.add}>Add Exercise</p>
    </div>
};

export default header;