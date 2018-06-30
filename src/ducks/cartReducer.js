import axios from "axios";

const initialState = {
  cart: [],
  cartid: null,
  completedOrders: []
};

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PAY_FOR_CART = "PAY_FOR_CART";
const GET_ORDERS = "GET_ORDERS";

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

export function removeFromCart(cart_id, cartitem_id) {
  console.log(cartitem_id);
  return {
    type: REMOVE_FROM_CART,
    payload: axios
      .delete(`/api/cart/${cart_id}/delete?cartitem_id=${cartitem_id}`)
      .then(response => {
        return response.data;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  };
}
export function payForCart(cart_id, amt) {
  return {
    type: PAY_FOR_CART,
    payload: axios
      .post(`/api/cart/pay`, { cart_id, amt })
      .then(completedOrders => {
        return completedOrders.data;
        console.log(completedOrders);
      })
      .catch(err => console.log(err))
  };
}

export function getOrders() {
  return {
    type: GET_ORDERS,
    payload: axios
      .get(`/api/orders`)
      .then(orders => {
        return orders.data;
        console.log(orders);
      })
      .catch(err => console.log(err))
  };
}

export default function cartReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_CART}_PENDING`:
    case `${ADD_TO_CART}_PENDING`:
    case `${UPDATE_QUANTITY}_PENDING`:
    case `${REMOVE_FROM_CART}_PENDING`:
    case `${PAY_FOR_CART}_PENDING`:
    case `${GET_ORDERS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_CART}_REJECTED`:
    case `${ADD_TO_CART}_REJECTED`:
    case `${UPDATE_QUANTITY}_REJECTED`:
    case `${REMOVE_FROM_CART}_REJECTED`:
    case `${PAY_FOR_CART}_REJECTED`:
    case `${GET_ORDERS}_REJECTED`:
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
    case `${REMOVE_FROM_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload
      };
    case `${PAY_FOR_CART}_FULFILLED`:
    case `${GET_ORDERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        completedOrders: action.payload
      };

    default:
      return state;
  }
}
