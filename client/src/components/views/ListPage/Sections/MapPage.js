import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Input,
  DatePicker,
  Button,
  Typography,
  Carousel,
} from "antd";
import Carimage from "../../LandingPage/Sections/friends.jpg";
import "./list.css";

const { kakao } = window;

function MapPage(props) {
  useEffect(() => {
    const container = document.getElementById(`mask-map-${props.id}`);
    const options = {
      center: new kakao.maps.LatLng(props.mapy, props.mapx),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const positions = {
      content: `<div>${props.title}</div>`,
      latlng: new kakao.maps.LatLng(props.mapy, props.mapx),
    };

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions.latlng, // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: positions.content, // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }, []);

  return (
    <Card style={{width:'100%', height: "200px"}}>
      <div
        id={`mask-map-${props.id}`}
        style={{ width: "100%", height: "200px"}}
      ></div>
    </Card>
  );
}

export default withRouter(MapPage);
