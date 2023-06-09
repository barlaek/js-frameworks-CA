import { useState, useEffect } from "react";

export function Api(url) {
    const [data, setData] = useState([]);
    const [isLoading, setLoad] = useState([false]);
    const [isError, setError] = useState([false]);

    useEffect(() => {
        async function getData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedData = await fetch(url);
                const json = await fetchedData.json();
                setData(json);
            } catch (error) {
                console.log(error);
                setError(true)
            } finally {
                setLoad(false);
            }
        }
        getData();
    }, [url]);
    return { data, isLoading, isError };
}