import React from "react";
import { ArrowUpRight } from "lucide-react";

const JoinCommunity = () => {
  return (
    <section className="w-full border-t border-gray-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:py-28">

        {/* Small heading */}
        <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-gray-500">
          Stay connected
        </p>

        {/* Main heading */}
        <h2 className="text-3xl font-light tracking-wide md:text-5xl">
          Join our community
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-lg text-sm leading-6 text-gray-600">
          Discover new collections, exclusive pieces and stories from
          our world. Follow us and become part of the community.
        </p>

        <input
            type="email"
            placeholder="Enter your email"
            className="
                w-72
                border-0
                border-b
                border-black
                bg-transparent
                px-2
                py-3
                text-center
                text-sm
                outline-none
                placeholder:text-gray-500
                focus:border-black
            "
        />

        {/* Button */}
        <button
          className="
            group
            mt-10
            flex
            items-center
            gap-3
            border-b
            border-black
            pb-2
            text-[11px]
            uppercase
            tracking-[0.25em]
            transition-opacity
            hover:opacity-50
          "
        >
          Join community

          <ArrowUpRight
            size={15}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

      </div>

    </section>
  );
};

export default JoinCommunity;