import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../../shared/ui/components/AnnouncementBar'
import Navbar from '../../shared/ui/components/Navbar'
import JoinCommunity from '../../shared/ui/components/JoinCommunity'
import Footer from '../../pages/Footer'
import CartPage from '../../features/cart/ui/pages/CartPage'

const MianLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([])

  return (
    <div>
        <AnnouncementBar/>
        <Navbar onCartClick={() => setIsCartOpen(true)}/>
       
       <div>
         <Outlet/>
       </div>

       <CartPage
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
       />

       <JoinCommunity/>
       <Footer/>
    </div>
  )
}

export default MianLayout