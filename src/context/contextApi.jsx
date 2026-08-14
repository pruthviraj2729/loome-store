import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyStore = createContext();

const ContextApi = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishlist')) || [])


    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                toast.warn("Product already exists in cart");
                return prevCart;
            }

            toast.success('Product added to cart')
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
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToWishList = (product) => {
        setWishList((prevWishList) => {
            const existInWishList = prevWishList.some((item) => item.id === product.id)

            if(existInWishList) {
                toast.warn(' Product removed From Wish List')

                return prevWishList.filter((item) => item.id !== product.id)
            }

            toast.success('Product added to WishList')
            return [...prevWishList, product] 
        });
    }
    const removeFromWishList = (productId) => {
        setWishList((prevWishList) => prevWishList.filter((item) => item.id !== productId))
    }

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishList))
    },[wishList])

    return (
        <MyStore.Provider
            value={{
                cart,
                setCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                wishList,
                setWishList,
                addToWishList,
                removeFromWishList,
            }}
        >
            {children}
        </MyStore.Provider>
    );
};

export default ContextApi;