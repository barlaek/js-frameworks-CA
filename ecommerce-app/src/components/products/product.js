import React from "react";
import { useParams } from "react-router-dom";
import { Api } from "../api/api";
import { useCartState } from "../cart/cartContext";

export function Product() {

    const dispatch = useCartState();

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
            <button onClick={() => dispatch({type: 'addProduct', payload: data.id})}>Add to Cart</button>
        </div>
    );
}