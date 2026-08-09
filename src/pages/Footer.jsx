import React from "react";
import {
//   Instagram,
//   Facebook,
  ArrowUpRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <NavLink
              to="/"
              className="text-2xl font-medium tracking-[0.3em]"
            >
              LOOMÉ
            </NavLink>

            <p className="mt-6 max-w-xs text-sm leading-6 text-gray-500">
              Timeless pieces created with attention to detail,
              quality and everyday elegance.
            </p>

            {/* Social */}
            {/* <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                className="transition-opacity hover:opacity-50"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>

              <a
                href="#"
                className="transition-opacity hover:opacity-50"
              >
                <Facebook size={18} strokeWidth={1.4} />
              </a>
            </div> */}
          </div>


          {/* Shop */}
          <div>
            <h3 className="mb-6 text-[10px] uppercase tracking-[0.25em]">
              Shop
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-600">

              <NavLink
                to="/men"
                className="transition-colors hover:text-black"
              >
                Men
              </NavLink>

              <NavLink
                to="/women"
                className="transition-colors hover:text-black"
              >
                Women
              </NavLink>

              <NavLink
                to="/essentials"
                className="transition-colors hover:text-black"
              >
                Essentials
              </NavLink>

              <NavLink
                to="/head-care"
                className="transition-colors hover:text-black"
              >
                Headcare
              </NavLink>

            </div>
          </div>


          {/* Information */}
          <div>
            <h3 className="mb-6 text-[10px] uppercase tracking-[0.25em]">
              Information
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-600">

              <NavLink
                to="/about"
                className="transition-colors hover:text-black"
              >
                Who we are
              </NavLink>

              <NavLink
                to="/contact"
                className="transition-colors hover:text-black"
              >
                Contact
              </NavLink>

              <NavLink
                to="/shipping"
                className="transition-colors hover:text-black"
              >
                Shipping
              </NavLink>

              <NavLink
                to="/returns"
                className="transition-colors hover:text-black"
              >
                Returns
              </NavLink>

            </div>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-[10px] uppercase tracking-[0.25em]">
              Newsletter
            </h3>

            <p className="mb-6 text-sm leading-6 text-gray-500">
              Subscribe to receive news about new collections,
              exclusive pieces and stories from Loomé.
            </p>

            <form className="flex items-center border-b border-gray-300">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-transparent
                  py-3
                  text-sm
                  outline-none
                  placeholder:text-gray-400
                "
              />

              <button
                type="submit"
                className="group p-2"
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

            </form>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-[10px] tracking-[0.12em] text-gray-400 md:flex-row md:items-center md:justify-between md:px-10">

          <p>
            © {new Date().getFullYear()} LOOMÉ. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-6">
            <NavLink
              to="/privacy"
              className="hover:text-black"
            >
              PRIVACY
            </NavLink>

            <NavLink
              to="/terms"
              className="hover:text-black"
            >
              TERMS
            </NavLink>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;