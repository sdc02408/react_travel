import React, { useState,useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { ServiceKey} from "../../Config";
const SearchPage = (props) => {
  const [tour,setTour] = useState([])
  useEffect(() => {
    const endpoint = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${ServiceKey}&MobileOS=ETC&MobileApp=AppTesting&keyword=${props.location.state}&_type=json`
    fetchList(endpoint)
    // dispatch(fetchlocationData())
  }, [])
  
  
  const fetchList = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response  => {
      console.log("api데이터", response.response.body.items.item);
      setTour([...tour, ...response.response.body.items.item]);
    })
  }
  
  
  
  console.log(props.location.state,"받은값")
  
  const numbers = props.location.state;

  return (
    
    <div >
      <h2 style={{color:'red'}}>fdsfsdf</h2>
      {/*<h2 style={{color:'red'}}>{props.location.state}</h2>*/}
  
      
      <ul>
      {/*  /!*{numbers.map(number => (*!/*/}
      {/*  /!*  <li key={number.id}>{number.title}</li>*!/*/}
      {/*  /!*))}*!/*/}
      </ul>
      
      
    </div>
    
    )
 
}




export default withRouter(SearchPage)
