"use client";

const brands = ["DAIKIN", "MITSUBISHI", "ATLANTIC", "HEIWA", "ARISTON", "TOSHIBA", "PANASONIC", "FUJITSU"];

export default function BrandMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="py-8 bg-white border-y border-[#eee] overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee-fast">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 text-sm font-bold tracking-[0.15em] text-[#ccc] hover:text-[#111] transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
