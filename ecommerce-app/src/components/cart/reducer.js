export const initialState = { cart: [], total: 0 };

export const reducer = (state, action) => {
    let productIndex;
    let newTotal;
    let cart;

    switch(action.type) {
        case 'addProduct':
            cart = [...state.cart];
            productIndex = cart.findIndex(
                (product) => product.id === action.payload.id,
            );
            if(productIndex === -1) {
                cart.push({ ...action.payload, quantity: 1});
            } else {
                cart = [
                    ...cart.slice(0, productIndex),
                    {...cart[productIndex], quantity: cart[productIndex].quantity + 1},
                    ...cart.slice(productIndex + 1),
                ];
            }

            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            return {...state, cart: cart, total: newTotal};

        case 'removeProduct':
            cart = [...state.cart];
            productIndex = cart.findIndex(
                (product) => product.id === action.payload.id,
            );
            if(productIndex !== -1) {
                if(cart[productIndex].quantity > 1) {
                    cart = [
                        ...cart.slice(0, productIndex),
                        {
                            ...cart[productIndex],
                            quantity: cart[productIndex].quantity -1,
                        },
                        ...cart.slice(productIndex + 1),
                    ];
                } else {
                    cart = [
                        ...cart.slice(0, productIndex),
                        ...cart.slice(productIndex + 1),
                      ];
                }
            }
            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
              }, 0);
              return { ...state, cart: cart, total: newTotal };

            // case 'addToQty':
            //     cart = [...state.cart];
            //     productIndex = cart.findIndex(
            //         (product) => product.id === action.payload.id);
            //     if(productIndex === 1) {
            //         cart.push({ ...action.payload, quantity: 1});
            //     } else {
            //         cart = [
            //             ...cart.slice(0, productIndex),
            //             {...cart[productIndex], quantity: cart[productIndex].quantity + 1},
            //             ...cart.slice(productIndex + 1),
            //         ];
            //     }
    
            //     newTotal = cart.reduce((currentTotal, product) => {
            //         currentTotal += product.discountedPrice * product.quantity;
            //         return currentTotal;
            //     }, 0);
            //     return {...state, cart: cart, total: newTotal};
        
              case 'clearCart':
                return { cart: [], total: 0}

        default:
            return state;
    }
}