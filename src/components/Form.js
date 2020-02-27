// import React, { useState } from "react"
// import { useItems } from "../hooks"

// export default props => {
//   const [name, setName] = useState("")
//   const { add } = useItems()

//   function handleSubmit(e) {
//     e.preventDefault()

//     add(name)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input
//         type="text"
//         placeholder="John Smith"
//         onChange={e => setName(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
