import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography, Carousel } from 'antd'
import Maps from './Sections/Maps'
import Netflix from '../../../container/exdata'
import List from './Sections/List'

function Expage (props) {
  
  return (
    <div>
      
      <h2>here is the large</h2>
      
      <List/>
      
      <Maps/>
      <h2>{props.props.title}</h2>
    
    </div>
  )
  
}

export default withRouter(Expage)

