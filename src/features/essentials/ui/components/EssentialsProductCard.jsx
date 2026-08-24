import React, { useContext } from "react";
import { Heart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MyStore } from "../../../../context/contextApi";
import { useWishlistHook } from "../../../women/hooks/useWishlistHook";


const EssentialsProductCard = ({ product }) => {

  const navigate = useNavigate()
  const {addToCart, addToWishList, wishList} = useContext(MyStore)
  const {isWishListed } = useWishlistHook()

  const hasDiscount = product.discountPercentage > 0;

  const originalPrice = hasDiscount
    ? product.price / (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <article className="group relative">

      {/* IMAGE */}
      <div  className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f3]">

        <img
          
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Second image on hover */}
        {product.images?.[1] && (
          <img
            onClick={() => navigate(`/women/products/${product.id}`) }
            src={product.images[1]}
            alt={product.title}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Discount */}
        {hasDiscount && (
          <span className="absolute left-3 top-3 text-[11px] tracking-wide">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => addToWishList(product)}
          className="
            absolute
            right-3
            top-3
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <Heart
            size={19}
            strokeWidth={1.3}
            fill = {isWishListed(product) ? 'red' : 'none'}
            color= {isWishListed(product) ? 'red' : 'currentColor'}
          />
        </button>

        {/* Quick add */}
        <button
          onClick={() => addToCart(product)}
          className="
            absolute
            bottom-4
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2
            bg-white
            px-5
            py-2.5
            text-[10px]
            uppercase
            tracking-[0.15em]
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <Plus size={13} strokeWidth={1.5} />
          Quick add
        </button>
      </div>


      {/* PRODUCT INFORMATION */}
      <div className="pt-4">

        {/* Product name */}
        <h3 className="text-[13px] font-normal leading-5">
          {product.title}
        </h3>

        {/* Price */}
        <div className="mt-1 flex items-center gap-2 text-[13px]">

          <span>
            ${product.price.toFixed(2)}
          </span>

          {hasDiscount && (
            <span className="text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}

        </div>

        {/* Category / color */}
        <div className="mt-2 flex items-center justify-between">

          <span className="text-[11px] text-gray-500">
            {product.category}
          </span>

          <span className="text-[11px] text-gray-400">
            {product.stock > 0 ? "In stock" : "Sold out"}
          </span>

        </div>

      </div>

    </article>
  );
};

export default EssentialsProductCard;
