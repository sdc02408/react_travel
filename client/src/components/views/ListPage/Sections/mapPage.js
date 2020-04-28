import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card, Input, DatePicker, Button, Typography,Carousel } from 'antd'
import Carimage from '../../LandingPage/Sections/friends.jpg'
import './list.css'
import {ServiceKey} from '../../../Config'


const { kakao } = window;

function MapPage (props) {
  
  const [Location,setLocation] = useState([])
  
  
  
  useEffect(() => {
    const second = ` http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${ServiceKey}&mapX=126.981611&mapY=37.568477&radius=1000&pageNo=1&numOfRows=10&listYN=Y&arrange=A&MobileOS=ETC&MobileApp=AppTesting&_type=json`
     fetchLocation(second)
    
    
    
    const container = document.getElementById('mask-map');
    const options = {
      center: new kakao.maps.LatLng(props.mapy, props.mapx),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  
    var positions = [
      {
        content: '<div>대가야</div>',
        latlng: new kakao.maps.LatLng(props.mapy, props.mapx)
      },
      {
        content: '<div>생태연못</div>',
        latlng: new kakao.maps.LatLng(props.mapy, props.mapx)
      },
      {
        content: '<div>텃밭</div>',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
        content: '<div>근린공원</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];
    
  
    for (var i = 0; i < positions.length; i ++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
      });
    
      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
      });
    
      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  
    function makeOverListener(map, marker, infowindow) {
      return function() {
        infowindow.open(map, marker);
      };
    }

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function() {
        infowindow.close();
      };
    }
  
  
    
  }, [])
  
  const fetchLocation = (second) => {
    fetch(second)
    .then(response => response.json())
    .then(response => {
      console.log("hhh",response.response.body.items.item)
      setLocation([...Location,...response.response.body.items.item])
    })
  }

  
  
  return (
    <div id="mask-map" style={{ height: "100%" }}>
    </div>
  )
}

export default withRouter(MapPage)
