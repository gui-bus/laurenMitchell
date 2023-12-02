import Image from "next/image";
import React from "react";

import Consultorio from "../../../public/consultorio-02.png";
import { BsFillPatchCheckFill } from "react-icons/bs";

const items: { title: string; text: string }[] = [
  {
    title: "Ambiente Acolhedor",
    text: "Projetada para proporcionar aos pacientes uma atmosfera acolhedora e reconfortante.",
  },
  {
    title: "Tecnologia de Ponta",
    text: "Equipada com tecnologia de última geração, para melhor atender nossos pacientes.",
  },
  {
    title: "Abordagem Personalizada",
    text: "O plano de tratamento é cuidadosamente adaptado às necessidades individuais.",
  },
  {
    title: "Pós-Tratamento Excepcional",
    text: "A Dra. Lauren está sempre disponível para responder a dúvidas e fornecer orientações.",
  },
  {
    title: "Agendamento Flexível",
    text: "Oferecemos flexibilidade para garantir que nossos horários atendam às suas necessidades.",
  },
];

const ClinicSection = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto">
      <div className="mb-10 bg-[#F5F5F5] flex flex-col lg:flex-row items-center justify-around py-10 px-5 rounded-3xl gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-light text-2xl md:text-4xl text-center mb-5">
            Conheça melhor a Clínica
          </h2>
          <div className="flex flex-col items-start justify-start py-6 gap-6">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-center gap-6 p-2 w-full max-w-md"
                key={index}
              >
                <span>
                  <BsFillPatchCheckFill size={70} className="text-laurenBlue" />
                </span>

                <div className="flex flex-col items-start justify-start gap-1 w-full">
                  <h3 className=" md:text-xl font-medium">{item.title}</h3>
                  <p className="font-light text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={Consultorio}
          width={0}
          height={0}
          sizes="100vw"
          alt="Consultório"
          className="w-full lg:max-w-[50%] h-full object-cover md:px-10 lg:px-0"
        />
      </div>
    </section>
  );
};

export default ClinicSection;
