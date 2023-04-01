import { useCartState } from "./cartContext";

export function CartItems() {
    const state = useCartState();

    console.log(state.state.cart)

    return (
        <div key={state.state}>
            {state.state.cart.map((prod) => (
                <ul>
                    <li>
                        <img src={prod.imageUrl} alt="product" />
                        <h3>{prod.title}</h3>
                        <p>{prod.price}</p>
                        <p>{prod.quanitity}</p>
                        <button onClick={() => state.dispatch({type: 'removeProduct', payload: prod.id})}>-</button>
                        <button onClick={() => state.dispatch({type: 'addProduct', payload: prod.id})}>+</button>
                        <button onClick={() => state.dispatch({type: 'clearCart'})}>Clear cart</button>
                    </li>
                </ul>
            ))}
            <div key={state.state.total}>
                <div>
                    <h3>Total: {state.state.total}</h3>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}