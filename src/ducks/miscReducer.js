import axios from "axios";
const initialState = {
  sportInfo: {}
};

const GET_SPORT_INFO = "GET_SPORT_INFO";

export function getSportInfo(sport) {
  return {
    type: GET_SPORT_INFO,
    payload: axios
      .get(`/api/sport/info?sport=${sport}`)
      .then(sport => {
        return sport.data[0];
        console.log(sport.data[0]);
      })
      .catch(err => console.log(err))
  };
}

export default function miscReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_SPORT_INFO}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_SPORT_INFO}_REJECTED`:
      return { ...state, isLoading: false, err: "ERR" };
    case `${GET_SPORT_INFO}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        sportInfo: action.payload
      };
    default:
      return state;
  }
}
