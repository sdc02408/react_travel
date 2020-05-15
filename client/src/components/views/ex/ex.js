import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography, Carousel } from 'antd'
import Listzz from './listzz'
import Netflix from '../../../container/exdata'
import Mapss from '../ex/mapss'

function ex (props) {
  return (
    <div>
      
      <Netflix/>
  
     <Mapss/>
     
    </div>
  )
  
}

export default withRouter(ex)
