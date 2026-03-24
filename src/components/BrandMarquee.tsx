"use client";

const brands = [
  {
    name: "Daikin",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">DAIKIN</text>
      </svg>
    ),
  },
  {
    name: "Mitsubishi Electric",
    svg: (
      <svg viewBox="0 0 180 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1">MITSUBISHI</text>
      </svg>
    ),
  },
  {
    name: "Atlantic",
    svg: (
      <svg viewBox="0 0 130 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="1.5">ATLANTIC</text>
      </svg>
    ),
  },
  {
    name: "Heiwa",
    svg: (
      <svg viewBox="0 0 100 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" letterSpacing="1">HEIWA</text>
      </svg>
    ),
  },
  {
    name: "Ariston",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" letterSpacing="1.5">ARISTON</text>
      </svg>
    ),
  },
  {
    name: "Toshiba",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="1.5">TOSHIBA</text>
      </svg>
    ),
  },
  {
    name: "Panasonic",
    svg: (
      <svg viewBox="0 0 150 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="19" letterSpacing="1.5">PANASONIC</text>
      </svg>
    ),
  },
  {
    name: "Fujitsu",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" letterSpacing="1.5">FUJITSU</text>
      </svg>
    ),
  },
];

export default function BrandMarquee() {
  // Double the brands for seamless loop
  const items = [...brands, ...brands];

  return (
    <section className="py-12 bg-white border-y border-[#eee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#999]">
          Nos marques partenaires
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center text-[#ccc] hover:text-[#111] transition-colors duration-500 cursor-default"
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
