import { useParams } from 'react-router-dom'
import { useMenProductDetailHook } from '../../hooks/useMenProductsHook'
import MenProductDetailCard from '../components/MenProductDetailCard'

const MenProductDetailPage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useMenProductDetailHook(id)

    if (isLoading) return <h1 className="px-6 py-20 text-center text-sm text-[var(--color-ink)]/50">Loading product detail...</h1>
    if (isError) return <h1 className="px-6 py-20 text-center text-sm text-[#c0392b]">Something went wrong in men detail page: {error?.message}</h1>

    return <MenProductDetailCard product={data} />
}

export default MenProductDetailPage