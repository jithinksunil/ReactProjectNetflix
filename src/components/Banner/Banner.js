import React,{useEffect,useState} from 'react'
import "./Banner.css";
import axios from '../../axios';
import { apiKey,imageUrl } from '../../constants/constants';

function Banner() {
const[data,setData]=useState({})
useEffect(()=>{
  axios.get(`/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate`
  ).then((response)=>{
    setData(response.data.results[2])
  })
},[])
  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl+data.backdrop_path})`}}>
      <div className='content' >
            <h1 className='title'>{data.title}</h1>
            <div className='banner_buttons' >
                <button className='button' >Play</button>
                <button className='button' >My list</button>
            </div>
            <h1 className='description'>{data.overview}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
