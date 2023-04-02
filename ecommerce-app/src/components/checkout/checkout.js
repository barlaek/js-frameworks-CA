import { useCartState } from "../cart/cartContext"
import { Link } from "react-router-dom";
import styles from './Checkout.module.css'
import button from '../products/Product.module.css'

export function CheckoutPage() {
    const state = useCartState();

    return (
        <div className={styles.checkoutContainer}>
            <div>
                <h1>Thank you for your purchase!</h1>
            </div>
            <div className={styles.continue}>
                <h2>Continue shopping?</h2>
                <Link to="/"><button onClick={() => state.dispatch({type: 'clearCart'})} className={button.cardBtn}>Take me home</button></Link>
            </div>
            <div>
                <h3> Your receipt:</h3>
                <div key={state.state}>
                    {state.state.cart.map((prod) => (
                    <ul>
                        <li key={prod.id} className={styles.receipt}>
                            <img src={prod.imageUrl} alt="product" className={styles.receiptImg}/>
                            <div className={styles.receiptContent}>
                                <h3>Total: {state.state.total}kr</h3>
                                <h4>{prod.title}</h4>
                                <p>Price: {prod.price}</p>
                                <p>Quantity: {prod.quantity}</p>
                            </div>
                        </li>
                    </ul>
                    ))};
                </div>
            </div>
        </div>
    )
}