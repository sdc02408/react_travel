import React from 'react';
import { Button, Card, Col, DatePicker, Input, Row, Typography } from 'antd'

const { Title } = Typography

function maincard () {
  return(
  <div style={{ width: '85%', margin: '0 auto', position: 'relative', top: '120px' }}>
    <Row>
      <Col lg={7} md={12} xs={24}>
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
  )

}
export default maincard
