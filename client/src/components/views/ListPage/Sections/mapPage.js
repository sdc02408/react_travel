import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'
import Carimage from '../../LandingPage/Sections/friends.jpg'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';


function mapPage (props) {



  return (


      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 37.497, lng: 127.0254}}
      >

    <Marker position={{ lat: 37.497, lng: 127.0254}}/>
      </Map>

  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVuqzRoNriivGb7ec4kGYtpOCVUv4MCk'
})(mapPage)
