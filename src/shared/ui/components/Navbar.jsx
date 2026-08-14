import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import useHooks from "../../hooks/useHooks";
import NavItem from "../../reusable/NavItem";
import { NavLink } from "react-router-dom";

const Navbar = ({onCartClick, onWishListClick}) => {
  // const {cart} = useContext(MyStore)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {navigate, itemNum} = useHooks()

  // const itemNum = () => {
  //   return cart.length
  // }


  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-[1600px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}

         <div  className="text-2xl tracking-[0.25em] font-medium cursor-pointer">
          <NavLink to={'/'}>
            LOOMÉ
          </NavLink>
        </div> 

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.12em]">
            <NavItem to="/men">
                MEN
            </NavItem>

            <NavItem to="/women">
                WOMEN
            </NavItem>

            <NavItem to="/essentials">
                ESSENTIALS
            </NavItem>

            <NavItem to="/headcare">
                HEADCARE
            </NavItem>

        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5 ">
          <button className="hover:opacity-50 transition cursor-pointer">
            <Search size={19} strokeWidth={1.5} />
          </button>

          <button className="hover:opacity-50 transition cursor-pointer">
            <User size={19} strokeWidth={1.5} />
          </button>

          <button onClick={onWishListClick} className="hover:opacity-50 transition cursor-pointer">
            <Heart size={19} strokeWidth={1.5} />
          </button>

          <button onClick={onCartClick}  className="relative hover:opacity-50 transition cursor-pointer">
            <ShoppingBag size={19} strokeWidth={1.5} />

            <span  className="absolute -top-2 -right-2 text-[9px]">
              {itemNum()}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 px-6 py-6">
          <div className="flex flex-col gap-5 text-sm tracking-[0.12em]">

            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">ESSENTIALS</a>
            <a href="#">JOURNAL</a>
            <a href="#">ABOUT</a>

            <div className="pt-4 border-t border-gray-200 flex gap-5">
              <Search size={20} strokeWidth={1.5} />
              <User size={20} strokeWidth={1.5} />
              <Heart size={20} strokeWidth={1.5} />
              <button onClick={onCartClick}>
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;