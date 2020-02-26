import Axios from "axios"
import store from "../../store"

// imports

// action definitions
const GET_ITEMS = "item/GET_ITEMS"

//initial state
const initialState = {
  users: []
}

//reducers
export default (state= initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {} ...state, items: action.payload }
      default:
        return state
  }
}

//action functions
function getItems() {
  Axios.get("/items").then(resp => {
    store.dispatch({
      type: "GET_ITEMS",
      payload: resp.data
    })
  })
}

export function addItem(name) {
  Axios.post("/items", { name }).then(resp => {
    getItems()
  })
}

// custom hooks
