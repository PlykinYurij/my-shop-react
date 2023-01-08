import React, { useEffect, useState } from "react"
import { launchesApi } from "../../API/api"
import { useFetching } from "../hooks/useFetching"
import Loader from "../UI/Loader/Loader"
import Catalog from "./Catalog"
import classes from "./Catalog.module.css"
import Error from "../Error/Error"

const CatalogContainer = () => {
    const [categories, setCategories] = useState([])
    const [getCategories, error, loading] = useFetching(async () => {
        const response = await launchesApi.getCategories()
        setCategories(response.data)
    })

    useEffect(() => {
        getCategories()
    }, [setCategories])

    return (
        <div>
            {error && <Error>{error}</Error>}
            {loading && <Loader />}
            <div className={classes.title}>Catalog</div>
            {categories.map((category) => <Catalog key={category} category={category} />)}
        </div>
    )
}

export default CatalogContainer