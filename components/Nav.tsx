"use client";

import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Ranks", href: "#ranks" },
    { label: "Reviews", href: "#reviews" },
  ];
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="w-full max-w-5xl flex items-center justify-between gap-5 md:gap-12 pl-4 pr-2 md:pl-8 md:pr-3 py-2.5 md:py-3 rounded-[28px] md:rounded-full backdrop-blur-md relative"
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
          className="hidden md:inline-flex text-[15px] md:text-[16px] font-semibold px-5 md:px-7 py-2.5 md:py-3 rounded-full text-white"
          style={{ background: "#FF585D" }}
        >
          Try for free
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-white/80 hover:text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>

        {open && (
          <div
            className="md:hidden absolute left-0 right-0 top-full mt-2 rounded-2xl backdrop-blur-md p-3 flex flex-col gap-1"
            style={{
              background: "rgba(20, 20, 20, 0.92)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-[16px]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-1 text-center font-semibold px-5 py-3 rounded-full text-white"
              style={{ background: "#FF585D" }}
            >
              Try for free
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
