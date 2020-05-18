import React, { useEffect, useState } from 'react'
import { fetchexlocData } from '../_actions/user_action'
import { useDispatch, useSelector } from 'react-redux'
import List from "../components/views/ex/Sections/List"
import Expage from '../components/views/ex/Expage'
import Maps from '../components/views/ex/Sections/Maps'
import MapPage from '../components/views/ListPage/Sections/MapPage'

const Netflix = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    dispatch(fetchexlocData())

  }, [])
  
  const netflixData = useSelector(state => state.exdatas.movies, []) || []
  console.log("이거 맞나", netflixData)
  
  return (
    <div style={{ width: '100%', display:'flex'}}>
      
        <div style={{width:'50%', margin : 0}}>
        {netflixData &&
        netflixData.map((movie,index) => (
        <React.Fragment key={index}>
          <List
            title={movie.title}
            key={movie.id}/>
            
          </React.Fragment>
        ))}
        </div>
  
      <div style={{width:'100%', margin : 0}}>
        {netflixData &&
        netflixData.map((map,index) => (
          <React.Fragment key={index}>
            <MapPage
              mapx={map.mapx}
              mapy={map.mapy}
            />
      
          </React.Fragment>
        ))}
      </div>
      
      
      
    

    </div>
  )
}

export default Netflix
