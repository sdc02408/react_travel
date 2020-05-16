import React, { useEffect, useState } from 'react'
import { fetchexlocData } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import List from "../components/views/ex/Sections/List"
import Expage from '../components/views/ex/Expage'


const Netflix = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchexlocData())

  }, [])
  
  const netflixData = useSelector(state => state.exdatas.movies, []) || []
  console.log("이거 맞나", netflixData)
  
  return (
    <div>
      
        <div>
        {netflixData &&
        netflixData.map((movie,index) => (
        <React.Fragment key={index}>
          <Expage
            title={movie.title}
            key={movie.id}/>
            
          {/*  <h2>{movie.title}</h2>*/}
          {/*<h2>{movie.tel}</h2>*/}
          </React.Fragment>
        ))}
        </div>

    </div>
  )
}

export default Netflix
