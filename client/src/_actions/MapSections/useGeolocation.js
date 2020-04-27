import {useSelector} from 'react-redux'
import useIpAddr from '../useIpAddr';
import useTravelData from '..//useTravelData';
import useSetMarker from "client/src/_actions/MapSections/useSetMarker";

const {kakao } = window
var Map = {};

const useGeolocation = () => {
  const {map} = useSelector(state => ({map: state.travelMap.map}),[]);
  
  const { getIpAddr } = useIpAddr();
  const { getMaskDataGeo } = useMaskData();
  const { setMarker } = useSetMarker();
  
  Map = map;
  
  const getGeo = () => {
    if(navigator.geolocation){
      if(Map !== null){
        navigator.geolocation.getCurrentPosition(position =>{
          getMaskDataGeo(position.coords.latitude, position.coords.longitude, 3000)
          .then(() => {
            setMarker();
          })
          
          Map.panTo(new Map.maps.LatLng(position.coords.latitude, position.coords.longitude));
        },
          () => getIpAddr());
      }
    }else {
      alert('이 브라우저에서는 geolocation이 지원되지 않습니다')
    }
  }
  return {getGeo};
}

export default useGeolocation;
