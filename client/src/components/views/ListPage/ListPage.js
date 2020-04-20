import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'
import List from './Sections/list'
import MapPage from './Sections/mapPage'


function ListPage () {

  const [hi,setHi] =useState({
    id:1,
    text:'hello',
    date:'1/2'
  }
  )


  return (

    <div style={{width:'100%',display:'flex'}}>



    <div style={{width:'60%'}}>
     <List
      text={hi.text}
      date={hi.date}

     />
    </div>



      <div style={{width:'40%',background:'green'}}>
       <MapPage/>
      </div>


    </div>
  )
}

export default withRouter(ListPage)
