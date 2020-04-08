import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'
import Maincard from './Sections/maincard'
import mainImage from './Sections/friends.jpg'



function LandingPage (props) {


  return (
    //background사진
    <div style={{
      background: `linear-gradient(to top, rgba(0,0,0,0)
        89%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${mainImage}'), #1c1c1c`,
      height: '100vh',
      backgroundSize: '100%, cover',
      backgroundPosition: 'center, center',
      width: '100%',
      position: 'relative',
    }}>


      <Maincard
        />


    </div>

  )

}

export default withRouter(LandingPage)
