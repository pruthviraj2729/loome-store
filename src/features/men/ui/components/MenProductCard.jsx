// import { useContext, useState } from "react";
// import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
// import { MyStore } from "../../../../context/contextApi";
// import { formatPrice } from "../../../../config/currency";

// const MenProductDetailCard = ({ product }) => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart, addToWishList } = useContext(MyStore);

//   if (!product) {
//     return <div className="px-6 py-20 text-center text-sm text-[var(--color-ink)]/50">Product not found</div>;
//   }

//   return (
//     <main className="container-page py-10 lg:py-16">
//       <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-[100px_1fr]">
//           <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
//             {product.images?.map((image, index) => (
//               <button
//                 key={image}
//                 onClick={() => setSelectedImage(index)}
//                 className={`h-24 w-20 shrink-0 overflow-hidden border transition-colors ${
//                   selectedImage === index
//                     ? "border-[var(--color-ink)]"
//                     : "border-transparent hover:border-[var(--color-line)]"
//                 }`}
//               >
//                 <img src={image} alt={`${product.title} ${index + 1}`} className="h-full w-full object-cover" />
//               </button>
//             ))}
//           </div>

//           <div className="order-1 aspect-[3/4] overflow-hidden bg-[var(--color-panel)] md:order-2">
//             <img src={product.images?.[selectedImage]} alt={product.title} className="h-full w-full object-cover" />
//           </div>
//         </div>

//         <div className="flex flex-col justify-center">
//           <p className="label">{product.category?.replaceAll("-", " ")}</p>

//           <h1 className="font-serif mt-3 text-3xl font-light text-[var(--color-ink)] md:text-4xl">
//             {product.title}
//           </h1>

//           <p className="mt-5 text-lg text-[var(--color-ink)]">{formatPrice(product.price)}</p>

//           <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-ink)]">
//             <span>★</span>
//             <span>{product.rating}</span>
//             <span className="text-[var(--color-ink)]/40">/ 5</span>
//           </div>

//           <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--color-ink)]/60">
//             {product.description}
//           </p>

//           <div className="mt-10">
//             <p className="label mb-3">Quantity</p>

//             <div className="flex h-12 w-32 items-center justify-between border border-[var(--color-line)]">
//               <button
//                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 aria-label="Decrease quantity"
//                 className="flex h-full w-10 items-center justify-center text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
//               >
//                 <Minus size={15} strokeWidth={1.5} />
//               </button>

//               <span className="text-sm text-[var(--color-ink)]">{quantity}</span>

//               <button
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 aria-label="Increase quantity"
//                 className="flex h-full w-10 items-center justify-center text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
//               >
//                 <Plus size={15} strokeWidth={1.5} />
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 flex gap-3">
//             <button onClick={() => addToCart({ ...product, quantity })} className="btn-primary h-14 flex-1">
//               <ShoppingBag size={18} strokeWidth={1.4} />
//               Add to bag
//             </button>

//             <button
//               onClick={() => addToWishList(product)}
//               aria-label="Add to wishlist"
//               className="flex h-14 w-14 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] transition hover:border-[var(--color-ink)]"
//             >
//               <Heart size={19} strokeWidth={1.4} />
//             </button>
//           </div>

//           <div className="mt-10 border-t border-[var(--color-line)]">
//             <div className="flex justify-between border-b border-[var(--color-line)] py-5 text-sm text-[var(--color-ink)]">
//               <span>Availability</span>
//               <span className="text-[var(--color-ink)]/50">{product.availabilityStatus}</span>
//             </div>
//             <div className="flex justify-between border-b border-[var(--color-line)] py-5 text-sm text-[var(--color-ink)]">
//               <span>Shipping</span>
//               <span className="text-[var(--color-ink)]/50">{product.shippingInformation}</span>
//             </div>
//             <div className="flex justify-between border-b border-[var(--color-line)] py-5 text-sm text-[var(--color-ink)]">
//               <span>Warranty</span>
//               <span className="text-[var(--color-ink)]/50">{product.warrantyInformation}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MenProductDetailCard;


import React, { useContext } from "react";
import { Heart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MyStore } from "../../../../context/contextApi";
import { useWishlistHook } from "../../../women/hooks/useWishlistHook";


const MenProductCard = ({ product }) => {

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
            €{product.price.toFixed(2)}
          </span>

          {hasDiscount && (
            <span className="text-gray-400 line-through">
              €{originalPrice.toFixed(2)}
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

export default MenProductCard;
