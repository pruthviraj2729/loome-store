import React from 'react'
import { useMenProductsHook } from '../../hooks/useMenProductsHook'
import MenProductCard from '../components/MenProductCard';
import MenHero from '../components/MenHero';

const MenPage = () => {
    const {data : prducts=[], isLoading, isError, error } = useMenProductsHook();

   if (isLoading) return <h2>Loading...</h2>;
   if (isError) return <h2>Something went wrong</h2>;

  return (

    <main>
        <MenHero/>
        <section className='px-1'>
            <div className='grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 cursor-pointer'>
                {
                    prducts?.map((product) => {
                    return <MenProductCard key={product.id} product={product}/>
                    })
                }
            </div>        
        </section>        
    </main>
  )
}

export default MenPage