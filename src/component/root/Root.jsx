import React from 'react'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
