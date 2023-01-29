import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import classes from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={classes.wrapperContent}>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.main}>
                <Outlet />
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout