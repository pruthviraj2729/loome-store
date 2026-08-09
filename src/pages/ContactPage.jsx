import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import JoinCommunity from "../shared/ui/components/JoinCommunity";

const ContactPage = () => {
  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 pt-24 pb-20 md:px-12 md:pt-32 md:pb-28">

        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.05] md:text-7xl">
            Let's start
            <br />
            a conversation.
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-gray-500">
            Whether you have a question about an order, our collections,
            or simply want to know more about LOOMÉ, we'd love to hear
            from you.
          </p>

        </div>

      </section>


      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="border-t border-gray-200">

        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

          {/* ================= INFORMATION ================= */}
          <div className="border-b border-gray-200 px-6 py-16 md:border-b-0 md:border-r md:px-12 md:py-24">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Get in touch
            </p>

            <div className="mt-12 space-y-10">

              {/* Email */}
              <div className="flex gap-5">

                <Mail
                  size={20}
                  strokeWidth={1.2}
                  className="mt-1"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em]">
                    Email
                  </p>

                  <a
                    href="mailto:hello@loome.com"
                    className="mt-3 block text-sm text-gray-500 transition hover:text-black"
                  >
                    hello@loome.com
                  </a>
                </div>

              </div>


              {/* Phone */}
              <div className="flex gap-5">

                <Phone
                  size={20}
                  strokeWidth={1.2}
                  className="mt-1"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em]">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="mt-3 block text-sm text-gray-500 transition hover:text-black"
                  >
                    +91 99999 99999
                  </a>
                </div>

              </div>


              {/* Address */}
              <div className="flex gap-5">

                <MapPin
                  size={20}
                  strokeWidth={1.2}
                  className="mt-1"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em]">
                    Studio
                  </p>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                    LOOMÉ Studio
                    <br />
                    24 Design District
                    <br />
                    Mumbai, India
                  </p>
                </div>

              </div>

            </div>


            {/* Social */}
            <div className="mt-16 border-t border-gray-200 pt-8">

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Follow us
              </p>

              <div className="mt-5 flex gap-6 text-xs uppercase tracking-[0.15em]">

                <a
                  href="#"
                  className="border-b border-transparent pb-1 transition hover:border-black"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="border-b border-transparent pb-1 transition hover:border-black"
                >
                  Pinterest
                </a>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <div className="px-6 py-16 md:px-12 md:py-24">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Send us a message
            </p>

            <form className="mt-12 space-y-10">

              {/* Name */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-4
                    w-full
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-black
                  "
                />
              </div>


              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    mt-4
                    w-full
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-black
                  "
                />
              </div>


              {/* Subject */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em]">
                  Subject
                </label>

                <select
                  className="
                    mt-4
                    w-full
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    outline-none
                    focus:border-black
                  "
                >
                  <option>General enquiry</option>
                  <option>Order support</option>
                  <option>Product information</option>
                  <option>Wholesale</option>
                  <option>Collaboration</option>
                </select>
              </div>


              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em]">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us how we can help..."
                  className="
                    mt-4
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-black
                  "
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-black
                  pb-2
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                "
              >
                Send message

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
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

      </section>


      {/* ================= HOURS ================= */}
      <section className="border-t border-gray-200">

        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

          <div className="px-6 py-16 md:px-12 md:py-20">

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Studio hours
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-600">

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span>Monday — Friday</span>
                <span>10:00 — 18:00</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span>Saturday</span>
                <span>11:00 — 16:00</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

            </div>

          </div>


          <div className="flex items-center border-t border-gray-200 px-6 py-16 md:border-t-0 md:border-l md:px-12">

            <p className="max-w-md text-2xl font-light leading-tight md:text-3xl">
              Good things begin with a simple
              <span className="italic"> hello.</span>
            </p>

          </div>

        </div>

      </section>


      {/* ================= COMMUNITY ================= */}
      <JoinCommunity />

    </div>
  );
};

export default ContactPage;