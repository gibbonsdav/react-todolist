import React, { useState } from "react"
import { useItems } from "../hooks"

export default props => {
  const { items } = useState()

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <p>
          {item.id}: {item.name}
        </p>
      ))}
    </div>
  )
}
