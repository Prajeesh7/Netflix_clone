import React from 'react';
import './banner.css';
import { useEffect } from 'react';
import axios from '../../axios';
import {API_KEY} from '../../Constants/constants'

function banner() {

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).than((response)=>{
      console.log(response.data)
    })
  }, [])
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
      <div className="fade_bottom"></div>
    </div>
  )
}

export default banner