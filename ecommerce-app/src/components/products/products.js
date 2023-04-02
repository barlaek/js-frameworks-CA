import { Link } from "react-router-dom";
import styles from './Product.module.css'

export function Products(props) {
    const product = props.product

    return (
        <div className={styles.card}>
            <img className={styles.image} src={product.imageUrl} alt="product" />
            <div className={styles.cardContent}>
                <div className={styles.textBox}>
                    <h3 className={styles.cardText}>{product.title}</h3>
                    <p className={styles.cardText}>Rated: {product.rating}/5</p>
                    <p className={styles.cardText}>Price: {product.price}kr</p>
                </div>
                <Link to={`/${product.id}`}><button className={styles.cardBtn}>View product</button></Link>
            </div>
        </div>
    )
}