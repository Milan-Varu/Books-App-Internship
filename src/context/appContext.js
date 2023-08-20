import React, { useState, createContext, useContext } from "react";
// import Cart from "../components/Addtocart/Addtocart";

const AppContext = createContext(); // Changed variable name to follow naming conventions

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) { // Change comparison from null to undefined
        throw new Error("useAppContext must be used within AppContextProvider");
    }

    return context;
}

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);

    const addToFavorites = (book) => {
        const newFavorites = [...favorites, book]; // Corrected variable name from Cart to favorites
        setFavorites(newFavorites);
    };

    const addToCart = (book) => {
        const newCart = [...cart, book]; // Corrected variable name from Cart to cart
        setCart(newCart);
    };

    const removeFromFavorites = (id) => {
        const newFavorites = favorites.filter((book) => book.id !== id);
        setFavorites(newFavorites);
    };
    
    const removeFromCart = (id) => {
        const newCart = cart.filter((book) => book.id !== id);
        setCart(newCart);
    };

    const contextValue = { // Combined context values into a single object
        favorites,
        addToFavorites,
        removeFromFavorites,
        cart,
        addToCart,
        removeFromCart
    };

    return (
        <AppContext.Provider value={contextValue}> {/* Corrected value attribute */}
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
