import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import FrontImage from './FrontImage/FrontImage';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';
import ExerciseList from './ExerciseList/ExerciseList';

class App extends Component {
  state = {
    exerciseList: false
  }

  render() {
    return (

      <div className="App">
        <Navbar />
        <div className="space"></div>
        {
          this.state.exerciseList ?
            <div className="exeList">
              <ExerciseList />
            </div>
            : <div className="topSectionContainer">
              <div className="topSection">
                <Header />
                <FrontImage />
              </div>
              <ScrollIndicator className="scroll" />


            </div>
        }
      </div>

    );
  }

}

export default App;
