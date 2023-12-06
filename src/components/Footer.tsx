import Image from "next/image";
import Link from "next/link";

import logo from '../../public/Logo.png'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 bg-[#F5F5F5]">
      <Image
        src={logo}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-36"
        priority
      />

      <div className="flex flex-col items-center justify-center gap-1 cursor-default select-none">
        <p className="text-xs font-light">
          &copy; {currentYear} Dra. Lauren Mitchell - Todos os direitos
          reservados.
        </p>
        <p className="text-xs font-light">
          Página desenvolvida por <Link className="transition-all duration-300 hover:text-laurenBlue" href="https://www.linkedin.com/in/gui-bus/" target="_blank">Guilherme Bustamante</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
