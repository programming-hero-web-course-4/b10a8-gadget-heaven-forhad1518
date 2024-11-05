import React, { Children, createContext, useState } from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'



export const ContextGadgets = createContext({ Children })

export default function Root() {
    const allGedgets = useLoaderData();
    const [cartId, setCardId] = useState([]);
    const [wishId, setWishId] = useState([]);
    const [balance, setBalance] = useState(0)

    const handleCartBtn = (value, price) => {
        const getCartItem = allGedgets.find(gedget => gedget.product_id === value);
        const newCartItem = [...cartId, getCartItem];
        setCardId(newCartItem);
        setBalance(balance + price)
    }

    const handleWishBtn = value => {
        const getWishItem = allGedgets.find(gedget => gedget.product_id === value);
        const newWishItem = [...wishId, getWishItem];
        setWishId(newWishItem)
    }

    const handleDeletItem = (id, price) => {
        const deleteItem = cartId.filter((itemD, index) => index !== id);
        setCardId(deleteItem)
        setBalance(balance - price);
    }

    const handleDeleteWish = id => {
        const deleteWishItem = wishId.filter((itemD, index) => index !== id);
        setWishId(deleteWishItem);
    }
    return (
        <>
            <ContextGadgets.Provider value={allGedgets}>
                <NavBar cartId={cartId} wishId={wishId} balance={balance}></NavBar>
                <Outlet context={[handleCartBtn, cartId, handleWishBtn, wishId, balance, handleDeletItem, handleDeleteWish]}></Outlet>
                <Footer></Footer>

            </ContextGadgets.Provider>
        </>
    )
}

