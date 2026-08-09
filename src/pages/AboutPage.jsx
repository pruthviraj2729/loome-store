import React from "react";
import { ArrowUpRight } from "lucide-react";
import JoinCommunity from "../shared/ui/components/JoinCommunity";
import hero from '../assets/hero.png'
import today from '../assets/today.png'
import thinkBig from '../assets/thinkBig.png'
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">

        <img
          src={hero}
          alt="Loomé"
          className="absolute inset-0 h-full w-full object-cover object-[right_0%] translate-x-2"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-end px-6 pb-12 md:px-12 md:pb-16">

          <div className="max-w-3xl text-white">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em]">
              About Loomé
            </p>

            <h1 className="text-5xl font-light leading-none md:text-7xl">
              Made with purpose.
              <br />
              Designed to last.
            </h1>

          </div>

        </div>

      </section>


      {/* ================= ABOUT US ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">

        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              About us
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-light leading-tight md:text-5xl">
              A brand built around people, craft and ideas.
            </h2>
          </div>

          <div className="max-w-lg text-sm leading-7 text-gray-600">
            <p>
              Loomé was created with a simple belief: clothing should
              feel personal. It should become part of the way we live,
              move and express ourselves.
            </p>

            <p className="mt-6">
              We combine contemporary design with thoughtful details,
              carefully considered materials and a respect for the
              people who bring every piece to life.
            </p>

            <p className="mt-6">
              Our collections are designed to move beyond seasons and
              trends, creating pieces that remain relevant year after
              year.
            </p>
          </div>

        </div>

      </section>


      {/* ================= YEARS OF EXCELLENCE ================= */}
      <section className="border-y border-gray-200">

        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">

          <div className="border-b border-gray-200 p-8 md:border-b-0 md:border-r md:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Years
            </p>

            <p className="mt-6 text-7xl font-light">
              25
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Years of excellence
            </p>

          </div>


          <div className="border-b border-gray-200 p-8 md:border-b-0 md:border-r md:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Collections
            </p>

            <p className="mt-6 text-7xl font-light">
              100+
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Collections created
            </p>

          </div>


          <div className="p-8 md:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Philosophy
            </p>

            <p className="mt-6 text-7xl font-light">
              01
            </p>

            <p className="mt-3 text-sm text-gray-500">
              One vision, constantly evolving
            </p>

          </div>

        </div>

      </section>


      {/* ================= BRAND HISTORY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">

        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Our history
            </p>

            <h2 className="mt-6 text-4xl font-light md:text-5xl">
              From an idea
              <br />
              to a way of life.
            </h2>
          </div>


          <div className="space-y-12">

            <div>
              <span className="text-xs text-gray-400">
                2001
              </span>

              <h3 className="mt-3 text-xl font-light">
                The beginning
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Loomé begins with a small team and a big ambition:
                create clothing that brings together craftsmanship
                and contemporary design.
              </p>
            </div>


            <div>
              <span className="text-xs text-gray-400">
                2010
              </span>

              <h3 className="mt-3 text-xl font-light">
                Growing with purpose
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                New collections, new ideas and new perspectives
                expand the Loomé world while keeping the original
                values at its core.
              </p>
            </div>


            <div>
              <span className="text-xs text-gray-400">
                2020
              </span>

              <h3 className="mt-3 text-xl font-light">
                A new generation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Loomé evolves for a new generation while continuing
                to value quality, creativity and timeless design.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TODAY ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        <div className="relative min-h-[600px]">

          <img
            src={today}
            alt="Loomé today"
            className="absolute inset-0 h-full w-full object-contain"
          />

        </div>


        <div className="flex items-center px-8 py-20 md:px-16">

          <div className="max-w-lg">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Today
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
              Looking forward
              <br />
              without forgetting
              <br />
              where we came from.
            </h2>

            <p className="mt-8 text-sm leading-7 text-gray-600">
              Today, Loomé continues to explore the relationship
              between tradition and modernity. We work with designers,
              makers and creative minds who share our curiosity and
              our desire to make something meaningful.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-12 md:py-36">

        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
          Our philosophy
        </p>

        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
          We believe the best design is not about
          <span className="italic"> more.</span>
          <br />
          It's about making every detail matter.
        </h2>

      </section>


      {/* ================= THINK BIG ================= */}
      <section className="relative min-h-[650px] overflow-hidden">

        <img
          src={thinkBig}
          alt="Think big"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em]">
              Our mindset
            </p>

            <h2 className="mt-6 text-6xl font-light md:text-9xl">
              THINK BIG.
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-6">
              Question the expected. Explore the unknown.
              Create without limits. We believe progress begins
              when you dare to imagine something different.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CLOSING ================= */}
      <section className="px-6 py-24 text-center md:py-32">

        <p className="mx-auto max-w-3xl text-3xl font-light leading-tight md:text-5xl">
          We are still creating.
          <br />
          Still exploring.
          <br />
          Still thinking bigger.
        </p>

        <button className="group mt-10 inline-flex items-center gap-3 border-b border-black pb-2 text-[10px] uppercase tracking-[0.25em] cursor-pointer">

          <NavLink to={'/'}>
            Discover Loomé
          </NavLink>

          <ArrowUpRight
            size={15}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />

        </button>

      </section>


      {/* <JoinCommunity /> */}

    </div>
  );
};

export default AboutPage;