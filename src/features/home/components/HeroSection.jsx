import React from "react";

const panels = [
  {
    key: "man",
    title: "Uomo",
    copy:
      "Loome's men's collections range from refined elegance to everyday comfort. Each piece is the result of ongoing research and experimentation, with a particular focus on quality and creative treatments. A Made in India concept for the man who appreciates details and versatility.",
      image:
      "https://www.robertocollina.com/cdn/shop/files/Collina_SS26_28_3.jpg?v=1782831671&width=3840",
    href: "/collections/uomo",
  },
  {
    key: "woman",
    title: "Donna",
    copy:
      "Tradizione artigianale e visione contemporanea s'intrecciano in ogni capo delle collezioni donna Roberto Collina. L'attenzione al dettaglio e una costante rilettura degli elementi classici raccontano una femminilità raffinata e consapevole nel segno di un Made in Italy di qualità senza tempo.",
    image:
      "https://www.robertocollina.com/cdn/shop/files/Collina_SS26_28_HOME.jpg?v=1782831672&width=3840",
    href: "/collections/donna",
  },
];

const HeroSection = () => {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      {panels.map((panel) => (
        <div
          key={panel.key}
          className="group relative h-[80vh] min-h-[500px] overflow-hidden"
        >
          <img
            src={panel.image}
            alt={`Roberto Collina ${panel.title.toLowerCase()} collection`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-105"
          />

          {/* Text block, upper third, no scrim — relies on the photo's own tonal headroom */}
          <div className="absolute inset-x-0 top-0 flex justify-start p-8 md:p-12">
            <div className="grid max-w-3xl grid-cols-[auto_1fr] gap-x-10 gap-y-8 text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
              <h2 className="col-start-1 row-start-1 whitespace-nowrap text-2xl font-light md:text-3xl">
                {panel.title}
              </h2>

              <p className="col-start-2 row-start-1 row-span-2 max-w-sm text-sm leading-relaxed text-white/90">
                {panel.copy}
              </p>

              <a
                href={panel.href}
                className="col-start-1 row-start-2 self-end text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Vedi tutto
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;

// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="w-full grid grid-cols-1 md:grid-cols-2">

//       {/* MEN */}
//       <div className="relative h-[80vh] min-h-[600px] overflow-hidden group">

//         <img
//           src="https://www.robertocollina.com/cdn/shop/files/Collina_SS26_28_3.jpg?v=1782831671&width=3840"
//           alt="Men collection"
//           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Content */}
//         <div className="absolute inset-0 z-10 text-white p-8 md:p-12">

//           <h2 className="text-3xl md:text-4xl font-light">
//             Man
//           </h2>

//           <div className="mt-6 max-w-md ml-auto mr-8 md:mr-20">
//             <p className="text-sm md:text-base leading-6">
//               Roberto Collina's men's collections range from refined
//               elegance to everyday comfort. Each piece is the result of
//               ongoing research and experimentation, with a particular
//               focus on quality and creative treatments.
//             </p>
//           </div>

//           <button className="absolute bottom-12 left-8 md:left-12 text-sm group/link">
//             See all

//             <span className="block mt-1 h-[1px] w-full bg-white origin-left transition-transform duration-300 group-hover/link:scale-x-50" />
//           </button>

//         </div>
//       </div>


//       {/* WOMEN */}
//       <div className="relative h-[80vh] min-h-[600px] overflow-hidden group">

//         <img
//           src="/images/hero/women.jpg"
//           alt="Women collection"
//           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Content */}
//         <div className="absolute inset-0 z-10 text-white p-8 md:p-12">

//           <h2 className="text-3xl md:text-4xl font-light">
//             Woman
//           </h2>

//           <div className="mt-6 max-w-md ml-auto mr-8 md:mr-20">
//             <p className="text-sm md:text-base leading-6">
//               Artisanal tradition and a contemporary vision intertwine
//               in every piece of the Roberto Collina women's collections.
//               Attention to detail and a constant reinterpretation of
//               classic elements convey a refined and confident femininity.
//             </p>
//           </div>

//           <button className="absolute bottom-12 left-8 md:left-12 text-sm group/link">
//             See all

//             <span className="block mt-1 h-[1px] w-full bg-white origin-left transition-transform duration-300 group-hover/link:scale-x-50" />
//           </button>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default HeroSection;