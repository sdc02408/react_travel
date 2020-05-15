import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'
import Netflix from '../../../container/exdata'
import { withRouter } from "react-router-dom";




function listzz(props) {
  

  
  return (
    <>
    <h2>{props.title}</h2>
  

  </>
  );
}

export default withRouter(listzz);

