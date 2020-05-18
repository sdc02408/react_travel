import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
const { kakao } = window;

const Maps= (props) => {

  useEffect(() => {
    const container = document.getElementById('mask-map');
    container.style.overflow="visible";
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

  }, [])

  return(
<div>
  <h2>여기가 어디냐</h2>
 <div id="mask-map" style={{overFlow:'visible',height: "100%" }}>
  </div>
</div>
     )
}

export default withRouter(Maps)
