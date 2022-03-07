import './App.css';
import React, { Component } from 'react';
import BMI from './CountCalc/BMI';
import Bank from './CountCalc/Bank';
import Harga from './CountCalc/HargaAkhir';
import Biner from './CountCalc/converter/Biner';
import Hexadecimal from './CountCalc/converter/Hexadecimal';
import Octal from './CountCalc/converter/Octal';
import Decimal from './CountCalc/converter/Decimal';
// import element Alert yang telah dibuat  

class App extends Component {

  render() {
    return (//display column
      <div className='App container '>
        <div className='row'>
          {/* bmi */}

          {/* bank */}
          <div className='col-md-10 d-flex'>  <Biner />
            <Hexadecimal />
          </div>
          <div className='col-md-10 d-flex'>
            <Octal />
            <Decimal /></div>
          {/* harga */}
          <div className='col-sm-10 d-flex'>
            <BMI />
            <Bank />
          </div>
          <div className='col-sm-10 d-flex'>
            <Harga />
          </div>
          {/* converter */}
        </div>



      </div>
    );
  }
}
export default App;