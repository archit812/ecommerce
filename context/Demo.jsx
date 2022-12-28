import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "react-hot-toast";

const Context = createContext();

export default function Demo(props) {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);


    //Increase and Decrease in Quantity
    function increaseeQuantity() {
        setQty((previousQty) => previousQty + 1)
    }

    function decreaseQuantity() {
        setQty((previousQty) => {
            if (previousQty - 1 < 1) return 1;
            return previousQty - 1;
        })
    }


    //Add To Cart
    function onAdd(product, quantity) {
        const CheckProductInCart = cartItems.find((item) => item._id === product._id)
        setTotalPrice((previousTotalPrice) => previousTotalPrice + product.price * quantity)
        setTotalQuantities((previousQuantity) => previousQuantity + quanity)

        if (CheckProductInCart) {

            const updateCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updateCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }])
        }

    }


    return (
        <Context.Provider value={{
            qty,
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            increaseeQuantity,
            decreaseQuantity,
        }}>

        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context)