import React from 'react';

interface Logo {
    id: number;
    src: string;
    alt: string;
}

const LOGOS: Logo[] = [
    { id: 1, src: '/logo/barriere.png', alt: "barriere" },
    { id: 2, src: '/logo/canal-plus.png', alt: 'canal-plus' },
    { id: 3, src: '/logo/cartier.png', alt: 'cartier' },
    { id: 4, src: '/logo/cheval-blanc.png', alt: 'cheval-blanc' },
    { id: 5, src: '/logo/chopard.png', alt: 'chopard' },
    { id: 6, src: '/logo/dior.png', alt: 'dior' },
    { id: 7, src: '/logo/loewe.png', alt: 'loewe' },
]

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