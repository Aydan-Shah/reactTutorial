import React from 'react'

// function Navbar() {
//   return (
//     <div>
//         <h1>Navbar</h1>
//     </div>
//   )
// }
// export default Navbar;

// functional components with arrow function

const Navbar = (props) => {
    return (
      <div>
          <h1>{props.title}</h1>
      </div>
    )
  }
  export default Navbar;