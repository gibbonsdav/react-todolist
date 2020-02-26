import React, { useState, useContext } from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import Items from "./Items"
import Form from "./Form"

export default props => {
  return (
    <Provider store={store}>
      <div>
        <Items />
        <Form />
      </div>
    </Provider>
  )
}
