import { useCartState } from "./cartContext";

export function CartItems() {
    const state = useCartState();

    console.log(state.state.cart)

    return (
        <div key={state.state}>
            {state.state.cart.map((prod) => (
                <div>
                    <img src={prod.imageUrl} alt="product" />
                    <h3>{prod.title}</h3>
                    <p>{prod.quanitity}</p>
                    <p>{prod.price}</p>
                </div>
            ))}
        </div>
    )
}