import {useState} from "react";
import Acios from 'axios'
import {useDispatch} from 'react-redux'
import {actionCreators} from "../stroe/store"
import {ServiceKey} from 'client/src/components/Config'

const useTravelData = () => {
  const dispatch = useDispatch();
  
  const [travelData, setTravelData] = useState(
    {
      address: "",
      count: 0,
      stores: [
        {
          addr: "",
          code: "",
          created_at: "",
          lat: 0,
          lng: 0,
          name: "",
          remain_stat: "",
          stock_at: "",
          type: ""
        }
      ]
    }
  );
  
  const getTravelDataAddr = async (location) => {
    console.log("locaotion" , location);
    await Axios.get(
      `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${ServiceKey}&areaCode=35&MobileOS=ETC&MobileApp=AppTesting&_type=json?address=${location}`)
      .then(response => {
        const {
          address,
          count,
          stores} = response.data
        console.log(response);
        
        setTravelData(
          {
            address,
            count,
            stores
          }
        );
        console.log(stores);
      }).catch(error => {
        console.log(error);
      })
    
    const getTravelDataGeo = async (lat,lng,m) => {
      console.log("lat: " ,lat, "lng",lng, "m: ", m);
      await Axios.get(
        `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${ServiceKey}&areaCode=35&MobileOS=ETC&MobileApp=AppTesting&_type=json?lat=${lat}&lng=${lng}&m=${m}`)
      .then(response => {
        const {
          stores  } = response.data
        dispatch(actionCreators.setStoreList(stores));
        console.log(stores.length);
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    return {...travelData, getTravelDataAddr, getTravelDataGeo}
  }
}

export default useTravelData;
