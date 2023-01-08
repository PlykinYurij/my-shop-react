import React, { useContext, useState } from "react"
import { BasketContext } from "../context"
import Basket from "./Backet"
import MyButton from "../UI/MyButton/MyButton"
import classes from "./Basket.module.css"

const BasketContainer = () => {
    const { basket, setBasket } = useContext(BasketContext)
    const [isBuy, setIsBuy] = useState(false)
    const sum = basket.reduce((sum, current) => sum + current.price, 0);

    const deleteProduct = (product) => {
        setBasket(basket.filter(b => b.id !== product.id))
    }

    function buyProducts() {
        setBasket([])
        setIsBuy(true)
    }

    let hasBasket = (basket[0] === undefined)

    return (
        <div>
            <div className={classes.titleCart}>Cart</div>
            {
                (basket[0] === undefined) &&
                <div className={classes.cartNone}>Cart is empty</div>
            }
            {basket.map(product => <Basket
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
            />)}
            {(basket[0]) && <div className={classes.amount}>
                Аmount of purchases <b>{sum.toFixed(2)}$</b>
            </div>}
            <div>
                {isBuy && <div className={classes.buyCart}>Cart paid</div>}
                <div className={classes.btnBuy}>
                    <MyButton disabled={hasBasket} onClick={() => setTimeout(buyProducts, 1000)}>Buy</MyButton>
                </div>
            </div>
        </div>
    )
}

export default BasketContainer