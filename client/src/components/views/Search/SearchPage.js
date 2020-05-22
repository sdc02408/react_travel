import React, { useState,useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { ServiceKey} from "../../Config";
import ListPage from './Sections/ListPage'
import Map from './Sections/Map'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from "antd";

import ReactMapGL,{ Marker, Popup,NavigationControl, FlyToInterpolator} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const SearchPage = (props) => {
  const MAP_TOKEN = 'pk.eyJ1IjoiY2hhbnNlb2t5IiwiYSI6ImNrYWhxMW0zMzBpazQyem95bnRzNjVzMWoifQ.SFPI5tlCIjZdMBzJSIn0aA';
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 127.024612,
    width: '100vw',
    height: '100vh',
    zoom: 12
  });
  
  const [tour,setTour] = useState([])
  // const [List, setList ] = useState([])
  
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
  
      //
      // console.log("맵데이터", response.response.body.items.item);
      // setList([...List, ...response.response.body.items.item]);
    })
  }
  
  console.log(props.location.state,"받은값")

  // const fuck = List;
  // const sibal = {};
  // const fucku = fuck.map((num) => sibal)
  // console.log(fucku,"fuck")
  // console.log(List,"뽑아")
  //
  // const storeList = [
  //   { name: 'CU', location: [37.565964, 126.986574] },
  //   { name: '할리스', location: [37.564431, 126.986591] },
  //   { name: '세븐일레븐', location: [37.565188, 126.983238] },
  //   { name: '파리바게트', location: [37.564869, 126.984450] },
  //   { name: '스타벅스', location: [37.562003, 126.985829] }
  // ];
  
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
        
      <Col lg={12}>
  
  

  

          <div className="Mapbox" style={{width:'100%'}}>
            <ReactMapGL
              {...viewport}
              transitionDuration={800}
              transitionInterpolator={new FlyToInterpolator()}
              mapboxApiAccessToken={MAP_TOKEN}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
  
              {tour &&
              tour.map((tourI,index) => (
                <React.Fragment key={index}>
                  <Map
                    id={index}
                    mapx={tourI.mapx}
                    mapy={tourI.mapy}
                  />
                </React.Fragment>
              ))}
              
              
  
        {/*{*/}
        {/*  tour.map((store, i) => (*/}
        {/*    <Marker*/}
        {/*      key={i}*/}
        {/*      latitude={store.mapy}*/}
        {/*      longitude={store.mapx}*/}
        {/*    >*/}
        {/*      <button*/}
        {/*        className="btn-marker"*/}
        {/*      />*/}
        {/*    </Marker>*/}
        {/*  ))*/}
        {/*}*/}

            </ReactMapGL>
          </div>
        
      </Col>
      </div>
    </Col>

    
    )
}

export default withRouter(SearchPage)
