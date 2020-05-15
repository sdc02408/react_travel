import { LOGIN_USER, REGISTER_USER,AUTH_USER,EX_LOC,  } from '../_actions/types'
import { createStore } from "redux";
// SET_MAP,  SET_STORE_LIST,  ADD_MARKER
export default function(state={}, action) {
  switch (action.type) {
    case LOGIN_USER:
        return{...state, loginSuccess: action.payload}
      break;
    case REGISTER_USER:
      return {...state, register: action.payload}
      break;
    case AUTH_USER:
      return {...state, userData: action.payload}
      break;
    case EX_LOC:
      return {...state, movies : action.data }
      break;
    default:
      return state;
  }
}


// const reducer = (state = {
//   maskMap: {
//     map: null,
//     storeList: [],
//     oldMarker: [],
//     oldOverlay: []
//   }
// }, action) => {
//   console.log(action);
//   switch (action.type) {
//
//     case SET_MAP:
//       return {
//         ...state,
//         maskMap: {
//           ...state.maskMap,
//           map: action.map
//         }
//       };
//
//     case SET_STORE_LIST:
//       return {
//         ...state,
//         maskMap: {
//           ...state.maskMap,
//           storeList: action.storeList
//         }
//       };
//
//     case ADD_MARKER:
//       console.log("adding... :",action);
//       return {
//         ...state,
//         maskMap: {
//           ...state.maskMap,
//           oldMarker: action.marker,
//           oldOverlay: action.overlay
//         }
//       };
//
//     default:
//       return state;
//   }
// };
//
// const store = createStore(reducer);
//
// export const actionCreators = {
//   setStoreList,
//   setMap,
//   addMarker
// };
//
// export default store;
