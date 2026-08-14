import React from "react";

const EssentialsHero = () => {
  return (
    <section
      style={{
        background: "#E8E3D6",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
      className="relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,420&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* faint woven ground, plain-weave rather than herringbone or lace — the neutral base cloth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(0deg, #2B2A27 0, #2B2A27 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, #2B2A27 0, #2B2A27 1px, transparent 1px, transparent 6px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14 md:px-12 md:pt-28 md:pb-16">
        {/* eyebrow — tonal, no accent hue */}
        <div className="mb-7 flex items-center gap-3">
          <span
            style={{
              width: 5,
              height: 5,
              background: "#2B2A27",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#5C5A52",
              textTransform: "uppercase",
            }}
          >
            The Basics — Essentials
          </span>
        </div>

        {/* title row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 340,
              fontOpticalSizing: "auto",
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#2B2A27",
              margin: 0,
            }}
          >
            Essentials
          </h1>

          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 340,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#6B685F",
              maxWidth: 320,
              margin: 0,
            }}
            className="md:text-right"
          >
            The pieces you reach for first — kept simple, made to last.
          </p>
        </div>

        {/* signature divider — the folded edge of a stack of tees, seen side-on */}
        <div className="relative mt-10" style={{ height: 22 }}>
          {/* baseline: the shelf the stack sits on */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 1.5,
              background: "#2B2A27",
            }}
          />
          {/* three folded layers, each a little lighter, receding upward */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: "6%",
              bottom: 5,
              height: 1,
              background: "#7A7669",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: "16%",
              bottom: 10,
              height: 1,
              background: "#9A9689",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: "30%",
              bottom: 15,
              height: 1,
              background: "#B9B5A7",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EssentialsHero;