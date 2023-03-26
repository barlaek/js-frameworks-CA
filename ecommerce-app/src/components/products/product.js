import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setIsError] = useState(false);
    let {id} = useParams();

    useEffect(() => {
        async function getData(url) {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData(json);
            } catch(error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        getData(`https://api.noroff.dev/api/v1/online-shop/${id}`)
    }, [id]);

    if(isLoading || !data) {
        return <div>Loading</div>
    }

    if(Error) {
        return <div>Error</div>
    }

    return (
        <div>
            <img src={data.imageUrl} alt="product image"/>
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
        </div>
    );
}