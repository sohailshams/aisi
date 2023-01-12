import { createContext, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});


export const CartProvider = ({children}) => {
    // Initialize cart dropdown state with false
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Generate value object to pass in provider
    const value = { isCartOpen, setIsCartOpen };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}