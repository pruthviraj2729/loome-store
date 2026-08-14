import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../../shared/ui/components/AnnouncementBar'
import Navbar from '../../shared/ui/components/Navbar'
import JoinCommunity from '../../shared/ui/components/JoinCommunity'
import Footer from '../../pages/Footer'
import CartPage from '../../features/cart/ui/pages/CartPage'
import Wishlist from '../../features/wishlist/ui/pages/WishlistPage'

const MianLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  return (
    <div>
        <AnnouncementBar/>
        <Navbar 
          onCartClick={() => setIsCartOpen(true)}
          onWishListClick={() => setIsWishListOpen(true)}
        />
       
       <div>
         <Outlet/>
       </div>

       <CartPage
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
       />

       <Wishlist
          isWishListOpen = {isWishListOpen}
          onWishListClose = {() => setIsWishListOpen(false)}
       />

       <JoinCommunity/>
       <Footer/>
    </div>
  )
}

export default MianLayout