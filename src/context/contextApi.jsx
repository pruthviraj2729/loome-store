import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const MyStore = createContext();

const ContextApi = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                toast.warn("Product already exists in cart");
                return prevCart;
            }

            return [...prevCart,{ ...product, quantity : 1}];
        });
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) => prevCart.map((item) => item.id === productId
    ? {
        ...item, quantity: item.quantity + 1       
    } : item 

    ))
    }

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => prevCart.map((item) => item.id === productId
    ? {
        ...item, quantity: Math.max(1, item.quantity - 1) } : item))
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) =>  prevCart.filter((item) => item.id !== productId)
        )
    }

    return (
        <MyStore.Provider
            value={{
                cart,
                setCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </MyStore.Provider>
    );
};

export default ContextApi;