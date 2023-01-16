import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../firebase/firebase.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    // Initialize categories state with {}
    const [categoriesMap, setCategoriesMap] = useState({});

    // Get categories from db
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, [])

    // Generate value object to pass in provider
    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}