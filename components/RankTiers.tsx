import Image from "next/image";
import FadeUp from "./FadeUp";

type Tier = {
  name: string;
  req: string;
  image: string;
  glow: string;
  scale?: number;
};

const tiers: Tier[] = [
  { name: "Bronze",   req: "Start running",   image: "/ranks/bronze_three.png",   glow: "#8F4B1F", scale: 0.55 },
  { name: "Silver",   req: "2,500 XP",        image: "/ranks/silver_three.png",   glow: "#8A99B1", scale: 0.82 },
  { name: "Gold",     req: "6,000 XP",        image: "/ranks/gold_three.png",     glow: "#C48B1A", scale: 0.82 },
  { name: "Emerald",  req: "12,000 XP",       image: "/ranks/emerald_three.png",  glow: "#3EA49A", scale: 0.82 },
  { name: "Diamond",  req: "24,000 XP",       image: "/ranks/diamond_three.png",  glow: "#5B77C9", scale: 1.05 },
  { name: "Master",   req: "50,000 XP",       image: "/ranks/master_three.png",   glow: "#C9C9D6", scale: 1.1 },
  { name: "Champion", req: "100,000 XP",      image: "/ranks/champion_three.png", glow: "#8A2BE2", scale: 1.2 },
  { name: "Immortal", req: "Top 100 weekly",  image: "/ranks/immortal.png",       glow: "#E8C76B", scale: 1.2 },
];

function GemCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="gradient-border shrink-0 w-56 md:w-64 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden"
      style={{ background: "rgba(15,15,28,0.6)" }}
    >
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, ${tier.glow} 0%, transparent 60%)`, filter: "blur(40px)" }}
      />
      <div className="relative mt-2 mb-6 w-32 h-32 flex items-center justify-center">
        <Image
          src={tier.image}
          alt={`${tier.name} rank badge`}
          width={128}
          height={128}
          className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
          style={{ transform: `scale(${tier.scale ?? 1})` }}
        />
      </div>
      <div className="font-semibold text-lg">{tier.name}</div>
      <div className="text-xs text-white/50 mt-1">{tier.req}</div>
    </div>
  );
}

export default function RankTiers() {
  const list = [...tiers, ...tiers];
  return (
    <section id="ranks" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-wrap">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-gradient mb-4">Rank tiers</div>
          <h3 className="heading-md">Eight ranks. One journey.</h3>
          <p className="subheading mt-4">
            From Bronze to Immortal — earn your way up through the tiers as you increase mileage, run faster, and improve consistency.
          </p>
        </FadeUp>
      </div>

      <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee gap-6">
          {list.map((t, i) => (
            <GemCard key={`${t.name}-${i}`} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
