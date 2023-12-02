import React from 'react';
import './banner.css';

function banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
        <p className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
        </div>
    <div className="fade"></div>
    </div>
  )
}

export default banner