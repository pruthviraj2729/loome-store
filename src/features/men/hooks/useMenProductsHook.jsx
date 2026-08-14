import { useQuery } from "@tanstack/react-query"
import MenProductsApi from "../api/MenProductsApi"

export const useMenProductsHook = () => {
    return useQuery({
        queryKey: ['men-products'],
        queryFn: MenProductsApi,
    })
}