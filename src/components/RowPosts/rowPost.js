import React from 'react'
import { useState, useEffect } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import axios from '../../axios'
import './rowPost.css'

function RowPost(props) {
  const [cards, setCardes] = useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
      console.log(response.data.results)

      setCardes(response.data.results)
    }).catch((err) => {
      alert('error')
    })
  }, [])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          cards.map((obj) =>{
            return( <img className='poster' src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)
          }
          )}
      </div>
    </div>
  )
}

export default RowPost