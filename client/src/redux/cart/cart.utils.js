export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartitem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartitem => (
            cartItem.id === cartItemToAdd.id 
                ? { ...carItem, quantity: cartItem.quantity + 1 }
                : cartItems
        ))
    }

    return [cartItems, {...cartItemToAdd, quantity: 1}];
}