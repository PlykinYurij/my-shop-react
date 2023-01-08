import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { BasketContext } from "../context"
import classes from "./Product.module.css"
import MyButton from "../UI/MyButton/MyButton"

const Product = ({ product }) => {
    const [details, setDetails] = useState(false)
    const [inBasket, setInBasket] = useState(true)
    const { basket, setBasket } = useContext(BasketContext)

    const deleteProduct = (product) => {
        return setBasket(basket.filter(b => b.id !== product.id))
    }

    const addProduct = (product) => {
        return setBasket([...basket, product])
    }

    const AddShoppingCart = (product) => {
        if (inBasket) {
            addProduct(product)
            return setInBasket(false)
        } else {
            deleteProduct(product)
            return setInBasket(true)
        }
    }

    return <>
        <div className={classes.wrapper}>
            <div className={classes.containerProduct}>
                <div className={classes.avatarProduct}>
                    <NavLink to={`/shop/${product.id}`}>
                        <img src={product.image} alt={"img"} />
                    </NavLink>
                </div>
                <div className={classes.aboutProduct}>
                    <div className={classes.productTitle}>{product.title}</div>
                    <div className={classes.priceProduct}>{product.price}$</div>
                    <div className={classes.details}>
                        <MyButton onClick={() => setDetails(!details)}>
                            {details ? "Hide details" : "Show details"}
                            </MyButton>
                    </div>
                    {details && <div className={classes.descriptionProduct}>{product.description}</div>}
                    <div className={classes.bascet}>
                        <MyButton onClick={() => AddShoppingCart(product)}>
                            {(basket.find(p => p.id === product.id) === undefined) ? "in basket" : "remove"}
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Product