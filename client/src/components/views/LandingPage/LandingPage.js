import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'
import maincard from './Sections/maincard'
import mainImage from './Sections/friends.jpg'

const { Title } = Typography

function LandingPage (props) {
  

  const onSubmit = (event) => {
    
    event.preventDefault();
    
    if (title === "" || startDate === "" || endDate === "" ) {
      return alert('입력사항을 입력해 주세요')
    }
    
    const variables = {
    
      title: title,
      startDate: startDate,
      endDate:endDate
     
    }
    
    axios.post('/api/video/uploadVideo', variables)
    .then(response => {
      if (response.data.success) {
        alert('video Uploaded Successfully')
        props.history.push('/')
      } else {
        alert('Failed to upload video')
      }
    })
    
  }
  
  
  
  
  
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
      
      <div style={{ width: '85%', margin: '0 auto', position: 'relative', top: '120px' }}>
        <Row>
          <Col lg={6} md={12} xs={24}>
            <Card style={{ background: 'white', height: '400px', width: '100%' }}>
              <Title level={2} style={{ color: '#484848' }}>자신만의 여행계획을 세우세요</Title>
              
              <div>
                
                <div style={{ width: '100%' }}>
                  <label className='maincard'>목적지</label>
                  <Input size="large" placeholder="목적지를 입력해보세요"/>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                  
                  <div style={{ width: '50%' }}>
                    <label className='maincard'>출발일</label>
                    <DatePicker size='large' style={{ width: '100%' }}></DatePicker>
                  </div>
                  
                  <div style={{ width: '50%' }}>
                    <label className='maincard'>도착일</label>
                    <DatePicker size='large' style={{ width: '100%' }}></DatePicker>
                  </div>
                </div>
                
                <Button type="primary" htmlType="submit" size="large" className="login-form-button, common_btn"
                        style={{ marginTop: '35px', float: 'right' }} disabled onClick={onsubmit}>
                  검색
                </Button>
              
              </div>
            
            </Card>
          </Col>
        </Row>
      </div>
    
    
    </div>
  
  )
  
}

export default withRouter(LandingPage)
