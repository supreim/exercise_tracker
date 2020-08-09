import React from 'react';
import classes from './Navbar.module.css';

const navbar = (props) => {
    return <div className={classes.nav}>
        <ul className={classes.navContent}>
            <li className={classes.navItem}><a href="/">Home</a></li>
            <li className={classes.navItem}><a href="/">Exercise List</a></li>
            <li className={classes.navItem}><a href="/">Add Exercise</a></li>

        </ul>
    </div>
};

export default navbar;