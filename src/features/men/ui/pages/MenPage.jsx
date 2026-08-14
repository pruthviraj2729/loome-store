import React from 'react'
import { useMenProductsHook } from '../../hooks/useMenProductsHook'
import MenProductCard from '../components/MenProductCard';
import MenHero from '../components/MenHero';

const MenPage = () => {
  const {data: prducts=[], isLoading, isError, error} = useMenProductsHook();

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Something went wrong</h1>

  return (

    <main>
      {/* Page Header */}
      <MenHero/>
      <section className='px-1'>
        <div className=' grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 cursor-pointer'>
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


// import React from 'react'
// import { useWomenProductsHook } from '../../hooks/useWomenProductsHook'
// import WomenProductCard from '../components/WomenProductCard';

// const WomenPage = () => {
//     const {data : prducts=[], isLoading, isError, error } = useWomenProductsHook();

//    if (isLoading) return <h2>Loading...</h2>;
//    if (isError) return <h2>Something went wrong</h2>;

//   return (
//     <div className='grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 cursor-pointer'>
//         {
//             prducts?.map((product) => {
//                return <WomenProductCard key={product.id} product={product}/>
//             })
//         }
//     </div>
//   )
// }

// export default WomenPage