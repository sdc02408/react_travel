import React from 'react';
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'


function ListPage (props) {
  return (
    <div style={{width:'100%',display:'flex'}}>
    
    
      <Carousel style={{width: '200px'}} >
        <div>
          <img src={props.image} style={{width:'90%',margin: '0 auto'}} />
        </div>
        <div>
      
        </div>
      </Carousel>
      
      <Card title={props.title} style={{ width: '60%',justifyContent:'flex-end' }}>
        <p style={{color:'red'}}>{props.title}</p>
        <p>{props.text}</p>
        <p>{props.date}</p>
      </Card>
    </div>
  )
}

export default ListPage
