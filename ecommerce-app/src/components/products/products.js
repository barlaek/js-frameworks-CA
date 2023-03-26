import React from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/api";


export function Products() {
    const { data, isLoading, isError } = Api(
        "https://api.noroff.dev/api/v1/online-shop"
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
            {data.map((product) => (
                <Link to ="/:id">
                    <div>{product.title}</div>
                    <img src={product.imageUrl} alt="product image" />
                    <div>{product.price}</div>
                </Link>
            ))}
        </div>
    )
}