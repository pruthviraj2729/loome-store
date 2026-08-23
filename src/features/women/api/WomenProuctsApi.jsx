import { axiosInstence } from "../../../config/axiosInstence"

export const WomenProductsApi = async() => {
    try {
        let res = await axiosInstence.get('/products/category/womens-dresses')
        return res.data.products
    } catch (error) {
        console.log('error in Women Products Api', error)
    }
}


export const WomenProductDetail = async (id) => {
  try {
    const res = await axiosInstence.get(`/products/${id}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};