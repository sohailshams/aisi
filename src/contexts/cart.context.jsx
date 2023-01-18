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


const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
        );
}


const removeItem = (cartItems, productToRemove) => {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
}

// Get items from local storage  and set value to [] if no item found 
const persistedCartItemsFromLocalStorage = JSON.parse(window.localStorage.getItem('persisted-items'));

const persistedItemsInCart = persistedCartItemsFromLocalStorage ? (persistedCartItemsFromLocalStorage) : ([])


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: persistedItemsInCart,
    addItemToCart: () => {},
    totalCartItems: 0,
    removeItemFromCart: () => {},
    clearItemCompletely: () => {},
    totalPrice: 0
});


export const CartProvider = ({children}) => {
    // Initialize cart dropdown state with false
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Initialize cart items state with []
    const [cartItems, setCartItems] = useState(persistedItemsInCart);

    // Store items in local storage each time the state changes
    useEffect(() => {
    window.localStorage.setItem('persisted-items', JSON.stringify(cartItems));
    }, [cartItems])

    // Initialize cart count state with 0
    const [totalCartItems, setTotalCartItems] = useState(0);

    // Initialize totalPrice with 0
    const [totalPrice, setTotalPrice] = useState(0);


    // Getting cart item's total count
    useEffect(() => {
        const newTotalCartItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalCartItems(newTotalCartItems);
    }, [cartItems])

    

    // Getting cart item's total price
    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalPrice(newTotalPrice);
    }, [cartItems])

    // A function to add product to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    // A function to remove product from cart
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    // A function to remove product intirely from cart
    const clearItemCompletely = (productToClear) => {
    setCartItems(removeItem(cartItems, productToClear));
    }

    // Generate value object to pass in provider
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalCartItems, removeItemFromCart, clearItemCompletely, totalPrice };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
