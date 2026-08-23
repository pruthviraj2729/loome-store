import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import useHooks from "../../hooks/useHooks";
// import useSearch from "../../hooks/useSearch";
import NavItem from "../../reusable/NavItem";

const Navbar = ({ onCartClick, onWishListClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { navigate, itemNum } = useHooks();

  // const {
  //   search,
  //   setSearch,
  //   searchResults,
  //   clearSearch,
  // } = useSearch();

  return (
    <header className="w-full border-b border-gray-200 bg-white">

      {/* ================= NAVBAR ================= */}

      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <div className="cursor-pointer text-2xl font-medium tracking-[0.25em]">
          <NavLink to="/">
            LOOMÉ
          </NavLink>
        </div>


        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 text-xs tracking-[0.12em] lg:flex">

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


        {/* Desktop Actions */}

        <div className="hidden items-center gap-5 lg:flex">

          {/* SEARCH */}

          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer transition hover:opacity-50"
          >
            <Search
              size={19}
              strokeWidth={1.5}
            />
          </button>


          {/* USER */}

          <button className="cursor-pointer transition hover:opacity-50">
            <User
              size={19}
              strokeWidth={1.5}
            />
          </button>


          {/* WISHLIST */}

          <button
            onClick={onWishListClick}
            className="cursor-pointer transition hover:opacity-50"
          >
            <Heart
              size={19}
              strokeWidth={1.5}
            />
          </button>


          {/* CART */}

          <button
            onClick={onCartClick}
            className="relative cursor-pointer transition hover:opacity-50"
          >
            <ShoppingBag
              size={19}
              strokeWidth={1.5}
            />

            <span className="absolute -right-2 -top-2 text-[9px]">
              {itemNum()}
            </span>

          </button>

        </div>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </nav>


      {/* ================= SEARCH OVERLAY ================= */}

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white">

          {/* Search Header */}

          <div className="mx-auto flex h-20 max-w-[1600px] items-center gap-6 border-b border-gray-200 px-6 lg:px-10">

            <Search
              size={22}
              strokeWidth={1.5}
              className="text-gray-500"
            />

            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="
                flex-1
                bg-transparent
                text-lg
                font-light
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              onClick={() => {
                setIsSearchOpen(false);
                clearSearch();
              }}
              className="cursor-pointer transition hover:opacity-50"
            >
              <X
                size={22}
                strokeWidth={1.5}
              />
            </button>

          </div>


          {/* Search Results */}

          <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">

            {/* Nothing typed */}

            {!search.trim() && (
              <p className="text-sm text-gray-400">
                Search for products, categories or styles
              </p>
            )}


            {/* No results */}

            {search.trim() && searchResults.length === 0 && (
              <p className="text-sm text-gray-500">
                No products found for "{search}"
              </p>
            )}


            {/* Results */}

            {searchResults.length > 0 && (
              <div>

                <p className="mb-8 text-xs tracking-[0.15em] text-gray-400">
                  {searchResults.length} RESULTS
                </p>


                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">

                  {searchResults.map((product) => (

                    <div
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.id}`);

                        setIsSearchOpen(false);

                        clearSearch();
                      }}
                      className="group cursor-pointer"
                    >

                      {/* Image */}

                      <div className="aspect-[3/4] overflow-hidden bg-gray-100">

                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>


                      {/* Product Info */}

                      <div className="mt-4">

                        <h3 className="text-sm font-medium">
                          {product.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          ₹{product.price}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>
            )}

          </div>

        </div>
      )}


      {/* ================= MOBILE MENU ================= */}

      {isMenuOpen && (
        <div className="border-t border-gray-200 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5 text-sm tracking-[0.12em]">

            <NavLink to="/men">
              MEN
            </NavLink>

            <NavLink to="/women">
              WOMEN
            </NavLink>

            <NavLink to="/essentials">
              ESSENTIALS
            </NavLink>

            <NavLink to="/headcare">
              HEADCARE
            </NavLink>


            {/* Mobile Actions */}

            <div className="flex gap-5 border-t border-gray-200 pt-4">

              {/* Search */}

              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="cursor-pointer transition hover:opacity-50"
              >
                <Search
                  size={20}
                  strokeWidth={1.5}
                />
              </button>


              {/* User */}

              <button>
                <User
                  size={20}
                  strokeWidth={1.5}
                />
              </button>


              {/* Wishlist */}

              <button onClick={onWishListClick}>
                <Heart
                  size={20}
                  strokeWidth={1.5}
                />
              </button>


              {/* Cart */}

              <button onClick={onCartClick}>
                <ShoppingBag
                  size={20}
                  strokeWidth={1.5}
                />
              </button>

            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;


// import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
// import { useState } from "react";
// import useHooks from "../../hooks/useHooks";
// import NavItem from "../../reusable/NavItem";
// import { NavLink } from "react-router-dom";
// import useHooks from "../../hooks/useHooks";
// import useSearch from "../../hooks/useSearch";

// const Navbar = ({onCartClick, onWishListClick}) => {
//   // const {cart} = useContext(MyStore)
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const {navigate,  itemNum} = useHooks()
//   const [isSearchOpen, setIsSearchOpen] = useState(false);


//   // const itemNum = () => {
//   //   return cart.length
//   // }
//   const {
//     search,
//     setSearch,
//     searchResults,
//     clearSearch,
//   } = useSearch();

//   return (
//     <header className="w-full bg-white border-b border-gray-200">
//       <nav className="max-w-[1600px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

//         {/* Logo */}

//          <div  className="text-2xl tracking-[0.25em] font-medium cursor-pointer">
//           <NavLink to={'/'}>
//             LOOMÉ
//           </NavLink>
//         </div> 

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.12em]">
//             <NavItem to="/men">
//                 MEN
//             </NavItem>

//             <NavItem to="/women">
//                 WOMEN
//             </NavItem>

//             <NavItem to="/essentials">
//                 ESSENTIALS
//             </NavItem>

//             <NavItem to="/headcare">
//                 HEADCARE
//             </NavItem>

//         </div>

//         {/* Actions */}
//         <div className="hidden lg:flex items-center gap-5 ">
//           <button className="hover:opacity-50 transition cursor-pointer">
//             <Search size={19} strokeWidth={1.5} />
//           </button>

//           <button className="hover:opacity-50 transition cursor-pointer">
//             <User size={19} strokeWidth={1.5} />
//           </button>

//           <button onClick={onWishListClick} className="hover:opacity-50 transition cursor-pointer">
//             <Heart size={19} strokeWidth={1.5} />
//           </button>

//           <button onClick={onCartClick}  className="relative hover:opacity-50 transition cursor-pointer">
//             <ShoppingBag size={19} strokeWidth={1.5} />

//             <span  className="absolute -top-2 -right-2 text-[9px]">
//               {itemNum()}
//             </span>
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="lg:hidden"
//         >
//           {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden border-t border-gray-200 px-6 py-6">
//           <div className="flex flex-col gap-5 text-sm tracking-[0.12em]">

//             <a href="#">MEN</a>
//             <a href="#">WOMEN</a>
//             <a href="#">ESSENTIALS</a>
//             <a href="#">JOURNAL</a>
//             <a href="#">ABOUT</a>

//             <div className="pt-4 border-t border-gray-200 flex gap-5">
//              <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="cursor-pointer transition hover:opacity-50"
//               >
//                 <Search size={19} strokeWidth={1.5} />
//               </button>
//               <User size={20} strokeWidth={1.5} />
//               <Heart size={20} strokeWidth={1.5} />
//               <button onClick={onCartClick}>
//                 <ShoppingBag size={20} strokeWidth={1.5} />
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;