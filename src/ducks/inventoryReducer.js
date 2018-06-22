import axios from "axios";

const initialState = {
  inventory: [],
  sportList: [],
  sportInventory: [],
  cart: [],
  product: {},
  error: "",
  isLoading: false
};

const GET_INVENTORY = "GET_INVENTORY";
const GET_SPORTS_LIST = "GET_SPORTS_LIST";
const GET_INVENTORY_SPORT = "GET_INVENTORY_SPORT";
const GET_PRODUCT = "GET_PRODUCT";

export function getInventory(limit, offset) {
  return {
    type: GET_INVENTORY,
    payload: axios
      .get(`/api/inventory?limit=${limit}&offset=${offset}`)
      .then(inventory => {
        return inventory.data;
        console.log(inventory.data);
      })
      .catch(err => console.log(err))
  };
}
export function getProduct(id) {
  return {
    type: GET_PRODUCT,
    payload: axios
      .get(`/api/product?id=${id}`)
      .then(product => {
        return product.data[0];
        console.log(product.data);
      })
      .catch(err => console.log(err))
  };
}
export function getSportInventory(sport) {
  return {
    type: GET_INVENTORY_SPORT,
    payload: axios
      .get(`/api/sportinventory?sport=${sport}`)
      .then(sportinventory => {
        return sportinventory.data;
        console.log(sportinventory.data);
      })
      .catch(err => console.log(err))
  };
}
export function getSportList() {
  return {
    type: GET_SPORTS_LIST,
    payload: axios
      .get("/api/sports")
      .then(sportList => {
        return sportList.data;
        console.log(sportList);
      })
      .catch(err => console.log(err))
  };
}

export default function inventoryReducer(state = initialState, action) {
  // console.log(action.type, action.payload);
  switch (action.type) {
    //PENDING cases
    case `${GET_INVENTORY}_PENDING`:
    case `${GET_SPORTS_LIST}_PENDING`:
    case `${GET_INVENTORY_SPORT}_PENDING`:
    case `${GET_PRODUCT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    // FULFILLED CASES
    case `${GET_INVENTORY}_FULFILLED`:
      return { ...state, inventory: action.payload, isLoading: false };
    case `${GET_SPORTS_LIST}_FULFILLED`:
      return { ...state, sportList: action.payload, isLoading: false };
    case `${GET_INVENTORY_SPORT}_FULFILLED`:
      return { ...state, sportInventory: action.payload, isLoading: false };
    case `${GET_PRODUCT}_FULFILLED`:
      return { ...state, product: action.payload, isLoading: false };

    //REJECTED CASES
    case `${GET_INVENTORY}_REJECTED`:
    case `${GET_SPORTS_LIST}_REJECTED`:
    case `${GET_PRODUCT}_REJECTED`:
    case `${GET_INVENTORY_SPORT}_REJECTED`:
      return {
        ...state,
        error: "ERROR",
        isLoading: false
      };
    default:
      return state;
  }
}
