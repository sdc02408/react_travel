import React, { useEffect, useState } from 'react'
import ReactMapGL,{ Marker, Popup,NavigationControl, FlyToInterpolator} from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import { Col } from 'antd'

function Map (props) {
  

  const storeList = [
    { name: 'CU', location: [props.mapy, props.mapx] },
  
  ];
  console.log(storeList,"storelixe")
  
  return (
  
  
  <>
    {
      storeList.map((store, i) => (
        <Marker
          key={i}
          latitude={store.location[0]}
          longitude={store.location[1]}
        >
          <button
            className="btn-marker"
          />
        </Marker>
      ))
    }
    
  </>
  
  
  )
}

export default Map
