import {useSelector} from 'react-redux'
import useTravelData from "../useTravelData";
import useSetMarker from "client/src/_actions/MapSections/useSetMarker";

const {kakao}= window;

var Map = null;

const useCenterChanged = () => {
  const {map} = useSelector(state => ({
    map: state.travelMap.map
  }));
  
  const {getTravelDataGeo} = useTravelData();
  
  const {setMarker} = useSetMarker();
  
  Map =map;
  
  const setEvent = () => {
    if(Map !== null){
      Map.maps.event.addListener(Map,'dragend', ()=> {
        //지도의  중심좌표를 얻어온다.
        
        var latlng = Map.getCenter();
        
        getTravelDataGeo(latlng.getLat(), latlng.getLng(), 3000);
        
        setMarker();
      })
    }
  }
  
  return {setEvent}
}

export default useCenterChanged;
