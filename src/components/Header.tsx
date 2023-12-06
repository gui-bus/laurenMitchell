import Image from "next/image";
import { LuCalendarClock } from "react-icons/lu";

import logo from '../../public/Logo.png'

const Header = () => {
  return (
    <header className="mx-auto flex w-full md:max-w-[70%] flex-1 flex-wrap items-center justify-around md:justify-between p-4 gap-5 md:gap-0 mb-5">
      <Image
        src={logo}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-44"
        priority
      />

      <button className="rounded-2xl bg-laurenBlue md:w-full md:max-w-xs p-4 text-xs font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80 flex items-center justify-center gap-2">
        Agendar Consulta <LuCalendarClock size={24} />
      </button>
    </header>
  );
};

export default Header;
