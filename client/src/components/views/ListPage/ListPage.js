import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Row, Col, Card, Input, DatePicker, Button, Typography } from "antd";
import List from "./Sections/list";
import MapPage from "./Sections/MapPage";
import { ServiceKey } from "../../Config";
import Netflix from '../../../container/exdata'

function ListPage() {
  const [Info, setInfo] = useState([]);
  // const [Location,setLocation] = useState([])

  // ${ServiceKey}
  useEffect(() => {
    const first = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${ServiceKey}&areaCode=35&numOfRows=3&MobileOS=ETC&MobileApp=AppTesting&_type=json`;
    fetchInfo(first);
    //
    // const second = ` http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${ServiceKey}&mapX=126.981611&mapY=37.568477&radius=1000&pageNo=1&numOfRows=10&listYN=Y&arrange=A&MobileOS=ETC&MobileApp=AppTesting&_type=json`
    //  fetchLocation(second)
  }, []);

  const fetchInfo = (first) => {
    fetch(first)
      .then((response) => response.json())
      .then((response) => {
        console.log("fff", response.response.body.items.item);
        setInfo([...Info, ...response.response.body.items.item]);
      });
  };

  // const fetchLocation = (second) => {
  //   fetch(second)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log("hhh",response.response.body.items.item)
  //     setLocation([...Location,...response.response.body.items.item])
  //   })
  // }

  return (
    <Col lg={24}>

      <div style={{ display: "flex", height: "100vh" }}>
        <Col lg={12}>
          {Info &&
            Info.map((info, index) => (
              <React.Fragment key={index}>
                <List
                  id={index}
                  image={info.firstimage}
                  title={info.title}
                  text={info.addr1}
                  date={info.tel}
                />
              </React.Fragment>
            ))}
        </Col>
        <Col lg={12}>
          <Netflix />
        </Col>
      </div>
    </Col>
  );
}

export default withRouter(ListPage);
