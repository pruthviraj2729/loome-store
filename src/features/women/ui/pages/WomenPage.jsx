import React from 'react'
import { useWomenProductsHook } from '../../hooks/useWomenProductsHook'
import WomenProductCard from '../components/WomenProductCard';

const WomenPage = () => {
    const {data : prducts=[], isLoading, isError, error } = useWomenProductsHook();

   if (isLoading) return <h2>Loading...</h2>;
   if (isError) return <h2>Something went wrong</h2>;

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 cursor-pointer'>
        {
            prducts?.map((product) => {
               return <WomenProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default WomenPage