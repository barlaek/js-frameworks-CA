// import React, { useReducer} from "react";

// const Cart = ({ cartItems }) => {
//     const totalPrice = cartItems.useReducer((acc, cur) => acc + cur.price * cur.quantity );

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {cartItems.map(item => {
//                     <li key={item.id}>
//                         {item.title} - {item.quantity} x ${item.price}
//                     </li>
//                 })}
//             </ul>
//             <p>Total: ${totalPrice}</p>
//         </div>
//     )
// }

// export default Cart;