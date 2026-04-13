import FadeUp from "./FadeUp";

const stats = [
  {
    value: "3.2×",
    label: "More consistent",
    copy: "Runable users run 3.2× more often than they did before.",
  },
  {
    value: "87%",
    label: "Hit weekly goals",
    copy: "Progression systems keep you showing up, week after week.",
  },
  {
    value: "10M+",
    label: "XP earned",
    copy: "Every mile rewarded. Every streak celebrated.",
  },
];

export default function Impact() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow glow-green w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="section-wrap relative">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-gradient mb-4">Impact</div>
          <h3 className="heading-md">Runners stick with it.</h3>
          <p className="subheading mt-4">
            Because when every step earns you something, you keep showing up.
          </p>
        </FadeUp>

        <FadeUp
          className="gradient-border rounded-3xl grid md:grid-cols-3 relative overflow-hidden"
          as="div"
        >
          <div
            className="absolute inset-0 -z-0"
            style={{ background: "rgba(15,15,28,0.6)" }}
          />
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative p-8 md:p-12 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
              }}
            >
              <div className="heading-lg text-gradient">{s.value}</div>
              <div className="mt-3 font-semibold">{s.label}</div>
              <p className="mt-2 text-sm text-white/60 max-w-[28ch] mx-auto">
                {s.copy}
              </p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
