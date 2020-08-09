import React, { Component } from 'react';
import classes from './Exercise.module.css';
import getData from '../api/api';



class exerciseList extends Component {
    state = null;

    async dataUpdate() {
        const data = await getData();
        this.setState([data]);
        // console.log("this is the state", this.state)
    }

    componentDidMount() {
        this.dataUpdate();
    }

    list() {
        let exeList = this.state;
        if (exeList) {
            return Object.values(this.state).map(data => {
                return data.map(d => {
                    return <div key={d._id} className={classes.exerciseCards}>
                        <p><span>Exercise:</span> {d.exercise}</p>
                        <p><span>sets:</span> {d.sets}</p>
                        <p><span>reps:</span> {d.reps}</p>
                        <p><span>Time Taken:</span> {d.timeTaken}</p>
                        <p><span>rating:</span> {d.rating}</p>
                        <p style={{ marginTop: "2rem" }}>- "{d.comment}"</p>
                    </div>
                })
            })

        }

    }

    render() {
        return (
            <div className={classes.exerciseContainer}>
                {this.list()}
            </div>
        )
    }
};

export default exerciseList;