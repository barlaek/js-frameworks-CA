import Reac, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../api/api";
import { CartContext } from "../cart/cartContext";

export function Product() {
    const { addToCart } = useContext(CartContext)
    let { id } = useParams();

    const { data, isLoading, isError } = Api(
        `https://api.noroff.dev/api/v1/online-shop/${id}`
      );
    
      if (isLoading) {
        return <div>isLoading</div>
      }
    
      if (isError) {
        return (
          <div>
            <div>Error</div>
            <div>Bitch</div>
          </div>
        )
      }

    return (
        <div>
            <img src={data.imageUrl} alt="product"/>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.rating}</div>
            <div>{data.price}</div>
            <div>{data.reviews.map((review) => (
                <div>
                    <div>{review.username}</div>
                    <div>{review.rating}</div>
                    <div>{review.description}</div>
                </div>
            ))}</div>
            <button onClick={() => addToCart(data.id)}>Add to Cart</button>
        </div>
    );
}