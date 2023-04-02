import { useState } from "react";
import { Api } from "../api/api";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";


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
            return setSearchProducts(newList);
        }
    }
    console.log(searchProducts)


    return (
        <div className="search">
            <div className={styles.data}>
                <input type="text" placeholder="Search products" onChange={handleSearch} />
            </div>
            <div className={styles.searchResults}>
                {searchProducts.map((product) => {
                    return <div className={styles.data}>
                        {/* <img src={product.imageUrl} alt="product" /> */}
                                <Link to={`/${product.id}`}>{product.title}</Link>
                                {console.log(product.title)}
                            </div>
                })}
            </div>
        </div>
    )
}