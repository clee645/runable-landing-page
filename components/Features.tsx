import Image from "next/image";
import FadeUp from "./FadeUp";
import PhoneFrame from "./PhoneFrame";

function RecordScreen() {
  return (
    <Image
      src="/screens/record.png"
      alt="Runable run summary screen"
      width={924}
      height={2000}
      className="w-full h-full object-cover"
    />
  );
}

function XPScreen() {
  return (
    <Image
      src="/screens/rank-up.png"
      alt="Runable rank up screen"
      width={1170}
      height={2532}
      className="w-full h-full object-cover"
    />
  );
}

function LeaderboardScreen() {
  return (
    <Image
      src="/screens/leaderboard.png"
      alt="Runable leaderboard screen"
      width={924}
      height={2000}
      className="w-full h-full object-cover"
    />
  );
}

type Feature = {
  caption: string;
  title: string;
  copy: string;
  Screen: React.ComponentType;
  glow: string;
};

const features: Feature[] = [
  {
    caption: "Record",
    title: "Press start. We'll handle the rest.",
    copy: "Accurate GPS tracking, pace targeting, and live stats — all in a clean, distraction-free run screen.",
    Screen: RecordScreen,
    glow: "glow-green",
  },
  {
    caption: "Earn XP",
    title: "Every mile is rewarded.",
    copy: "Distance, pace, streaks, and zone effort all feed into your XP. No two runs are worth the same.",
    Screen: XPScreen,
    glow: "glow-orange",
  },
  {
    caption: "Rank up",
    title: "Climb the ranks. Settle the bragging rights.",
    copy: "Seven tiers from Bronze to Immortal. Weekly leaderboards with friends, neighbourhoods, and the global pool.",
    Screen: LeaderboardScreen,
    glow: "glow-purple",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-wrap">
        <FadeUp className="text-center max-w-2xl mx-auto mb-20">
          <div className="eyebrow text-gradient mb-4">How it works</div>
          <h3 className="heading-md">Record. Reward. Rank.</h3>
        </FadeUp>

        <div className="flex flex-col gap-24 md:gap-32">
          {features.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <FadeUp
                key={f.title}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  reversed ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="eyebrow text-gradient mb-3">{f.caption}</div>
                  <h4 className="heading-sm max-w-md">{f.title}</h4>
                  <p className="subheading mt-4 max-w-md">{f.copy}</p>
                </div>
                <div className="relative">
                  <div className={`glow ${f.glow} w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40`} />
                  <PhoneFrame className="relative">
                    <f.Screen />
                  </PhoneFrame>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
