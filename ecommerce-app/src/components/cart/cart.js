import { useCartState } from "./cartContext";
import { Link } from "react-router-dom";
import styles from './Cart.module.css'
import button from '../products/Product.module.css'

export function CartItems() {
    const state = useCartState();

    return (
        <div key={state.state} className={styles.cart}>
            {state.state.cart.map((prod) => (
                <ul className={styles.cartContainer}>
                    <li key={prod.id} className={styles.cartList}>
                        <img src={prod.imageUrl} alt="product" className={styles.listImg}/>
                        <div className={styles.listContent}>
                            <h3 className={styles.productTitle}>{prod.title}</h3>
                            <p className={styles.productTitle}>Price: {prod.price}</p>
                            <p className={styles.productTitle}>Quantity: {prod.quantity}</p>
                            <button onClick={() => state.dispatch({type: 'removeProduct', payload: prod})} className={styles.prodBtn}>-</button>
                            <button onClick={() => state.dispatch({type: 'addProduct', payload: prod})} className={styles.prodBtn}>+</button>
                            <button onClick={() => state.dispatch({type: 'clearCart'})} className={styles.prodBtn}>Clear cart</button>
                        </div>
                    </li>
                </ul>
            ))}
            <div key={state.state.total}>
                <div>
                    <h3>Total: {state.state.total}kr</h3>
                    <Link to="/checkout"><button className={button.cardBtn}>Proceed to checkout</button></Link>
                </div>
            </div>
        </div>
    )
}