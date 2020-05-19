import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter,useHistory } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography } from 'antd'
import {Redirect} from 'react-router-dom'
import queryString from 'query-string'
import { ServiceKey,Seoul} from "../../Config";
import mainImage from './Sections/friends.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchlocationData } from '../../../_actions/user_action'
const { Title } = Typography

function LandingPage ({location}) {
  let history = useHistory();
  
  // const dispatch = useDispatch()
  
  const [search,setSearch] = useState("")
  const [tour,setTour] = useState("")
  //
  // const [sendurl, setSendurl] = useState("");
  //서울 %EC%84%9C%EC%9A%B8
  //강원 %EA%B0%95%EC%9B%90
  
  useEffect(() => {
  
  
  
    // const endpoint = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${ServiceKey}&MobileOS=ETC&MobileApp=AppTesting&keyword=${search}&_type=json`
    // fetchList(endpoint)
  
    // dispatch(fetchlocationData())
  }, [])
 
  
  // const locationData = useSelector(state => state.locationdatas.location, []) || []
  // console.log("오나요" , locationData)
  
  // const fetchList = (endpoint) => {
  //   fetch(endpoint)
  //   .then(response => response.json())
  //   .then(response  => {
  //     console.log("api데이터", response.response.body.items.item);
  //     setTour([...tour, ...response.response.body.items.item]);
  //   })
  // }
  
  
  
  

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    
    var encodeing = encodeURI(search)
    console.log(encodeing,"그냥 해도되니")
  
   

    // var willbe= tour;
    console.log(encodeing,"입력값")
    // console.log(willbe,"will")
    alert(encodeing)
    console.log(encodeing,"문자형")
    return history.push('/search',encodeing)
    // siba
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
      
      
      {/*<MainCard />*/}
      <div style={{ width: '85%', margin: '0 auto', position: 'relative', top: '120px' }}>
        <Row>
          <Col lg={7} md={12} xs={24}>
            <Card style={{ background: 'white', height: '400px', width: '100%' }}>
              <Title level={2} style={{ color: '#484848' }}>자신만의 여행계획을 세우세요</Title>
          
              <form onSubmit={onSubmitHandler}>
            
                <div style={{ width: '100%' }}>
                  <label className='maincard'>목적지</label>
                  <Input
                    size="large"
                    placeholder="목적지를 입력해보세요"
                    onChange={onChangeHandler}
                    value={search}
                  />
                </div>
            
                {/*<div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>*/}
                
                {/*  <div style={{ width: '50%' }}>*/}
                {/*    <label className='maincard'>출발일</label>*/}
                {/*    <DatePicker size='large' style={{ width: '100%' }}></DatePicker>*/}
                {/*  </div>*/}
                
                {/*  <div style={{ width: '50%' }}>*/}
                {/*    <label className='maincard'>도착일</label>*/}
                {/*    <DatePicker size='large' style={{ width: '100%' }}></DatePicker>*/}
                {/*  </div>*/}
                {/*</div>*/}
            
                <Button type="primary" htmlType="submit" size="large" className="login-form-button, common_btn"
                        style={{ marginTop: '35px', float: 'right' }}  >
                  검색
                </Button>
          
              </form>
        
            </Card>
          </Col>
        </Row>
      </div>
      
      
      
    </div>

  )

}

export default withRouter(LandingPage)
