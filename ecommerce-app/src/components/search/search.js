import { useState } from "react";
import { Api } from "../api/api";
import "./search.css";


export function SearchBar() {
    const [searchProducts, setSearchProducts] = useState([])

    const { data } = Api("https://api.noroff.dev/api/v1/online-shop")

    const handleSearch = (event) => {
        const searchWord = event.target.value;
        const newList = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase()) &&
            value.tags.map((tag) => {tag.toLowerCase().includes(searchWord.toLowerCase())});
        });
        if(searchProducts === "") {
            return setSearchProducts([]);
        } else {
            return setSearchProducts(newList)
        }
    }
    console.log(searchProducts)


    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder="Search products" onChange={handleSearch} />
            </div>
            <div className="searchResults">
                {searchProducts.map((product) => {
                    return <div className="data">
                        {/* <img src={product.imageUrl} alt="product" /> */}
                                <div>{product.title}</div>
                                {console.log(product.title)}
                            </div>
                })}
            </div>
        </div>
    )
}