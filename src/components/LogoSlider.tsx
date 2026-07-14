import React from "react";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const LOGOS: Logo[] = [
  { id: 1, src: "/logo/barriere.webp", alt: "barriere" },
  { id: 2, src: "/logo/canal-plus.webp", alt: "canal-plus" },
  { id: 3, src: "/logo/cartier.webp", alt: "cartier" },
  { id: 4, src: "/logo/cheval-blanc.webp", alt: "cheval-blanc" },
  { id: 5, src: "/logo/chopard.webp", alt: "chopard" },
  { id: 6, src: "/logo/dior.webp", alt: "dior" },
  { id: 7, src: "/logo/loewe.webp", alt: "loewe" },
  { id: 8, src: "/logo/netflix.webp", alt: "netflix" },
  { id: 9, src: "/logo/redbull.webp", alt: "redbull" },
];

export const SliderInfini: React.FC = () => {
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="w-full overflow-hidden py-5 flex items-center">
      <div className="flex w-max animate-slide-left">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 w-[200px] h-[100px] mx-[15px] flex justify-center items-center border rounded-[12px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-[80%] max-h-[60%] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderInfini;
