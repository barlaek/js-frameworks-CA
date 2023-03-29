import React, { useEffect, useState } from "react";

const Product = ({product, addToCart}) => {

    return (
        <div>
            <img src={product.imageUrl} alt="product"/>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.rating}</div>
            <div>{product.price}</div>
            <div>{product.reviews.map((review) => (
                <div>
                    <div>{review.username}</div>
                    <div>{review.rating}</div>
                    <div>{review.description}</div>
                </div>
            ))}</div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
    );
}

export default Product;