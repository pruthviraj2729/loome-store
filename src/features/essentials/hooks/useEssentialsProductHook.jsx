import { useQuery } from "@tanstack/react-query"
import { EssentialsProductsApi } from "../api/EssentialsProductsApi"

export const useEssentialsProductHook = () => {
    return useQuery({
        queryKey: ['essentials-products'],
        queryFn: EssentialsProductsApi,
    })
}