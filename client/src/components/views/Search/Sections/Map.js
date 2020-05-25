import React, { useEffect, useState } from 'react'
import ReactMapGL,{ Marker, Popup,NavigationControl, FlyToInterpolator} from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import { Col } from 'antd'

function Map (props) {


  // const storeList = [
  //   { name: 'CU', location: [props.mapy, props.mapx] },
  //
  // ];
  const hh = props.latitude;
  const xx = props.longitude;
  parseInt(hh);
  parseInt(xx)
  console.log(hh);
  console.log(xx)

  return (


  <>
   
        <Marker
        
          latitude={xx}
          longitude={hh}
        >
          <button
            className="btn-marker"
          />
        </Marker>


  </>


  )
}

export default Map
