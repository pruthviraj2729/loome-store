import React from 'react'
import { useEssentialsProductHook } from '../../hooks/useEssentialsProductHook'
import EssentialsProductCard from '../components/EssentialsProductCard'
import EssentialsHero from '../components/EssentialsHero'

const EssentialsPage = () => {

  const {data: products=[], isLoading, isError, error} = useEssentialsProductHook()

  if(isLoading) return <h1>Loading Essentials</h1>
  if(isError) return <h1>Something went wrong</h1>

  const essentialCategories = [
    "mens-shirts",
    "womens-tops",
    "mens-shoes",
    "womens-shoes",
    "mens-watches",
    "womens-bags",
    'tops',
    "beauty",
];
  
const essentials = products.filter((product) =>
    essentialCategories.includes(product.category)
);
return (
  <main>
    <EssentialsHero/>
    <section>
      <div className='p-2 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 cursor-pointer'>
        {
          essentials.map((product) => {
            return <EssentialsProductCard key={product.id} product={product}/>
          })
        }
      </div>      
    </section>
  </main>
  )
}

export default EssentialsPage