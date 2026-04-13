import FadeUp from "./FadeUp";

type Person = {
  name: string;
  location: string;
  flag: string;
  bio: string;
  quote: string;
  avatar: string;
  stars: 4 | 5;
};

const row1: Person[] = [
  { name: "Maya K.",    location: "Brooklyn, USA",   flag: "🇺🇸", bio: "Marathoner",      quote: "Hit Diamond last week. First time I've actually stuck with a training plan.", avatar: "https://randomuser.me/api/portraits/women/68.jpg", stars: 5 },
  { name: "Jordan R.",  location: "London, UK",      flag: "🇬🇧", bio: "Weekend 10k-er",  quote: "XP progression is the only thing that gets me out the door at 6am.",          avatar: "https://randomuser.me/api/portraits/men/32.jpg",   stars: 5 },
  { name: "Tyler B.",   location: "Austin, USA",     flag: "🇺🇸", bio: "Trail runner",    quote: "Friendly competition with my running club — we all just ranked up together.", avatar: "https://randomuser.me/api/portraits/men/15.jpg",   stars: 4 },
  { name: "Megan H.",   location: "Vancouver, CA",   flag: "🇨🇦", bio: "Run coach",       quote: "Finally a fitness app that doesn't feel like a spreadsheet.",                avatar: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5 },
  { name: "Sam L.",     location: "Toronto, CA",     flag: "🇨🇦", bio: "Casual runner",   quote: "Went from 0 to 4 runs a week. I'm chasing Platinum.",                        avatar: "https://randomuser.me/api/portraits/men/76.jpg",   stars: 5 },
];

const row2: Person[] = [
  { name: "Olivia W.",  location: "Chicago, USA",    flag: "🇺🇸", bio: "Half marathoner", quote: "Seeing my XP climb after every run hits different. I'm hooked.",             avatar: "https://randomuser.me/api/portraits/women/12.jpg", stars: 5 },
  { name: "Henrik S.",  location: "Auckland, NZ",    flag: "🇳🇿", bio: "Ultra runner",    quote: "The leaderboards turn solo long runs into something social.",                avatar: "https://randomuser.me/api/portraits/men/52.jpg",   stars: 4 },
  { name: "Chloe P.",   location: "Sydney, AU",      flag: "🇦🇺", bio: "Morning runner",  quote: "My streak is 63 days. Never thought I'd say that.",                          avatar: "https://randomuser.me/api/portraits/women/29.jpg", stars: 5 },
  { name: "Ethan M.",   location: "Denver, USA",     flag: "🇺🇸", bio: "5k specialist",   quote: "Climbing from Bronze to Gold felt earned. Not handed to me.",                avatar: "https://randomuser.me/api/portraits/men/41.jpg",   stars: 5 },
  { name: "Emma T.",    location: "Dublin, IE",      flag: "🇮🇪", bio: "Run club lead",   quote: "Got my whole club on it. The weekly ladder is savage.",                      avatar: "https://randomuser.me/api/portraits/women/55.jpg", stars: 4 },
];

function Stars({ count }: { count: 4 | 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill={i < count ? "#FFC857" : "rgba(255,255,255,0.15)"}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ p }: { p: Person }) {
  return (
    <div
      className="gradient-border shrink-0 w-[420px] rounded-2xl p-5 relative"
      style={{ background: "rgba(15,15,28,0.6)" }}
    >
      <div className="flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.avatar}
          alt={p.name}
          className="w-12 h-12 rounded-full shrink-0 object-cover"
          style={{ border: "2px solid rgba(255,255,255,0.15)" }}
        />
        <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-semibold truncate">{p.name}</div>
            <Stars count={p.stars} />
          </div>
          <div className="text-right shrink-0">
            <div className="text-xs text-white/70">{p.bio}</div>
            <div className="text-xs text-white/50">{p.flag} {p.location}</div>
          </div>
        </div>
      </div>
      <p className="text-sm mt-3 text-white/80 leading-snug">"{p.quote}"</p>
    </div>
  );
}

function Row({ people, reverse = false }: { people: Person[]; reverse?: boolean }) {
  const list = [...people, ...people];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className={`marquee gap-5 ${reverse ? "marquee-reverse" : ""}`}>
        {list.map((p, i) => (
          <Card key={`${p.name}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-wrap">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-gradient mb-4">Community</div>
          <h3 className="heading-md">"This finally made me love running."</h3>
          <p className="subheading mt-4">
            Real runners. Real progress. Real leaderboards.
          </p>
        </FadeUp>
      </div>
      <div className="flex flex-col gap-5">
        <Row people={row1} />
        <Row people={row2} reverse />
      </div>
    </section>
  );
}
