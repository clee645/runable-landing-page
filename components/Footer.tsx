import Image from "next/image";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Rank tiers", href: "#ranks" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help", href: "#" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="section-wrap">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-red.png"
                alt="Runable"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-semibold">Runable</span>
            </div>
            <p className="mt-4 text-sm text-white/50 max-w-xs">
              The gamified running app. Every run earns XP, ranks you up, and puts you on the leaderboard.
            </p>
            <div className="mt-6 text-xs text-white/40">
              © {new Date().getFullYear()} Runable. All rights reserved.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {columns.map((c) => (
              <div key={c.heading}>
                <div className="text-sm font-semibold text-gradient mb-4">{c.heading}</div>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
