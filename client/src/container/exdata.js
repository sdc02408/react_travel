import React, { useEffect, useState } from 'react'
import { fetchexlocData } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import Listzz from '../components/views/ex/listzz'



const Netflix = (props) => {
  
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
          <Listzz
            title={movie.title}
            key={movie.id}/>
          </React.Fragment>
        ))}
        </div>

    </div>
  )
}

export default Netflix
