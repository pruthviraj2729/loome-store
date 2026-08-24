import { useQuery } from "@tanstack/react-query"
import MenProductsApi, { MenProductDetail } from "../api/MenProductsApi"

export const useMenProductsHook = () => {
    return useQuery({
        queryKey: ['men-products'],
        queryFn: MenProductsApi,
        staleTime: 5000 * 10 * 5,
    })
}

export const useMenProductDetailHook = (id) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['men-product-detail', id],
        queryFn: () => MenProductDetail(id),
        staleTime: 5000 * 10 * 5,
        enabled: !!id,
    })

    return { data, isLoading, isError, error }
}