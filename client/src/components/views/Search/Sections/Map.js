import React, { useEffect, useState } from 'react'
import ReactMapGL,{ Marker, Popup,NavigationControl, FlyToInterpolator} from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import { Col } from 'antd'

function Map (props) {
  
  const fetchlng = props.latitude;
  const fetchlat = props.longitude;

  var lng = parseFloat(fetchlng);
  var lat = parseFloat(fetchlat)
  
  console.log(typeof(lng),"lng");
  console.log(typeof(lat),"lat")

  return (


  <>
        <Marker
          latitude={lat}
          longitude={lng}
        >
          <button
            className="btn-marker"
          />
        </Marker>
  </>


  )
}

export default Map
