import React, { Children, createContext } from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'

export const ContextGadgets = createContext({Children})

export default function Root() {
    const allGedgets = useLoaderData();
    return (
        <>
            <ContextGadgets.Provider value={allGedgets}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ContextGadgets.Provider>
        </>
    )
}

