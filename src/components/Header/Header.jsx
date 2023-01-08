import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"
import shopIcon from "../../images/shopIcon2.png"

const Header = () => {
    const setActive = ({ isActive }) => isActive ? classes.active : " ";

    return (
        <div className={classes.containerHeader}>
            <div className={classes.iconContainer}>
                <NavLink to={"/shop"}>
                    <img className={classes.shopIcon} src={shopIcon} alt="icon" />
                </NavLink>
            </div>
            <div className={classes.navigationsContainer}>
                <div className={classes.navigation}>
                    <NavLink className={setActive} to={""}>Home</NavLink>
                </div>
                <div className={classes.navigation}>
                    <NavLink className={setActive} to={"/shop"}>Shop</NavLink>
                </div>
                <div className={classes.navigation}>
                    <NavLink className={setActive} to={"/basket"}>Cart</NavLink>
                </div>
            </div>
            <div className={classes.emertyContainer}>
            </div>
        </div>
    )
}

export default Header