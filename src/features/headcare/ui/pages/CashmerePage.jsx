import React from "react";
import useHeadCareHook from "../../hooks/useHeadCareHook";

const CashmereCarePage = () => {
  const {navigate} = useHeadCareHook()
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 pt-20 md:px-10 md:pt-28">

        <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">
          Headcare / Fabric Guide
        </p>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h1 className="text-6xl font-light tracking-[-0.05em] md:text-8xl">
            Cashmere
          </h1>

          <p className="max-w-sm pb-2 text-sm leading-7 text-gray-500">
            Exceptionally soft and naturally delicate.
            With the right care, cashmere becomes a piece
            you can keep for years.
          </p>

        </div>
      </section>


      {/* ================= HERO IMAGE ================= */}
      <section className="mt-16 px-3 md:mt-20 md:px-6">

        <div className="relative aspect-[16/9] overflow-hidden bg-[#f4f3f0]">

          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSigioX5t1mclmzznU24FIjtvK_kSW-LVq5D0ulWU-UazDbdtTG2dbG0S3InbKCz2HlJ7AQCh169xfPp9U6tHlEKsuUssNDfg"
            alt="Cashmere fabric"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-6 left-6">
            <span className="bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.2em] backdrop-blur-sm">
              Cashmere
            </span>
          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">

        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          The Essential
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-light leading-tight tracking-[-0.02em] md:text-5xl">
          Treat cashmere gently and it will reward you with
          softness, warmth and lasting comfort.
        </h2>

      </section>


      {/* ================= CARE STEPS ================= */}
      <section className="border-t border-gray-200">

        {/* WASH */}
        <div className="grid border-b border-gray-200 md:grid-cols-[180px_1fr_1fr]">

          <div className="border-b border-gray-200 px-6 py-8 md:border-b-0 md:border-r">
            <span className="text-[10px] text-gray-400">
              01
            </span>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em]">
              Wash
            </p>
          </div>

          <div className="px-6 py-10 md:px-12">
            <h3 className="text-2xl font-light">
              Keep it gentle
            </h3>
          </div>

          <div className="px-6 py-10 md:px-12">
            <p className="max-w-md text-sm leading-7 text-gray-500">
              Hand wash your cashmere in cool or lukewarm water.
              Use a mild detergent designed for delicate wool.
              Avoid rubbing, twisting or stretching the garment.
            </p>
          </div>

        </div>


        {/* DRY */}
        <div className="grid border-b border-gray-200 md:grid-cols-[180px_1fr_1fr]">

          <div className="border-b border-gray-200 px-6 py-8 md:border-b-0 md:border-r">
            <span className="text-[10px] text-gray-400">
              02
            </span>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em]">
              Dry
            </p>
          </div>

          <div className="px-6 py-10 md:px-12">
            <h3 className="text-2xl font-light">
              Lay it flat
            </h3>
          </div>

          <div className="px-6 py-10 md:px-12">
            <p className="max-w-md text-sm leading-7 text-gray-500">
              Never hang wet cashmere. Gently press out excess
              water and lay the garment flat on a clean towel.
              Reshape it while damp and allow it to air dry.
            </p>
          </div>

        </div>


        {/* STORE */}
        <div className="grid border-b border-gray-200 md:grid-cols-[180px_1fr_1fr]">

          <div className="border-b border-gray-200 px-6 py-8 md:border-b-0 md:border-r">
            <span className="text-[10px] text-gray-400">
              03
            </span>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em]">
              Store
            </p>
          </div>

          <div className="px-6 py-10 md:px-12">
            <h3 className="text-2xl font-light">
              Fold, don't hang
            </h3>
          </div>

          <div className="px-6 py-10 md:px-12">
            <p className="max-w-md text-sm leading-7 text-gray-500">
              Fold cashmere neatly and store it in a cool,
              dry place. Avoid hanging it for long periods,
              as this can stretch the shoulders and change
              the shape.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CARE NOTE ================= */}
      <section className="bg-[#f5f4f1] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-4xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            A final note
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight tracking-[-0.02em] md:text-5xl">
            Cashmere doesn't need constant washing.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500">
            Allow your garment to breathe between wears.
            Airing it out is often enough to keep it fresh.
            When washing is necessary, always choose the
            gentlest method possible.
          </p>

        </div>

      </section>


      {/* ================= BACK ================= */}
      <section className="px-6 py-16 text-center">

        <button onClick={() => navigate('/headcare')} className="border-b border-black pb-2 text-[10px] uppercase tracking-[0.25em]">
          ← Back to Headcare
        </button>

      </section>

    </main>
  );
};

export default CashmereCarePage;