import React from 'react';
import { useEffect,useState } from 'react';
import axios from '../../axios';
import {API_KEY,imageUrl} from '../../Constants/constants'
import './banner.css';

function Banner() {
 const [movie, setMovie] = useState()

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((response) => {
        console.log(response.data.results[3])
      setMovie(response.data.results[9])
      })
  },[]);

  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : 'loading'}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <p className='description'>{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner