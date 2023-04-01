import { useState } from "react";
import { Api } from "../api/api";


export function SearchBar() {
    const [searchProducts, setSearchProducts] = useState([])

    const { data } = Api("https://api.noroff.dev/api/v1/online-shop")

    const handleSearch = (event) => {
        const searchWord = event.target.value;
        const newList = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchProducts === "") {
            setSearchProducts([]);
        } else {
            setSearchProducts(newList)
        }
    }
    console.log(searchProducts)


    return (
        <div>
            <div>
                <input type="text" placeholder="Search products" onChange={handleSearch} />
            </div>
            <div>
                {searchProducts.map((product) => {
                    <div>
                        <img src={product.imageUrl} alt="product" />
                        <div>{product.title}</div>
                    </div>
                })}
            </div>
        </div>
    )
}