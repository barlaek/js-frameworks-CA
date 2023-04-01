import { useCartState } from "../cart/cartContext"
import { Link } from "react-router-dom";

export function CheckoutPage() {
    const state = useCartState();

    return (
        <div>
            <div>
                <h1>Thank you for your purchase!</h1>
            </div>
            <div>
                <h2>Continue shopping?</h2>
                <Link to="/"><button onClick={() => state.dispatch({type: 'clearCart'})}>Take me home</button></Link>
            </div>
            <div>
                <h3> Your receipt:</h3>
                <div key={state.state}>
                    {state.state.cart.map((prod) => (
                    <ul>
                        <li>Total: {state.state.total}kr</li>
                        <li key={prod.id}>
                            <img src={prod.imageUrl} alt="product" />
                            <h3>{prod.title}</h3>
                            <p>{prod.price}</p>
                            <p>{prod.quantity}</p>
                        </li>
                    </ul>
                    ))};
                </div>
            </div>
        </div>
    )
}