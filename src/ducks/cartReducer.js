import axios from "axios";

const initialState = {
  cart: [],
  cartid: null
};

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get(`/api/cart`).then(response => {
      return response.data;
      console.log(response.data);
    })
  };
}

export function addToCart(item_id, quantity) {
  return {
    type: ADD_TO_CART,
    payload: axios
      .post(`/api/cart/add`, { item_id, quantity })
      .then(response => {
        return response.data;
        console.log(response.data);
      })
  };
}

export function updateQuantity(cart_id, item_id, quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: axios
      .put(`/api/cart/update`, { cart_id, item_id, quantity })
      .then(res => {
        return res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  };
}

export default function cartReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_CART}_PENDING`:
    case `${ADD_TO_CART}_PENDING`:
    case `${UPDATE_QUANTITY}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_CART}_REJECTED`:
    case `${ADD_TO_CART}_REJECTED`:
    case `${UPDATE_QUANTITY}_REJECTED`:
      return { ...state, isLoading: false, err: "ERR" };
    case `${GET_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
        cartid: action.payload.cart_id
      };
    case `${ADD_TO_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload
      };
    case `${UPDATE_QUANTITY}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload
      };
    default:
      return state;
  }
}
