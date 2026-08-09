import { useQuery } from "@tanstack/react-query";
import { WomenProductDetail, WomenProductsApi } from "../api/WomenProuctsApi";
import { useNavigate } from "react-router-dom";


export const useWomenProductsHook = () => {
    return useQuery({
        queryKey: ['Women-Products'],
        queryFn: WomenProductsApi,

        staleTime: 5000 * 10 * 5
    })
}


export const useWomenProductDetailHook = (id) => {
    const {data, isLoading, isError, error} =  useQuery({
        queryKey: ['women-product-detail', id ],
        queryFn: () => WomenProductDetail(id),

        staleTime: 5000 * 10 * 5,

        enabled: !!id,
    })
 
    return{
        data,
        isLoading,
        isError,
        error,
    }
}