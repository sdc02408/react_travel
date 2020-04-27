import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {actionCreators} from "../../store/store"

const {kakao} = window;

const Map= () => {
  const dispatcher = useDispatch();
  
  useEffect(() => {
    const container = document.getElementById('travel-map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    
    const map = new kakao.maps.Map(container, options);
    
    dispatcher(actionCreators.setMap(map), [map]);
  }, [])
  
  return <div id="travel-map" style={{ height: '100 %'}}>
  </div>
}
export default Map;
