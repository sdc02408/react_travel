import React, { useEffect, useState } from 'react'
import ReactMapGL,{ Marker, Popup,NavigationControl, FlyToInterpolator} from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import { Col } from 'antd'

function Map (props) {
  
  console.log(props.mapy,"fffffffffffff")
  console.log(props.mapx,"ccc")
  console.log("finish")
  
  const storeList = [
    { name: 'CU', location: [37.565964, 126.986574] },
    { name: '할리스', location: [37.564431, 126.986591] },
    { name: '세븐일레븐', location: [37.565188, 126.983238] },
    { name: '파리바게트', location: [37.564869, 126.984450] },
    { name: '스타벅스', location: [37.562003, 126.985829] }
  ];
  
  
  return (
  
  
  <>
  
  
  </>
  
  
  )
}

export default Map
