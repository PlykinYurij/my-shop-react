import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { launchesApi } from "../../API/api";
import { useFetching } from "../hooks/useFetching";
import Product from "../Product/Product";
import Loader from "../UI/Loader/Loader";
import Error from "../Error/Error"

const PageProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [getProduct, error, loading] = useFetching(async () => {
        const response = await launchesApi.getProduct(id)
        setProduct(response.data)
    })

    useEffect(() => {
        getProduct()
    }, [setProduct])

    return (
        <>
            {error && <Error>{error}</Error>}
            {loading && <Loader />}
            {product && <Product product={product} />}
        </>
    )
}

export default PageProduct