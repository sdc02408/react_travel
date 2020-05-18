import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Row, Col, Card, Input, DatePicker, Button, Typography, Carousel } from 'antd'

import Netflix from '../../../../container/exdata'


function List(props) {
  
  return (
    <div style={{width:'100%'}}>

      <h4>{props.title}</h4>
      
    </div>
  )
}

export default List

