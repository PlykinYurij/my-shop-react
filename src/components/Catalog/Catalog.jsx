import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Catalog.module.css"

const Catalog = ({ category }) => {
    return (
        <div className={classes.category}>
            <NavLink to={`/shop/category/${category}`}>{category}</NavLink>
        </div>
    )
}

export default Catalog