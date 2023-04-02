import { Link } from "react-router-dom";
import styles from './Product.module.css'

export function Products(props) {
    const product = props.product

    return (
        <div className={styles.card}>
            <div>
                <img className={styles.image} src={product.imageUrl} />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <Link to={`/${product.id}`}><button>View product</button></Link>
            </div>
        </div>
    )
}