import React from 'react'
import { axiosInstence } from '../../../config/axiosInstence'

export const MenProductsApi = async() => {
    try {
        let res = await axiosInstence.get("/products/category/mens-shirts")
        return res.data.products        
    } catch (error) {
        console.log('error in men products api', error)
    }
}

export default MenProductsApi