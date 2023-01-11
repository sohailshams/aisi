import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: []
});


export const ProductsProvider = ({children}) => {
    // Initialize products state with []
    const [products, setProducts] = useState(PRODUCTS);

    // Generate value object to pass in provider
    const value = { products };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}