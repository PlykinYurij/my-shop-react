import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { launchesApi } from "../../API/api"
import { useFetching } from "../hooks/useFetching"
import Product from "../Product/Product"
import Loader from "../UI/Loader/Loader"
import Error from "../Error/Error"

const Category = () => {
    const { category } = useParams()
    const [products, setProducts] = useState(null)
    const [fetchCategory, error, loading] = useFetching(async () => {
        const response = await launchesApi.getCategory(category)
        setProducts(response.data)
    })

    useEffect(() => {
        fetchCategory()
    }, [setProducts])

    return (
        <>
            {loading && <Loader />}
            {error && <Error>{error}</Error>}
            {products && products.map(product => <Product key={product.id} product={product} />)}
        </>
    )
}

export default Category
