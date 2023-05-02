import React from 'react'
import { useSelector } from 'react-redux'

// export const ShowRentals =()=>{
//     const rentals= useSelector(state=>state.rentals)

//     const showRentals = rentals.map(rental => (
//         <article className="rental-excerpt" key={rental.id}>
//           <h3>{rental.title}</h3>
//           <p className="post-content">{rental.content.substring(0, 100)}</p>
//         </article>
//       ))

//       return (
//         <section className="rentals-list">
//           <h2>Posts</h2>
//           {showRentals}
//         </section>
//       )
//     }
// }