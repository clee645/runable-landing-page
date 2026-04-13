import Image from "next/image";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  return (
    <section id="download" className="relative py-24 md:py-36 overflow-hidden">
      <div className="glow glow-green w-[1000px] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="section-wrap relative">
        <FadeUp className="flex flex-col items-center text-center">
          <div
            className="w-24 h-24 rounded-[24px] mb-8 overflow-hidden"
            style={{ boxShadow: "0 30px 60px -10px rgba(255,88,93,0.4)" }}
          >
            <Image
              src="/app-icon-red.png"
              alt="Runable app icon"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="heading-lg text-gradient">
            Level up every run.
          </h2>
          <p className="subheading mt-5 max-w-xl">
            Track your progress. Climb the ranks. Compete with friends.
          </p>
          <a
            href="#"
            className="btn-primary mt-8 text-lg"
            style={{ backgroundImage: "none", backgroundColor: "#FF585D" }}
          >
            Download on App Store
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
