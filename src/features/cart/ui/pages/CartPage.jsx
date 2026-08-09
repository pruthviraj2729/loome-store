import React, { useContext } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { MyStore } from "../../../../context/contextApi";

const CartPage = ({ isOpen, onClose = [] }) => {
  const {cart, decreaseQuantity, increaseQuantity, removeFromCart} = useContext(MyStore)
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      {/* Cart Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Loomé
            </p>

            <h2 className="mt-1 text-xl font-light">
              Your Bag
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag
                size={40}
                strokeWidth={1}
                className="text-gray-400"
              />

              <h3 className="mt-5 text-lg font-light">
                Your bag is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Discover something beautiful for your wardrobe.
              </p>

              <button
                onClick={onClose}
                className="mt-6 border-b border-black pb-1 text-xs uppercase tracking-[0.15em]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <div className="h-32 w-24 shrink-0 overflow-hidden bg-[#f5f5f3]">
                    <img
                      src={item.images?.[0]}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <h3 className="text-sm font-medium">
                        {item.title}
                      </h3>

                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-black">
                        <X size={15} />
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-auto flex h-9 w-24 items-center justify-between border border-gray-300">
                      <button onClick={() => decreaseQuantity(item.id)} className="flex h-full w-8 items-center justify-center">
                        <Minus size={13} />
                      </button>

                      <span className="text-xs">
                        {item.quantity}
                      </span>

                      <button onClick={() => increaseQuantity(item.id)} className="flex h-full w-8 items-center justify-center">
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>

              <span className="font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <button className="mt-6 h-14 w-full bg-black text-sm uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-80">
              Checkout
            </button>

            <button
              onClick={onClose}
              className="mt-3 h-12 w-full border border-gray-300 text-xs uppercase tracking-[0.15em]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartPage;