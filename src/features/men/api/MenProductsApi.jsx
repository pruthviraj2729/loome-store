import { axiosInstence } from "../../../config/axiosInstence"

export const MenProductsApi = async () => {
    try {
        let res = await axiosInstence.get("/products/category/mens-shirts")
        return res.data.products
    } catch (error) {
        console.log('error in men products api', error)
    }
}

export const MenProductDetail = async (id) => {
  try {
    const res = await axiosInstence.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default MenProductsApi