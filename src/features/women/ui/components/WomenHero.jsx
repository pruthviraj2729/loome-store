import React from "react";

const WomenHero = () => {
  return (
    <section
      style={{
        background: "#F3EAE4",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
      className="relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,380;1,9..144,380;1,9..144,480&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* faint dotted lace texture, softer than the menswear cross-hatch */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "radial-gradient(#3A322E 0.6px, transparent 0.6px)",
          backgroundSize: "14px 14px",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14 md:px-12 md:pt-28 md:pb-16">
        {/* eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#A6635C",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#A6635C",
              textTransform: "uppercase",
            }}
          >
            Collection — Women
          </span>
        </div>

        {/* title row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 380,
              fontOpticalSizing: "auto",
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#3A322E",
              margin: 0,
            }}
          >
            Women
          </h1>

          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "normal",
              fontWeight: 380,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#7A6D66",
              maxWidth: 320,
              margin: 0,
            }}
            className="md:text-right"
          >
            Soft tailoring, easy dresses, and fabrics that move with the day.
          </p>
        </div>

        {/* signature divider — a hand-stitched thread line, tied off at the start */}
        <div className="relative mt-10" style={{ height: 22 }}>
          {/* the running stitch itself, sitting slightly above the baseline */}
          <svg
            aria-hidden="true"
            width="100%"
            height="22"
            preserveAspectRatio="none"
            style={{ position: "absolute", left: 0, bottom: 0 }}
          >
            <line
              x1="0"
              y1="11"
              x2="100%"
              y2="11"
              stroke="#C08D84"
              strokeWidth="1.5"
              strokeDasharray="1.5 9"
              strokeLinecap="round"
            />
          </svg>

          {/* the knot: two small loops of thread tied off at the left edge */}
          <svg
            aria-hidden="true"
            width="26"
            height="22"
            style={{ position: "absolute", left: 0, bottom: 0 }}
          >
            <circle
              cx="6"
              cy="11"
              r="5"
              fill="none"
              stroke="#A6635C"
              strokeWidth="1.5"
            />
            <circle
              cx="9"
              cy="9"
              r="4"
              fill="none"
              stroke="#A6635C"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WomenHero;