import React from 'react'
import { useState, useEffect } from 'react'
import { imageUrl } from '../../Constants/constants'
import axios from '../../axios'
import './rowPost.css'

function RowPost(props) {
  const [cards, setCardes] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
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
            return( <img className={ props.isSmall ?'smallPoster':'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)
          }
          )}
      </div>
    </div>
  )
}

export default RowPost