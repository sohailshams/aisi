import { createContext, useState, useEffect } from 'react';

// A helper function to check and add products to the cart
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        );

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalCartItems: 0
});


export const CartProvider = ({children}) => {
    // Initialize cart dropdown state with false
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Initialize cart items state with []
    const [cartItems, setCartItems] = useState([]);

    // Initialize cart count state with 0
    const [totalCartItems, setTotalCartItems] = useState(0);

    // Getting cart item's total count
    useEffect(() => {
        const newTotalCartItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalCartItems(newTotalCartItems);
    }, [cartItems])

    // A function to add product to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    // Generate value object to pass in provider
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalCartItems };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
