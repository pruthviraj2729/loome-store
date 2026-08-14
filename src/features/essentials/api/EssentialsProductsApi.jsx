import { axiosInstence } from "../../../config/axiosInstence"

export const EssentialsProductsApi = async() => {
    try {
        let res = await axiosInstence.get('/products?limit=300')
        console.log(res)
        return res.data.products
    } catch (error) {
        console.log('error in essentials product api', error)
    }
}