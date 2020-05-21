import React, { useState,useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { ServiceKey} from "../../Config";
import ListPage from './Sections/ListPage'
import Map from './Sections/Map'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from "antd";

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
  
  return (
    <Col lg={24}>
    
      <div style={{ display: "flex", height: "100vh" }}>
        <Col lg={12}>
        
      {tour &&
        tour.map((tourInfo,index) => (
          <React.Fragment key={index}>
            <ListPage
              id={index}
              image={tourInfo.firstimage}
              title={tourInfo.title}
              text={tourInfo.addr1}
              date={tourInfo.tel}
            />
          </React.Fragment>
        ))}
        </Col>
      </div>
  
      <Col lg={12}>
  
        {tour &&
        tour.map((tourInfo,index) => (
          <React.Fragment key={index}>
            <Map
              id={index}
              mapx={tourInfo.mapx}
              mapy={tourInfo.mapy}
              title={tourInfo.title}
            />
          </React.Fragment>
        ))}
      
      </Col>
  
  
      
  
  
  
      </Col>
    
    
    
    )
}

export default withRouter(SearchPage)
