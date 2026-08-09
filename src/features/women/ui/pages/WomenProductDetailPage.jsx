import React from 'react'
import { useWomenProductDetailHook } from '../../hooks/useWomenProductsHook'
import { useParams } from 'react-router-dom'
import WomenProductDetailCard from '../components/WomenProductDetailCard'

const WomenProductDetailPage = () => {
    const {id} = useParams()

    const {data, isLoading, isError, error} = useWomenProductDetailHook(id)


    if(isLoading) return <h1>Loading product detail...</h1>
    if(isError) return <h1>Something wrong in women detail page: {error?.message}</h1>

  return  <WomenProductDetailCard product={data}/>

  
}

export default WomenProductDetailPage