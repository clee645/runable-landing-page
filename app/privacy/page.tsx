import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Runable",
  description: "How Runable collects, uses, and shares your information.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "location-data", title: "Location Data" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "data-retention", title: "Data Retention" },
  { id: "data-security", title: "Data Security" },
  { id: "privacy-rights", title: "Your Privacy Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "push-notifications", title: "Push Notifications" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "att", title: "App Tracking Transparency (ATT)" },
  { id: "contact", title: "Contact Us" },
];

function SectionHeading({ num, id, children }: { num: number; id: string; children: React.ReactNode }) {
  const label = String(num).padStart(2, "0");
  return (
    <h2 id={id}>
      <span className="terms-num">{label}.</span>
      <span>{children}</span>
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <header className="relative">
        <div className="section-wrap py-6">
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="section-wrap pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 md:mb-20 text-center">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/logo-red.png"
                alt="Runable"
                width={200}
                height={200}
                priority
                className="w-36 h-36 md:w-48 md:h-48 object-contain mx-auto"
              />
            </Link>
            <div className="eyebrow text-gradient mb-4">Legal</div>
            <h1 className="heading-lg mb-4">Privacy Policy</h1>
            <p className="text-sm text-white/50">Last updated: April 13, 2026</p>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <aside className="hidden md:block">
              <div className="sticky top-8">
                <div className="eyebrow text-white/50 mb-4">On this page</div>
                <nav>
                  <ol className="space-y-2.5 text-sm">
                    {sections.map((s, i) => (
                      <li key={s.id} className="flex gap-2.5">
                        <span className="terms-num w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <a
                          href={`#${s.id}`}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <article className="terms max-w-2xl">
              <section id="introduction">
                <SectionHeading num={1} id="introduction">Introduction</SectionHeading>
                <p>
                  This Privacy Policy describes how Runable (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                  collects, uses, and shares information when you use our mobile application (the &quot;App&quot;).
                </p>
                <p>
                  Runable is a running and fitness app designed to track activity, gamify progress, and help users
                  improve their performance. We are committed to protecting your privacy and being transparent about
                  our data practices.
                </p>
              </section>

              <section id="information-we-collect">
                <SectionHeading num={2} id="information-we-collect">Information We Collect</SectionHeading>

                <h3>Information you provide directly</h3>
                <p>When you use Runable, we may collect:</p>
                <ul>
                  <li><strong>Profile information:</strong> name, username, age, sex, and optional profile details</li>
                  <li><strong>Fitness preferences:</strong> goals (distance, streaks, rank progression), activity settings</li>
                  <li><strong>Onboarding responses:</strong> running experience, goals, and preferences</li>
                  <li><strong>Account information:</strong> email (if account creation is required)</li>
                  <li><strong>Subscription data:</strong> trial and subscription status</li>
                </ul>

                <h3>Information automatically collected</h3>
                <ul>
                  <li><strong>Activity data:</strong> distance, pace, duration, splits, run performance, and GPS location (only during active runs, with permission)</li>
                  <li><strong>Device information:</strong> device type, OS version, app version</li>
                  <li><strong>Usage analytics:</strong> app interactions like runs started, onboarding completed, and rankings achieved (via PostHog)</li>
                  <li><strong>Error and performance data:</strong> crash logs and diagnostics (via Sentry)</li>
                  <li><strong>Session recordings:</strong> PostHog may record sessions to improve UX</li>
                  <li><strong>Purchase information:</strong> subscription and payment data processed via Apple and RevenueCat</li>
                  <li><strong>Advertising &amp; conversion tracking:</strong> device identifiers (e.g., IDFA on iOS, if permission is granted) and app events (installs, subscriptions)</li>
                </ul>

                <h3>Information stored locally on your device</h3>
                <p>The following data may be stored locally and not transmitted to our servers:</p>
                <ul>
                  <li>Run history (if offline)</li>
                  <li>Streak progress and rank progression</li>
                  <li>Cached performance metrics</li>
                  <li>App preferences and settings</li>
                </ul>
              </section>

              <section id="how-we-use">
                <SectionHeading num={3} id="how-we-use">How We Use Your Information</SectionHeading>
                <p>We use your information to:</p>
                <ul>
                  <li><strong>Provide core functionality:</strong> track runs, calculate performance, and display rankings</li>
                  <li><strong>Personalize your experience:</strong> tailor goals, rankings, and progress systems</li>
                  <li><strong>Improve the app:</strong> analyze usage to enhance features and UX</li>
                  <li><strong>Manage subscriptions:</strong> process payments and manage premium access</li>
                  <li><strong>Customer support:</strong> respond to issues and feedback</li>
                  <li><strong>Ensure reliability:</strong> monitor errors and fix bugs</li>
                  <li><strong>Communicate with you:</strong> send important updates (if opted in)</li>
                </ul>
              </section>

              <section id="location-data">
                <SectionHeading num={4} id="location-data">Location Data</SectionHeading>
                <p>Runable uses location data only when actively tracking a run.</p>
                <ul>
                  <li>Location tracking is permission-based</li>
                  <li>Data is used to calculate distance, pace, and route maps</li>
                  <li>Location data is not collected in the background unless explicitly enabled</li>
                </ul>
              </section>

              <section id="third-party-services">
                <SectionHeading num={5} id="third-party-services">Third-Party Services</SectionHeading>
                <p>We use the following third-party services:</p>
                <ul>
                  <li>
                    <strong>RevenueCat</strong> — subscription management. Data shared: user ID, purchase data.{" "}
                    <a href="https://www.revenuecat.com/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <strong>Supabase</strong> — backend database. Data shared: profile info, onboarding data, run data.{" "}
                    <a href="https://supabase.com/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <strong>PostHog</strong> — analytics and session recording. Data shared: usage data, device info.{" "}
                    <a href="https://posthog.com/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <strong>Sentry</strong> — error monitoring. Data shared: crash logs, device info.{" "}
                    <a href="https://sentry.io/privacy/">Privacy Policy</a>
                  </li>
                  <li>
                    <strong>Apple App Store</strong> — payment processing. Payment details are handled by Apple.
                  </li>
                  <li>
                    <strong>Advertising platforms (e.g., TikTok Pixel)</strong> — conversion tracking and measurement.
                    Data shared: device identifiers (IDFA, if permitted) and app events. Users can opt out via App
                    Tracking Transparency (ATT).
                  </li>
                </ul>
              </section>

              <section id="data-retention">
                <SectionHeading num={6} id="data-retention">Data Retention</SectionHeading>
                <ul>
                  <li><strong>Account data:</strong> retained while your account is active</li>
                  <li><strong>Run data:</strong> retained to provide history and analytics</li>
                  <li><strong>Analytics data:</strong> retained per third-party policies (typically 90 days–2 years)</li>
                  <li><strong>Local data:</strong> stored until app deletion or data reset</li>
                </ul>
              </section>

              <section id="data-security">
                <SectionHeading num={7} id="data-security">Data Security</SectionHeading>
                <p>We use industry-standard security practices, including:</p>
                <ul>
                  <li>Encrypted data transmission (HTTPS/TLS)</li>
                  <li>Secure backend infrastructure</li>
                  <li>Restricted data access</li>
                </ul>
                <p>However, no system is completely secure.</p>
              </section>

              <section id="privacy-rights">
                <SectionHeading num={8} id="privacy-rights">Your Privacy Rights</SectionHeading>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                  <li>Access your data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Export your data</li>
                  <li>Opt out of analytics or marketing</li>
                  <li>Withdraw consent</li>
                </ul>
                <p>To exercise these rights, contact us at the email below.</p>
              </section>

              <section id="childrens-privacy">
                <SectionHeading num={9} id="childrens-privacy">Children&apos;s Privacy</SectionHeading>
                <p>
                  Runable is not intended for children under 13. We do not knowingly collect data from children.
                </p>
              </section>

              <section id="push-notifications">
                <SectionHeading num={10} id="push-notifications">Push Notifications</SectionHeading>
                <p>Runable may send notifications related to run reminders, streak tracking, and progress updates.</p>
                <p>Notifications are optional, configurable in settings, and not used for advertising without consent.</p>
              </section>

              <section id="changes">
                <SectionHeading num={11} id="changes">Changes to This Policy</SectionHeading>
                <p>We may update this policy periodically. We will notify users by updating the date above and posting changes in the app.</p>
              </section>

              <section id="att">
                <SectionHeading num={12} id="att">App Tracking Transparency (ATT)</SectionHeading>
                <p>On iOS, you can control tracking permissions:</p>
                <ul>
                  <li>Go to Settings → Privacy &amp; Security → Tracking</li>
                  <li>Disable tracking for Runable</li>
                </ul>
              </section>

              <section id="contact">
                <SectionHeading num={13} id="contact">Contact Us</SectionHeading>
                <p>If you have questions or requests regarding this Privacy Policy:</p>
                <ul>
                  <li>Email: <a href="mailto:support@runableapp.com">support@runableapp.com</a></li>
                  <li>App: Runable</li>
                </ul>
                <p className="mt-8 text-white/50 text-sm">
                  By using Runable, you acknowledge that you have read and agree to this Privacy Policy.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
