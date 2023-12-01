import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[90%] flex-1 flex-wrap items-center justify-around md:justify-between p-5 gap-5 md:gap-0">
      <Image
        src="/logo.png"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-44"
        priority
      />

      <button className="rounded-2xl bg-laurenBlue p-4 text-xs font-bold text-white transition-all duration-300 ease-in-out hover:bg-laurenBlue/80">
        Agendar Consulta
      </button>
    </header>
  );
};

export default Header;
