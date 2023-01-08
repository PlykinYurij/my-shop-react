import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import MyButton from "../UI/MyButton/MyButton"
import classes from "./Basket.module.css"

const Basket = ({ product, deleteProduct }) => {
    const [amount, setAmount] = useState(1)

    const increment = () => {
        setAmount(amount + 1)
    }

    const decrement = () => {
        if (amount > 1) {
            return setAmount(amount - 1)
        }
    }
    return (
        <div className={classes.wrapper} >
            <div className={classes.containerProduct}>
                <div className={classes.avatarProduct}>
                    <NavLink to={`/shop/${product.id}`}><img src={product.image} />
                    </NavLink>
                </div>
                <div className={classes.aboutProduct}>
                    <div className={classes.productTitle}>{product.title}</div>
                    <div className={classes.priceProduct}>{product.price}$</div>
                </div>
                <div className={classes.btnContainer}>
                    <div className={classes.btnCounterContainer}>
                        <MyButton onClick={() => deleteProduct(product)}>delete</MyButton>
                    </div>
                    <div className={classes.btnCounterContainer}>
                        <div>
                            <MyButton disabled={amount === 10} onClick={increment}>+</MyButton>
                        </div>
                        <div>{amount}</div>
                        <div>
                            <MyButton disabled={amount === 1} onClick={decrement}>-</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket