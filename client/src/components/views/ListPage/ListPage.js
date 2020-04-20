import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'
import List from './Sections/list'
import MapPage from './Sections/mapPage'

function ListPage () {

  const Location = [{
      id: 1,
      text: '강남역',
      date: '37.4425768,126.979916',
      a:'37.4425768',
      b:'126.979916'
    },
    { id: 2,
      text: '삼성역',
      date: '37.508861,127.0609603',
      a:'37.508861',
      b:'127.0609603'

    }
  ]




  return (

    <Col lg={24}>
    <div style={{ display: 'flex',height:'100vh' }}>


      <Col lg={12}>
        {Location && Location.map((location,index) => (
          <React.Fragment key={index}>
            <List

              text={location.text}
              date={location.date}
            />
          </React.Fragment>
          ))}
      </Col>


      <Col lg={12}>

          <MapPage

          style={{height:'100vh'}}
          />


      </Col>

    </div>
    </Col>
  )
}

export default withRouter(ListPage)
