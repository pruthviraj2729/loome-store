import React from "react";
import useHeadCareHook from "../../hooks/useHeadCareHook";
import { Outlet } from "react-router-dom";

const HeadcarePage = () => {
  const {navigate} = useHeadCareHook()
  const careGuides = [
    {
      title: "Cashmere",
      description: "Softness that deserves a little extra care.",
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSigioX5t1mclmzznU24FIjtvK_kSW-LVq5D0ulWU-UazDbdtTG2dbG0S3InbKCz2HlJ7AQCh169xfPp9U6tHlEKsuUssNDfg',
      path: '/headcare/cashmere'
    },
    {
      title: "Wool",
      description: "Keep your knitwear warm, soft and beautifully shaped.",
      image: 'https://bendigowoollenmills.com.au/cdn/shop/files/wollemi_2026.png?v=1784079803&width=3840'
    },
    {
      title: "Cotton",
      description: "Simple care for everyday pieces that last.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQST_LNPJI-CSvzt5SyDi6_ZyQ5c9RJL11eLCTSvCkFRQv3JiOIdbYbrJU&s=10'
    },
    {
      title: "Linen",
      description: "Preserve the natural character of your linen.",
      image: 'https://theremnantwarehouse.com/media/magefan_blog/Linen_Fabrics.jpg'
    },
    {
      title: "Silk",
      description: "Gentle care for delicate and refined fabrics.",
      image: 'https://green-tailor.com/wp-content/uploads/2024/03/satin-80-silk-fabric.jpg'
    },
    {
      title: "Merino",
      description: "Maintain the softness and structure of your knitwear.",
      image: 'https://green-tailor.com/wp-content/uploads/2025/06/merino-wool.webp'
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="px-6 pt-24 pb-24 text-center md:pt-32 md:pb-32">
        <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-gray-400">
          LOOMÉ CARE GUIDE
        </p>

        <h1 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
          Headcare
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-gray-500">
          Thoughtful care for the pieces you keep.
          Discover simple rituals that help your garments
          preserve their softness, shape and character.
        </p>
      </section>

      {/* Care Guides */}
      <section className="px-4 pb-24 md:px-8">

        <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-5">
          <h2 className="text-xs uppercase tracking-[0.2em]">
            Fabric Care
          </h2>

          <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
            06 Guides
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {careGuides.map((guide, index) => (
            <article key={guide.title} className="group">

              {/* Image */}
              <div 
                onClick={() => navigate(guide.path)}
                className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-[10px] tracking-wider text-white">
                  0{index + 1}
                </span>

                {/* Arrow */}
                <span className="absolute right-5 top-5 text-sm text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                {/* Image title */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-light tracking-tight">
                    {guide.title}
                  </h3>
                </div>

              </div>

              {/* Description */}
              <div className="flex items-start justify-between pt-4">

                <p className="max-w-sm text-xs leading-6 text-gray-500">
                  {guide.description}
                </p>

                <button className="shrink-0 border-b border-black pb-1 text-[9px] uppercase tracking-[0.2em]">
                  Discover
                </button>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* Bottom Message */}
      <section className="border-t border-gray-200 px-6 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Care for what you wear
        </p>

        <h2 className="mx-auto mt-5 max-w-xl text-3xl font-light leading-tight tracking-[-0.02em] md:text-4xl">
          Good garments become better with time.
        </h2>
      </section>


      <Outlet/>
    </main>

    
  );
};

export default HeadcarePage;