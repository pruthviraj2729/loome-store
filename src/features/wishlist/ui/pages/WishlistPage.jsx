import React, { useContext } from "react";
import { X, Heart, ShoppingBag } from "lucide-react";
import { MyStore } from "../../../../context/contextApi";

const Wishlist = ({ isWishListOpen, onWishListClose }) => {
  const {wishList, removeFromWishList, addToCart} = useContext(MyStore)
  console.log("wishlist:", wishList);
console.log("is array:", Array.isArray(wishList));
  return (
    <>
      {/* Overlay */}
      {isWishListOpen && (
        <div
          onClick={onWishListClose}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      {/* Wishlist Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-xl
        transition-transform duration-500 ease-in-out
        ${isWishListOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div className="flex items-center gap-2">
            <Heart size={18} strokeWidth={1.5} />

            <h2 className="text-sm font-medium uppercase tracking-[0.15em]">
              Wishlist
            </h2>
          </div>

          <button
            onClick={onWishListClose}
            className="transition-opacity hover:opacity-50"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Wishlist Content */}
        <div className="flex h-[calc(100%-73px)] flex-col">
          {wishList.length === 0 ? (
            /* Empty Wishlist */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <Heart
                size={40}
                strokeWidth={1}
                className="mb-5 text-gray-400"
              />

              <h3 className="text-lg font-light">
                Your wishlist is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Save your favorite pieces here and come back to them anytime.
              </p>

              <button
                onClick={onWishListClose}
                className="mt-7 flex h-12 items-center justify-center gap-2 bg-black px-7 text-xs tracking-[0.15em] text-white transition-opacity hover:opacity-80"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* Wishlist Products */}
              
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <div className="space-y-5">
                  
                  {wishList.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 border-b border-gray-100 pb-5"
                    >
                      {/* Product Image */}
                      <div className="h-28 w-22 shrink-0 overflow-hidden bg-[#f5f5f3]">
                        <img
                          src={product.images?.[0]}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium">
                              {product.title}
                            </p>

                            <p className="mt-1 text-xs capitalize text-gray-500">
                              {product.category?.replaceAll("-", " ")}
                            </p>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeFromWishList(product.id)}
                            className="shrink-0 text-gray-400 transition-colors hover:text-black"
                          >
                            <X size={16} strokeWidth={1.5} />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4">
                          <p className="text-sm">
                            ${product.price}
                          </p>

                          <button onClick={() => addToCart(product)}
                            className="flex h-9 items-center gap-2 bg-black px-4 text-[10px] tracking-[0.12em] text-white transition-opacity hover:opacity-80"
                          >
                            <ShoppingBag size={14} strokeWidth={1.5} />
                            ADD TO BAG
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
