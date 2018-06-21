import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amchart from './amchart.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{backgroundColor:"black",height:"70px",marginTop:'-1%'}}>

          <h1 className="App-title" style={{color:"white",paddingTop:'20px'}}>Depth Chart</h1>
        </header>
        <Amchart/>
      </div>
    );
  }
}

export default App;
