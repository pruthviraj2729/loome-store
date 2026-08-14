import React from "react";

/**
 * MenHero — category header for a menswear collection page.
 *
 * Design language: quiet tailoring. A warm stone ground, an ink/moss
 * palette borrowed from tweed and worsted wool, a soft display serif
 * for the title, and a hairline "tailor's tape" rule in place of the
 * plain divider — a measuring tape is the one object every tailor's
 * bench has in common, so it doubles as the section's signature mark.
 */
const MenHero = () => {
  return (
    <section
      style={{
        background: "#DDD7C8",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
      className="relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,440;1,9..144,440&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* faint woven texture, evokes worsted cloth without competing with type */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(45deg, #221F1B 0, #221F1B 1px, transparent 1px, transparent 7px), repeating-linear-gradient(-45deg, #221F1B 0, #221F1B 1px, transparent 1px, transparent 7px)",
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
              background: "#46503B",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#46503B",
              textTransform: "uppercase",
            }}
          >
            Collection — Menswear
          </span>
        </div>

        {/* title row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 440,
              fontOpticalSizing: "auto",
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#201E1B",
              margin: 0,
            }}
          >
            Men
          </h1>

          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 440,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#4A473E",
              maxWidth: 320,
              margin: 0,
            }}
            className="md:text-right"
          >
            Tailoring, outerwear and considered basics, cut for the season ahead.
          </p>
        </div>

        {/* signature divider — a tailor's measuring tape, in miniature */}
        <div className="relative mt-10" style={{ height: 22 }}>
          {/* baseline */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 1,
              background: "#B9B29F",
            }}
          />
          {/* fine ticks, every 8px */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 6,
              backgroundImage:
                "repeating-linear-gradient(to right, #B9B29F 0, #B9B29F 1px, transparent 1px, transparent 8px)",
            }}
          />
          {/* mid ticks, every 40px */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 12,
              backgroundImage:
                "repeating-linear-gradient(to right, #8A8471 0, #8A8471 1px, transparent 1px, transparent 40px)",
            }}
          />
          {/* long ticks, every 120px, in the accent */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 22,
              backgroundImage:
                "repeating-linear-gradient(to right, #46503B 0, #46503B 1.5px, transparent 1.5px, transparent 120px)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MenHero;