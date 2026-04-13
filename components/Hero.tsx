import Image from "next/image";
import PhoneFrame from "./PhoneFrame";

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.95 1.54C10.19 1.06 10.31.82 10.47.74a.5.5 0 01.44 0c.16.08.28.32.52.8L13.68 6.1c.14.28.2.42.31.53.09.1.2.17.32.22.14.06.29.07.6.1l5.03.74c.53.08.79.12.92.25a.5.5 0 01.13.42c-.02.18-.22.36-.6.74l-3.64 3.54c-.23.22-.34.33-.41.47a.5.5 0 00-.05.27c0 .15.04.3.07.46l.86 5.01c.09.53.13.79.05.95a.5.5 0 01-.36.24c-.18.03-.41-.09-.89-.34l-4.5-2.37c-.14-.07-.21-.11-.29-.12a.5.5 0 00-.21 0c-.07.01-.14.05-.28.12l-4.5 2.37c-.48.25-.71.37-.89.34a.5.5 0 01-.36-.24c-.08-.16-.04-.42.06-.95l.86-5.01c.02-.16.04-.31.04-.46a.5.5 0 00-.06-.27c-.03-.14-.14-.25-.36-.47L1.59 8.69c-.38-.38-.58-.56-.6-.74a.5.5 0 01.13-.42c.12-.13.39-.17.92-.25l5.03-.74c.16-.03.3-.04.42-.1a.5.5 0 00.16-.22c.05-.11.1-.25.2-.53L9.95 1.54z"
        fill="url(#sg)"
      />
      <defs>
        <linearGradient id="sg" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="glow glow-lime w-[700px] h-[700px] -top-40 -left-40" />
      <div className="glow glow-green w-[700px] h-[700px] -top-20 -right-40 opacity-40" />

      <div className="section-wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="eyebrow text-white/70">New</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <span className="text-xs text-white/70">4.8 · App Store</span>
            </div>

            <h1 className="heading-xl text-gradient-animated">
              Run. Rank.<br />Compete.
            </h1>

            <p className="subheading mt-6 max-w-xl mx-auto md:mx-0">
              The only running app where progress earns rank. Compete with friends, climb divisions, and unlock elite rewards.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#" className="btn-primary">Download on App Store</a>
            </div>
          </div>

          <div className="order-2 relative">
            <div className="glow glow-green w-[500px] h-[500px] top-10 left-1/2 -translate-x-1/2" />
            <PhoneFrame className="relative scale-100 md:scale-95 origin-center" hideNotch>
              <div className="relative w-full h-full flex items-start justify-center overflow-hidden" style={{ background: "#1C1C1E" }}>
                <Image
                  src="/hero-graphic-v2.png"
                  alt="Runable app showing Immortal rank and progress chart"
                  width={700}
                  height={1400}
                  priority
                  className="w-full h-full object-contain object-top scale-[0.98] origin-top"
                />
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
