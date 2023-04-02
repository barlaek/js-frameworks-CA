import React from "react";
import { useParams } from "react-router-dom";
import { Api } from "../api/api";
import { useCartState } from "../cart/cartContext";
import styles from './Product.module.css'

export function Product() {
    const dispatch = useCartState();
    console.log(dispatch)

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
            <div className={styles.singleProd}>
                <img src={data.imageUrl} alt="product" className={styles.singleProdImg}/>
                <div className={styles.singleProdText}>
                    <h2>{data.title}</h2>
                    <h3>Description:</h3> 
                    <p>{data.description}</p>
                    <p>Rated: {data.rating}/5</p>
                    <p>Price: {data.price}kr</p>
                    <button className={styles.cardBtn} onClick={() => dispatch.dispatch({type: 'addProduct', payload: data})}>Add to Cart</button>
                    <h3>Reviews</h3>
                    <div>{data.reviews.map((review) => (
                        <div>
                            <h4>{review.username}</h4>
                            <div>Rated this product: {review.rating}/5</div>
                            <div>{review.description}</div>
                        </div>
                    ))}</div>
                </div>
            </div>
        </div>
    );
}