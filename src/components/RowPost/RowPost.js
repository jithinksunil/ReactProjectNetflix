import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movies,setMOvies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    // console.log(response.data.results)
    setMOvies(response.data.results)
  })
  },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {
          movies.map((item,index)=>{
            return (<img className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+item.backdrop_path}`} />)
          })
        }
        </div>
    </div>
  )
}

export default RowPost
