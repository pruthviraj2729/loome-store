import React from "react";

const panels = [
  {
    key: "man",
    title: "Men",
    copy:
      "Loome's men's collections range from refined elegance to everyday comfort. Each piece is the result of ongoing research and experimentation, with a particular focus on quality and creative treatments. A Made in India concept for the man who appreciates details and versatility.",
    image:
      "https://www.robertocollina.com/cdn/shop/files/Collina_SS26_28_3.jpg?v=1782831671&width=3840",
    position: "center 25%",
    href: "/men",
  },
  {
    key: "woman",
    title: "Women",
    copy:
      "Crafted with intention, Loome brings together timeless design and a modern perspective. Each piece is selected for its refined character, thoughtful details, and effortless versatility — creating a wardrobe made to move naturally through everyday life.",
    image:
      "https://www.robertocollina.com/cdn/shop/files/Collina_SS26_28_HOME.jpg?v=1782831672&width=3840",
    position: "center 20%",
    href: "/women",
  },
];

const HeroSection = () => {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      {panels.map((panel) => (
        <div
          key={panel.key}
          className="
            group
            relative
            h-[70vh]
            min-h-[550px]
            overflow-hidden
            md:h-[75vh]
            lg:h-[80vh]
          "
        >
          <img
            src={panel.image}
            alt={`Loome ${panel.title.toLowerCase()} collection`}
            style={{
              objectPosition: panel.position,
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              motion-reduce:transition-none
              group-hover:scale-105
            "
          />

          {/* TEXT */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              flex
              justify-start
              p-8
              md:p-12
            "
          >
            <div
              className="
                grid
                max-w-3xl
                grid-cols-[auto_1fr]
                gap-x-10
                gap-y-8
                text-white
                [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]
              "
            >
              <h2
                className="
                  col-start-1
                  row-start-1
                  whitespace-nowrap
                  text-2xl
                  font-light
                  md:text-3xl
                "
              >
                {panel.title}
              </h2>

              <p
                className="
                  col-start-2
                  row-start-1
                  row-span-2
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-white/90
                "
              >
                {panel.copy}
              </p>

              <a
                href={panel.href}
                className="
                  col-start-1
                  row-start-2
                  self-end
                  text-sm
                  underline-offset-4
                  hover:underline
                  focus-visible:outline
                  focus-visible:outline-1
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                See All
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;

