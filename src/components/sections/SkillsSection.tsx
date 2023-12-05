import Image from "next/image";
import React from "react";

import Consultorio from "../../../public/consultorio-01.jpg";

const skills: { title: string; text: string }[] = [
  {
    title: "Inovação Digital",
    text: "Utilização de tecnologias avançadas para criar planos de tratamento personalizados.",
  },
  {
    title: "Ortodontia Preventiva",
    text: "Intervenções precoces para prevenir problemas ortodônticos.",
  },
  {
    title: "Tratamento Discreto",
    text: "Especialização em opções estéticas para correção de forma discreta e confortável.",
  },
  {
    title: "Cuidado Infantil",
    text: "Atendimento especializado crianças, garantindo um sorriso saudável.",
  },
  {
    title: "Harmonia Maxilar",
    text: "Abordagem que visa precisamente corrigir desarmonias na posição dos maxilares.",
  },
  {
    title: "Integração Cirúrgica",
    text: "Colaboração com cirurgiões bucomaxilofaciais para casos cirúrgicos.",
  },
];

const SkillsSection = () => {
  return (
    <section className="mb-10 w-full max-w-[90%] mx-auto">
      <Image
        src={Consultorio}
        width={0}
        height={0}
        sizes="100vw"
        alt="Consultório"
        className="w-full h-full max-h-44 md:max-h-72 object-cover rounded-t-3xl"
      />

      <div className="bg-[#F5F5F5] w-full h-fit flex flex-col items-center justify-center py-10 rounded-b-3xl">
        <h2 className="font-semibold text-xl md:text-2xl text-center">
          <span className="font-light">Especialidades da</span> Dra. Lauren
          Mitchell
        </h2>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[90%] lg:w-[60rem] mx-auto ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2 w-full max-w-xs md:max-w-none mx-auto"
            >
              <h3 className="font-bold text-laurenBlue text-xl">
                {skill.title}
              </h3>
              <p className="font-light text-sm lg:px-20 ">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
