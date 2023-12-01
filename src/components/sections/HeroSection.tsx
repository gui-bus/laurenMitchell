import Image from "next/image";
import React from "react";

import Lauren from "../../../public/lauren-01.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-around my-5 gap-8">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className="uppercase text-2xl md:text-4xl font-black text-laurenBlue">
          Sorria com confiança
        </h1>
        <p className="font-light text-xl md:text-2xl w-full max-w-xs md:max-w-sm">
          Sua jornada para um sorriso perfeito começa por aqui!
        </p>
        <p className="font-light text-sm">
          DRA LAUREN MITCHELL - SÃO JOSÉ DOS CAMPOS - SP <br />
          CRO 00000 – SP
        </p>
      </div>

      <Image
        src={Lauren}
        width={400}
        height={500}
        sizes="100vw"
        alt="Dra. Lauren"
      />
    </section>
  );
};

export default HeroSection;
