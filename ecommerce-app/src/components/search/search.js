import { useState } from "react";
import { Api } from "../api/api";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

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

    const clearInput = () => {
        setSearchProducts([]);
    }


    return (
        <div className="search">
            <div className={styles.inputArea}>
                <input type="text" placeholder="Search products" onChange={handleSearch} className={styles.input}/>
                <div className={styles.SearchIcon}>
                    {searchProducts.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            {searchProducts.length != 0 && (
            <div className={styles.searchResults}>
                {searchProducts.map((product) => {
                    return <div className={styles.data}>
                                <Link to={`/${product.id}`} className={styles.data}>{product.title}</Link>
                                {console.log(product.title)}
                            </div>
                })}
            </div>
            )}
        </div>
    )
}