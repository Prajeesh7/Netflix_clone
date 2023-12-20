import React from 'react'
import YouTube from 'react-youtube'
import { useState, useEffect } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import axios from '../../axios'
import './rowPost.css'

function RowPost(props) {
  const [cards, setCardes] = useState([])
  const [uId, setuId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      //console.log(response.data.results)

      setCardes(response.data.results)
    }).catch((err) => {
      alert('error')
    })
  });
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };
  const movieId = (id)=>{
    //console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      //console.log(response.data);
      if (response.data.results.length!==0){
        setuId(response.data.results[0])
      }else{
        alert('This movie does not contains any trailor')
      }
      
    })
   
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          cards.map((obj) => {
            return (<img onClick={()=>movieId(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)
          }
          )}
      </div>

      { uId && <YouTube videoId={uId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost