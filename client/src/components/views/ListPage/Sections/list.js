import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'



function list (props) {
  
  
  return (
    
    <div style={{width:'100%',display:'flex'}}>
      <Card title="card title" style={{ width: 300,marginTop:'200px' }}>
        <p style={{color:'red'}}>nm,nm,</p>
        <p>{props.text}</p>
        <p>{props.date}</p>
      </Card>
    </div>
  )
}

export default withRouter(list)
