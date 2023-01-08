import React, { useEffect, useState } from "react"
import { launchesApi } from "../../API/api"
import CatalogContainer from "../Catalog/CatalogContainer"
import CreateProduct from "../CreateProduct/CreateProduct"
import Error from "../Error/Error"
import { useFetching } from "../hooks/useFetching"
import { useSortedSearchQuery } from "../hooks/useSortedSearchQuery"
import Modal from "../Modal/Modal"
import Product from "../Product/Product"
import Loader from "../UI/Loader/Loader"
import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"
import MySelected from "../UI/MySelected/MySelected"
import classes from "./Container.module.css"

const Container = () => {
    const [products, setProducts] = useState([])
    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [modal, setModal] = useState(false)
    const [limit, setLimit] = useState(5)
    const [fetchProducts, error, loading] = useFetching(async () => {
        const response = await launchesApi.getLaunches(limit)
        setProducts(response.data)
    })

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    useEffect(() => {
        fetchProducts()
    }, [limit])

    const sortedAndSearchQueryPosts = useSortedSearchQuery(products, selectedSort, searchQuery)

    return <div className={classes.wrapper}>
        <div className={classes.catalogConteiner}><CatalogContainer /></div>
        <div className={classes.contentContainer}>
            <div className={classes.containerOptions}>
                <div className={classes.option}>
                    <select value={limit} onChange={event => setLimit(event.target.value)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={-1}>All</option>
                    </select>
                </div>
                <div className={classes.option}>
                    <MySelected value={selectedSort} onChange={selectedSort => setSelectedSort(selectedSort)}
                        descriptions={"Сортировка"}
                        options={[
                            { value: "title", name: "по названию" },
                            { value: "description", name: "по описанию" },
                        ]} />
                </div>
                <div className={classes.option}>
                    <MyInput placeholder={"search..."}
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)} />
                </div>
            </div>
            {loading && <Loader />}
            {error && <Error>{error}</Error>}
            {sortedAndSearchQueryPosts.map(product => <Product key={product.id} product={product} />)}
            <Modal visible={modal} setVisible={setModal}>
                <CreateProduct setModal={setModal} addProduct={addProduct} />
            </Modal>
            <MyButton className={classes.btnCreateProduct} onClick={() => setModal(true)}>
                <div>add</div>
                <div>product</div>
            </MyButton>
        </div>
        <div className={classes.emptyContainer}></div>
    </div>
}

export default Container