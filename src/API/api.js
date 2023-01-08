import axios from "axios"

export const launchesApi = {
    getLaunches (limit = 5) {
        const response = axios.get("https://fakestoreapi.com/products", {
            params: {
                limit: limit
            }
        })
        return response
    },
    getProduct (id) {
        const response = axios.get(`https://fakestoreapi.com/products/${id}`)
        return response
    },
    getCategories() {
        const response = axios.get("https://fakestoreapi.com/products/categories")
        return response
    },
    getCategory(category) {
        const response = axios.get(`https://fakestoreapi.com/products/category/${category}`)
        return response
    }
}