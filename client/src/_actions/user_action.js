import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  EX_LOC,
 
} from './types';
import { ServiceKey } from "../components/Config";


export function loginUser (dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit)
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.

  return{
    // request를 리듀서에 넘겨주는거
  type: LOGIN_USER,
  payload: request
  }
}

export function registerUser (dataToSubmit) {
  const request = axios.post('/api/users/register', dataToSubmit)
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.

  return{
    // request를 리듀서에 넘겨주는거
    type: REGISTER_USER,
    payload: request
  }
}

export function auth () {
  const request = axios.get('/api/users/auth')
  .then(response =>response.data)
  // 서버에다가 request 날린다음 data로 받아.

  return{
    // request를 리듀서에 넘겨주는거
    type: AUTH_USER,
    payload: request
  }
}

export const exlocData = (data) => {
  return{
    type:EX_LOC,
    data,
  }
}

export const fetchexlocData = () => {
  return (dispatch) => {
    return axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${ServiceKey}&areaCode=35&MobileOS=ETC&MobileApp=AppTesting&_type=json`)
    .then(response => {
      // console.log("받기는 하냐", response.data.response.body.items.item);
      dispatch(exlocData(response.data.response.body.items.item))
    })
    .catch(error => {
      throw(error);
    })
  }

}


// const setMap = (map) => {
//   return {
//     type: SET_MAP,
//     map: map
//   }
// };
//
// const setStoreList = (storeList) => {
//   return {
//     type: SET_STORE_LIST,
//     storeList: storeList
//   };
// };
//
// const addMarker = (marker, overlay) => {
//   return {
//     type: ADD_MARKER,
//     marker: marker,
//     overlay: overlay
//   }
// };
