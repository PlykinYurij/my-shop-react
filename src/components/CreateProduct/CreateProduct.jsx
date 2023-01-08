import axios from "axios"
import React, { useState } from "react"
import Error from "../Error/Error"
import classes from "./CreateProduct.module.css"

const CreateProduct = ({ setModal, addProduct }) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    let productData = {
        id: Date.now(),
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    async function addProductAPI(event) {
        event.preventDefault()
        setError("")
        if (value.trim().length === 0) {
            setError("Please enter valid title.")
            return
        }
        productData.title = value
        const response = await axios.post('https://fakestoreapi.com/products', productData)
        setValue("")
        setModal(false)
        addProduct(response.data)
    }

    return (
        <div className={classes.containerCreateProduct}>
            <form>
                {error && <Error>{error}</Error>}
                <div className={classes.inputContainer}>
                    <input className={classes.inputCreate} value={value} onChange={(event) => setValue(event.target.value)} />
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.buttonAdd} onClick={addProductAPI}>Add</button>
                </div>

            </form>
        </div>
    )
}

export default CreateProduct