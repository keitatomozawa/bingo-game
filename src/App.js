import React from 'react';
import './App.css';
import {NumberField} from './number-field.js';
import {MyButton} from './mybutton.js';

export const App = () => {
  return (
      <div className='center-container' style={{marginTop: '100px'}}>
        <NumberField displayed={this.props.displayed} />
        <div className='timer-button-container'>
          <MyButton text={'START'} handleClick={this.props.startRoulette} />
          <MyButton text={'STOP'} handleClick={this.props.stopRoulette} />
          <MyButton text={'RESET'} handleClick={this.props.resetGame} />
        </div>
      </div>
  )
};
