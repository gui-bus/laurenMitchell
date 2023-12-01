import Image from "next/image";
import React from "react";

import Consultorio from "../../../public/consultorio-01.png";

const skills: { title: string; text: string }[] = [
  {
    title: "Estética do Sorriso",
    text: "Transformação e aprimoramento estético através de tratamentos ortodônticos especializados.",
  },
  {
    title: "Inovação Digital",
    text: "Utilização de tecnologias digitais avançadas para planos de tratamento ortodôntico personalizados e precisos.",
  },
  {
    title: "Ortodontia Preventiva",
    text: "Intervenções precoces para prevenir problemas ortodônticos e promover o desenvolvimento saudável.",
  },
  {
    title: "Tratamento Invisível",
    text: "Especialização em opções estéticas para correção ortodôntica de uma maneira discreta e confortável.",
  },
];

const SkillsSection = () => {
  return (
    <section className="mb-10">
      <Image
        src={Consultorio}
        width={0}
        height={0}
        sizes="100vw"
        alt="Consultório"
        className="w-full h-72 object-cover"
      />

      <div className="bg-[#F5F5F5] w-full h-fit flex flex-col items-center justify-center py-6">
        <h2 className="font-medium text-xl">
          <span className="font-light">Especialidades da</span> Dra. Lauren
          Mitchell
        </h2>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:max-w-[80%] mx-auto">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center gap-2">
                    <h3 className="font-bold text-laurenBlue text-xl">{skill.title}</h3>
                    <p className="font-light text-sm w-full max-w-xs md:max-w-lg">{skill.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
