import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const SearchPage = (props) => {
  
  console.log(props.location.state,"받은값")
  
  // const numbers = props.location.state;

  return (
    
    <div >
      <h2 style={{color:'red'}}>fdsfsdf</h2>
      {/*<h2 style={{color:'red'}}>{props.location.state}</h2>*/}
  
      
      <ul>
        {/*{numbers.map(number => (*/}
        {/*  <li key={number.id}>{number.title}</li>*/}
        {/*))}*/}
      </ul>
      
      
    </div>
    
    )
 
}




export default withRouter(SearchPage)
