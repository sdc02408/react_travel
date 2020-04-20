import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'
import Carimage from '../../LandingPage/Sections/friends.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';


function mapPage (props) {

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (

    <div style={{width:'100%',display:'flex'}}>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0}}
      />

    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVuqzRoNriivGb7ec4kGYtpOCVUv4MCk'
})(mapPage)
