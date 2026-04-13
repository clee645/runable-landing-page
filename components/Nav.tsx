import Image from "next/image";

export default function Nav() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Ranks", href: "#ranks" },
    { label: "Reviews", href: "#reviews" },
  ];
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="w-full max-w-5xl flex items-center justify-between gap-5 md:gap-12 pl-4 pr-2 md:pl-8 md:pr-3 py-2.5 md:py-3 rounded-full backdrop-blur-md"
        style={{
          background: "rgba(20, 20, 20, 0.72)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <a href="#" className="flex items-center gap-3 pr-2">
          <Image
            src="/logo-red.png"
            alt="Runable"
            width={40}
            height={40}
            className="w-9 h-9 md:w-10 md:h-10 object-contain"
            priority
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight">Runable</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[16px] text-white/75">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="text-[15px] md:text-[16px] font-semibold px-5 md:px-7 py-2.5 md:py-3 rounded-full text-white"
          style={{ background: "#FF585D" }}
        >
          Try for free
        </a>
      </nav>
    </div>
  );
}
