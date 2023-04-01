import { useCartState } from "./cartContext";

export function CartItems() {
    const state = useCartState();

    console.log(state.state.cart)

    return (
        <div key={state.state}>
            {state.state.cart.map((prod) => (
                <div>{prod.title}</div>
            ))}
        </div>
    )
}