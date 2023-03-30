// import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Api } from "../api/api";


// export function Products() {
//     const { data, isLoading, isError } = Api(
//         "https://api.noroff.dev/api/v1/online-shop"
//       );
    
//       if (isLoading) {
//         return <div>isLoading</div>
//       }
    
//       if (isError) {
//         return (
//           <div>
//             <div>Error</div>
//           </div>
//         )
//       }
      
//     return (
//         <div>
//             {data.map((product) => (
//                 <Link to ={`/${product.id}`}>
//                     <div>{product.title}</div>
//                     <img src={product.imageUrl} alt="product" />
//                     <div>{product.price}</div>
//                 </Link>
//             ))}
//         </div>
//     )
// }

export function Products(props) {
    const product = props.product

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} />
            <p>{product.price}</p>
            <Link to={`/${product.id}`}><button>View product</button></Link>
        </div>
    )
}