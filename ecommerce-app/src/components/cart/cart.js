import { useCartState } from "./cartContext";
import { Link } from "react-router-dom";

export function CartItems() {
    const state = useCartState();

    console.log(state.state.cart)

    return (
        <div key={state.state}>
            {state.state.cart.map((prod) => (
                <ul>
                    <li key={prod.id}>
                        <img src={prod.imageUrl} alt="product" />
                        <h3>{prod.title}</h3>
                        <p>{prod.price}</p>
                        <p>{prod.quantity}</p>
                        <button onClick={() => state.dispatch({type: 'removeProduct', payload: prod})}>-</button>
                        <button onClick={() => state.dispatch({type: 'addProduct', payload: prod})}>+</button>
                        <button onClick={() => state.dispatch({type: 'clearCart'})}>Clear cart</button>
                    </li>
                </ul>
            ))}
            <div key={state.state.total}>
                <div>
                    <h3>Total: {state.state.total}kr</h3>
                    <Link to="/checkout"><button>Proceed to checkout</button></Link>
                </div>
            </div>
        </div>
    )
}