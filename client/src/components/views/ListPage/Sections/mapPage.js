import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography, Carousel } from 'antd'
import Carimage from '../../LandingPage/Sections/friends.jpg'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { googleapike} from '../../../Config'


function mapPage (props) {
  
  return (
  
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{ lat:props.lat, lng: props.lng}}
    >

        <Marker position={{ lat: props.lat , lng: props.lng}}/>
        <Marker position={{ lat:props.lat , lng: props.lat}}/>
      
      
    
    </Map>
  
  
  )
}

export default GoogleApiWrapper({
  apiKey: googleapike,
})(mapPage)
