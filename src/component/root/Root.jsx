import React, { Children, createContext, useState } from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




export const ContextGadgets = createContext({ Children })

export default function Root() {
    const allGedgets = useLoaderData();
    const [cartId, setCardId] = useState([]);
    const [wishId, setWishId] = useState([]);
    const [balance, setBalance] = useState(0)

    const handleCartBtn = (value, price) => {
        const getCartItem = allGedgets.find(gedget => gedget.product_id === value);
        const newCartItem = [...cartId, getCartItem];

        toast.success("added cart successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
            theme: 'colored',
        })
        setCardId(newCartItem);
        setBalance(balance + price)
    }

    const handleWishBtn = value => {
        const getWishItem = allGedgets.find(gedget => gedget.product_id === value);
        const newWishItem = [...wishId, getWishItem];

        const againAddWish = wishId.find(match => match.product_id === value)
        if (againAddWish) {
            toast.error("Already Item wishlist!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                theme: 'colored',
            })
            return
        } else {
            toast.success("Added wishlist successful", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                theme: 'colored',
            })
            setWishId(newWishItem)
        }
    }
    // added wist to cart
    const handleWishAddCart = (id, price, index) => {
        handleCartBtn(id, price)
        handleRemoveWish(index)
    }
    const handleRemoveWish = id => {
        const removeWishItem = wishId.filter((itemD, index) => index !== id);
        setWishId(removeWishItem);
    }
    const handleDeletItem = (id, price) => {
        const deleteItem = cartId.filter((itemD, index) => index !== id);
        setCardId(deleteItem)
        toast.warning("remove from cart", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
            theme: 'colored',
        })
        setBalance(balance - price);
    }

    const handleDeleteWish = id => {
        const deleteWishItem = wishId.filter((itemD, index) => index !== id);

        toast.warning("remove from wishlist", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
            theme: 'colored',
        })
        setWishId(deleteWishItem);
    }
    const handleSortPriceBtn = () => {
        cartId.slice(0);
        cartId.sort(function (a, b) {
            return b.price - a.price;
        })
    }
    return (
        <>
            <ContextGadgets.Provider value={allGedgets}>
                <NavBar cartId={cartId} wishId={wishId} balance={balance}></NavBar>
                <Outlet context={[handleCartBtn, cartId, handleWishBtn, wishId, balance, handleDeletItem, handleDeleteWish, handleSortPriceBtn, handleWishAddCart]}></Outlet>
                <Footer></Footer>
                <ToastContainer></ToastContainer>
            </ContextGadgets.Provider>
        </>
    )
}
// const sortPrice = (pets) =>{
//     pets.slice(0);
//     pets.sort(function(a,b){
//         return b.price - a.price;
//     })
