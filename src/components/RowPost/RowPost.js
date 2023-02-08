import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,apiKey} from '../../constants/constants'

function RowPost(props) {
  const [movies,setMOvies]=useState([])
  const [trailer,setTrailer]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    setMOvies(response.data.results)
  })
  },[])
  function movieTrailerHandler(id){
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      setTrailer(response.data.results[0].key);
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {
          movies.map((item,index)=>{
            return (<img onClick={()=>{movieTrailerHandler(item.id)}} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+item.backdrop_path}`} />)
          })
        }
        </div>
    </div>
  )
}

export default RowPost
