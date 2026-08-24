import React from "react";
import useHomeSectionHook from "../hooks/useHomeSectionHook";

const Home = () => {
    const {navigate} = useHomeSectionHook()
  return (
    <main className="bg-[#f7f6f2] text-[#171717]">

      {/* ================= BRAND INTRO ================= */}
      <section className="px-6 py-32 md:px-12 lg:py-44">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-neutral-500">
            LOOME
          </p>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl lg:text-6xl">
            Modern essentials,
            <br />
            thoughtfully made.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
            Discover timeless pieces designed for everyday living.
            Refined silhouettes, considered details and effortless style.
          </p>

          <button onClick={() => navigate('/essentials')} className="mt-10 border-b border-black pb-2 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50">
            Explore Collection
          </button>

        </div>
      </section>


      {/* ================= FEATURED COLLECTION ================= */}
      <section className="px-6 md:px-12">

        <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
              alt="Loome collection"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center bg-[#e9e7e1] px-8 py-20 text-center">

            <div className="max-w-md">

              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-neutral-500">
                The Women New Edit
              </p>

              <h2 className="text-4xl font-light tracking-tight md:text-5xl">
                Crafted for
                <br />
                everyday living.
              </h2>

              <p className="mt-7 text-sm leading-7 text-neutral-500">
                Carefully selected pieces that balance comfort,
                simplicity and contemporary design.
              </p>

              <button onClick={() => navigate('/women')} className="mt-9 border-b border-black pb-2 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50">
                Discover
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="px-6 py-32 md:px-12 lg:py-40">

        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-neutral-500">
              Explore
            </p>

            <h2 className="text-3xl font-light md:text-5xl">
              Shop by category
            </h2>
          </div>

 

        </div>


        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Men */}
          <div onClick={() => navigate('/men')} className="group relative h-[550px] overflow-hidden cursor-pointer">

            <img
              src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=80"
              alt="Men"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light">
                Men
              </h3>

              <span onClick={() => navigate('/men')} className="mt-3 inline-block border-b border-white pb-1 text-xs tracking-[0.2em] uppercase">
                Shop now
              </span>
            </div>

          </div>


          {/* Women */}
          <div onClick={() => navigate('/women')} className="group relative h-[550px] overflow-hidden cursor-pointer">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
              alt="Women"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light">
                Women
              </h3>

              <span onClick={() => navigate('/women')} className="mt-3 inline-block border-b border-white pb-1 text-xs tracking-[0.2em] uppercase">
                Shop now
              </span>
            </div>

          </div>


          {/* Knitwear */}
          <div onClick={() => navigate('/knitewear')}  className="group relative h-[450px] overflow-hidden cursor-pointer">

            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=80"
              alt="Knitwear"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light">
                Knitwear
              </h3>

              <span onClick={() => navigate('/knitewear')} className="mt-3 inline-block border-b border-white pb-1 text-xs tracking-[0.2em] uppercase">
                Explore
              </span>
            </div>

          </div>


          {/* New In */}
          <div onClick={() => navigate('/new')} className="group relative h-[450px] overflow-hidden cursor-pointer">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80"
              alt="New collection"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light">
                New In
              </h3>

              <span onClick={() => navigate('/new')} className="mt-3 inline-block border-b border-white pb-1 text-xs tracking-[0.2em] uppercase">
                Discover
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      {/* <section className="bg-white px-6 py-32 md:px-12 lg:py-40">

        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-neutral-500">
              Selected pieces
            </p>

            <h2 className="text-3xl font-light md:text-5xl">
              Featured products
            </h2>
          </div>

          <button className="hidden border-b border-black pb-1 text-xs tracking-[0.2em] uppercase md:block">
            View all
          </button>

        </div>


        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4">

          {[
            {
              name: "Relaxed Knit Sweater",
              price: "₹4,999",
              image:
                "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80",
            },
            {
              name: "Cashmere Cardigan",
              price: "₹6,499",
              image:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
            },
            {
              name: "Classic Wool Shirt",
              price: "₹5,299",
              image:
                "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
            },
            {
              name: "Cotton Pullover",
              price: "₹3,999",
              image:
                "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=80",
            },
          ].map((product) => (
            <div key={product.name} className="group cursor-pointer">

              <div className="aspect-[3/4] overflow-hidden bg-neutral-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-5 flex items-start justify-between gap-3">

                <div>
                  <h3 className="text-sm">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {product.price}
                  </p>
                </div>

                <button className="text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  +
                </button>

              </div>

            </div>
          ))}

        </div> */}


        {/* <div className="mt-16 text-center">

          <button className="border-b border-black pb-2 text-xs tracking-[0.2em] uppercase">
            View all products
          </button>

        </div>

      </section> */}


      {/* ================= CAMPAIGN ================= */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=2000&q=80"
          alt="Loome campaign"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">

          <div>

            <p className="mb-5 text-xs tracking-[0.35em] uppercase">
              Autumn / Winter 2026
            </p>

            <h2 className="text-5xl font-light tracking-tight md:text-7xl">
              The new Loome
            </h2>

            <button onClick={() => navigate('/antum')} className="mt-10 border-b border-white pb-2 text-xs tracking-[0.2em] uppercase cursor-pointer">
              Discover collection
            </button>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="px-6 py-32 md:px-12 lg:py-44">

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-xs tracking-[0.3em] uppercase text-neutral-500">
              Our philosophy
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Less,
              <br />
              but better.
            </h2>
          </div>

          <div className="max-w-md">

            <p className="text-base leading-8 text-neutral-500">
              We believe clothing should feel effortless, timeless
              and personal. Every piece is selected with simplicity,
              quality and everyday comfort in mind.
            </p>

            <button onClick={() => navigate('about')} className="mt-10 border-b border-black pb-2 text-xs tracking-[0.2em] uppercase cursor-pointer">
              Our story
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;