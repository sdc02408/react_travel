import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
const { kakao } = window;

const Maps= () => {
  
  useEffect(() => {
    const container = document.getElementById('mask-map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    
  }, [])
  
  return(
   <>
     <h2>qqqq</h2>
     
     <div id="mask-map" style={{ height: "100vh" }}>
     </div>
  </>
     )
}

export default withRouter(Maps)
