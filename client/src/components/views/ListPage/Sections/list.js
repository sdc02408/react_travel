import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'
import Carimage from '../../LandingPage/Sections/friends.jpg'
import './list.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}

function list (props) {


  return (

    <div style={{width:'100%',display:'flex'}}>


      <Carousel afterChange={onChange}  style={{width: '200px'}} >
        <div>
        <img src={Carimage} style={{width:'90%',margin: '0 auto'}} />
        </div>
        <div>
        <img src={Carimage} style={{width:'90%',margin: '0 auto'}} />
        </div>
        </Carousel>



      <Card title="card title" style={{ width: '60%',justifyContent:'flex-end' }}>
        <p style={{color:'red'}}>nm,nm,</p>
        <p>{props.text}</p>
        <p>{props.date}</p>
      </Card>
    </div>
  )
}

export default withRouter(list)
