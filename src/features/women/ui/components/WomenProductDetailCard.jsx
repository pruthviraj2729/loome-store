import React, { useContext, useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { MyStore } from "../../../../context/contextApi";

const WomenProductDetailCard = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useContext(MyStore)

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="px-6 py-10 md:px-10 lg:px-16 lg:py-16">

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

        {/* ================= IMAGES ================= */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[100px_1fr]">

          {/* Thumbnails */}
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">

            {product.images?.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImage(index)}
                className={`h-24 w-20 shrink-0 overflow-hidden border ${
                  selectedImage === index
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}

          </div>

          {/* Main Image */}
          <div className="order-1 aspect-[3/4] overflow-hidden bg-gray-100 md:order-2">

            <img
              src={product.images?.[selectedImage]}
              alt={product.title}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="flex flex-col justify-center">

          <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
            {product.category?.replaceAll("-", " ")}
          </p>

          <h1 className="mt-3 text-3xl font-light md:text-4xl">
            {product.title}
          </h1>

          <p className="mt-5 text-lg">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2 text-sm">
            <span>★</span>
            <span>{product.rating}</span>
            <span className="text-gray-400">
              / 5
            </span>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-lg text-sm leading-7 text-gray-600">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="mt-10">

            <p className="mb-3 text-xs uppercase tracking-[0.15em]">
              Quantity
            </p>

            <div className="flex h-12 w-32 items-center justify-between border border-gray-300">

              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="flex h-full w-10 items-center justify-center"
              >
                <Minus size={15} strokeWidth={1.5} />
              </button>

              <span className="text-sm">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="flex h-full w-10 items-center justify-center"
              >
                <Plus size={15} strokeWidth={1.5} />
              </button>

            </div>

          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">

            <button onClick={() => addToCart(product)} className="flex h-14 flex-1 items-center justify-center gap-3 bg-black text-sm text-white transition-opacity hover:opacity-80">
              <ShoppingBag
                size={18}
                strokeWidth={1.4}
              />

              Add to bag
            </button>

            <button className="flex h-14 w-14 items-center justify-center border border-gray-300">
              <Heart
                size={19}
                strokeWidth={1.4}
              />
            </button>

          </div>

          {/* Product Information */}
          <div className="mt-10 border-t border-gray-200">

            <div className="flex justify-between border-b border-gray-200 py-5 text-sm">
              <span>Availability</span>
              <span className="text-gray-500">
                {product.availabilityStatus}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 py-5 text-sm">
              <span>Shipping</span>
              <span className="text-gray-500">
                {product.shippingInformation}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 py-5 text-sm">
              <span>Warranty</span>
              <span className="text-gray-500">
                {product.warrantyInformation}
              </span>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default WomenProductDetailCard;