import { Link } from "react-router-dom";

export function Products(props) {
    const product = props.product

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} />
            <p>{product.price}</p>
            <Link to={`/${product.id}`}><button>View product</button></Link>
        </div>
    )
}