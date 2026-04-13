import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use — Runable",
  description: "Terms of Use for the Runable mobile application.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "service", title: "Description of Service" },
  { id: "eligibility", title: "Eligibility" },
  { id: "license", title: "License Grant and Restrictions" },
  { id: "accounts", title: "User Accounts and Data" },
  { id: "health", title: "Health & Fitness Disclaimer" },
  { id: "subscriptions", title: "Premium Subscriptions" },
  { id: "ip", title: "Intellectual Property" },
  { id: "warranties", title: "Disclaimer of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "modifications", title: "Modifications" },
  { id: "termination", title: "Termination" },
  { id: "geography", title: "Geographic Availability" },
  { id: "feedback", title: "Feedback" },
  { id: "apple", title: "Apple App Store Terms" },
  { id: "contact", title: "Contact Us" },
  { id: "acknowledgment", title: "Acknowledgment" },
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

export default function TermsPage() {
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
            <h1 className="heading-lg mb-4">Terms of Use</h1>
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
              <section id="acceptance">
                <SectionHeading num={1} id="acceptance">Acceptance of Terms</SectionHeading>
                <p>
                  These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between
                  you and Runable (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) regarding your use
                  of the Runable mobile application (the &quot;App&quot;).
                </p>
                <p>
                  By downloading, installing, or using the App, you agree to these Terms. If you do
                  not agree, do not use the App.
                </p>
              </section>

              <section id="service">
                <SectionHeading num={2} id="service">Description of Service</SectionHeading>
                <p>
                  Runable is a mobile application designed to help users track, improve, and gamify
                  their running and fitness activity. Features may include:
                </p>
                <ul>
                  <li><strong>GPS-based run tracking:</strong> distance, pace, duration</li>
                  <li><strong>Performance metrics and analytics</strong></li>
                  <li><strong>Gamified ranking and progression system</strong></li>
                  <li><strong>Achievements, streaks, and challenges</strong></li>
                  <li><strong>Social features:</strong> friends, invites, competition</li>
                  <li><strong>Personalized fitness insights</strong></li>
                  <li><strong>Premium features</strong> available via subscription</li>
                </ul>
              </section>

              <section id="eligibility">
                <SectionHeading num={3} id="eligibility">Eligibility</SectionHeading>
                <p>You must be at least 13 years old (or the minimum age required in your jurisdiction).</p>
                <p>If you are under 18, you confirm that you have parental or guardian consent.</p>
              </section>

              <section id="license">
                <SectionHeading num={4} id="license">License Grant and Restrictions</SectionHeading>

                <h3>License</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use
                  the App for personal, non-commercial purposes.
                </p>

                <h3>Restrictions</h3>
                <p>You agree not to:</p>
                <ul>
                  <li>Reverse engineer, modify, or copy the App</li>
                  <li>Use the App for illegal or harmful purposes</li>
                  <li>Attempt to access systems without authorization</li>
                  <li>Use bots, scripts, or automation to exploit the App</li>
                  <li>Interfere with the App&apos;s performance or security</li>
                  <li>Misrepresent your identity or impersonate others</li>
                  <li>Upload malicious code or harmful content</li>
                </ul>
              </section>

              <section id="accounts">
                <SectionHeading num={5} id="accounts">User Accounts and Data</SectionHeading>

                <h3>Account responsibility</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account and all
                  activity under it.
                </p>

                <h3>User data</h3>
                <p>
                  You retain ownership of your data (e.g., runs, stats, profile info). By using the
                  App, you grant us permission to process your data in accordance with our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>

                <h3>Accuracy</h3>
                <p>You agree to provide accurate and up-to-date information.</p>
              </section>

              <section id="health">
                <SectionHeading num={6} id="health">Health &amp; Fitness Disclaimer</SectionHeading>

                <h3>Not medical advice</h3>
                <p>
                  <strong>Runable is not a medical or fitness professional.</strong> All data,
                  insights, and recommendations are for informational purposes only and should not
                  replace professional medical advice.
                </p>

                <h3>Use at your own risk</h3>
                <p>You acknowledge that:</p>
                <ul>
                  <li>Running and physical activity involve risk of injury</li>
                  <li>You are responsible for your own health and safety</li>
                  <li>You should consult a doctor before starting any fitness program</li>
                </ul>

                <h3>Emergency situations</h3>
                <p>
                  If you experience a medical emergency, call emergency services immediately (e.g.,
                  911 in the United States).
                </p>
              </section>

              <section id="subscriptions">
                <SectionHeading num={7} id="subscriptions">Premium Subscriptions</SectionHeading>

                <h3>Subscription terms</h3>
                <p>Certain features require a paid subscription (&quot;Premium&quot;).</p>

                <h3>Billing</h3>
                <ul>
                  <li>Payments are processed through Apple&apos;s App Store</li>
                  <li>Subscriptions auto-renew unless canceled</li>
                  <li>Renewal occurs within 24 hours before the billing period ends</li>
                  <li>You can manage subscriptions in your Apple ID settings</li>
                </ul>

                <h3>Free trials</h3>
                <p>
                  Free trials may be offered. You will be charged after the trial unless canceled
                  before it ends.
                </p>

                <h3>Pricing changes</h3>
                <p>We may update pricing with prior notice.</p>
              </section>

              <section id="ip">
                <SectionHeading num={8} id="ip">Intellectual Property</SectionHeading>

                <h3>Ownership</h3>
                <p>
                  All App content, including design, branding, code, and features, belongs to
                  Runable and is protected by intellectual property laws.
                </p>

                <h3>User content</h3>
                <p>
                  You own your personal data and activity records. You grant us a license to use it
                  to operate and improve the App.
                </p>
              </section>

              <section id="warranties">
                <SectionHeading num={9} id="warranties">Disclaimer of Warranties</SectionHeading>
                <p>
                  The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
                  We do not guarantee:
                </p>
                <ul>
                  <li>Accuracy of tracking data (GPS may vary)</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Specific fitness results</li>
                </ul>
              </section>

              <section id="liability">
                <SectionHeading num={10} id="liability">Limitation of Liability</SectionHeading>
                <p>To the maximum extent permitted by law, we are not liable for:</p>
                <ul>
                  <li>Injuries, health issues, or accidents during use of the App</li>
                  <li>Loss of data or performance inaccuracies</li>
                  <li>Indirect or consequential damages</li>
                </ul>
                <p>
                  Our total liability will not exceed the amount you paid (if any) in the past 12 months.
                </p>
              </section>

              <section id="third-party">
                <SectionHeading num={11} id="third-party">Third-Party Services</SectionHeading>
                <p>The App may rely on third-party tools such as:</p>
                <ul>
                  <li><strong>Analytics</strong> (e.g., PostHog)</li>
                  <li><strong>Error monitoring</strong> (e.g., Sentry)</li>
                  <li><strong>Backend infrastructure</strong> (e.g., Supabase)</li>
                  <li><strong>Subscription management</strong> (e.g., RevenueCat)</li>
                </ul>
                <p>We are not responsible for third-party services.</p>
              </section>

              <section id="modifications">
                <SectionHeading num={12} id="modifications">Modifications</SectionHeading>

                <h3>App changes</h3>
                <p>We may modify or discontinue features at any time.</p>

                <h3>Terms changes</h3>
                <p>We may update these Terms. Continued use means acceptance.</p>
              </section>

              <section id="termination">
                <SectionHeading num={13} id="termination">Termination</SectionHeading>

                <h3>By you</h3>
                <p>You may stop using the App anytime.</p>

                <h3>By us</h3>
                <p>We may suspend or terminate access if you violate these Terms.</p>
              </section>

              <section id="geography">
                <SectionHeading num={14} id="geography">Geographic Availability</SectionHeading>
                <p>
                  The App is operated from the United States. Use in other regions is at your own risk.
                </p>
              </section>

              <section id="feedback">
                <SectionHeading num={15} id="feedback">Feedback</SectionHeading>
                <p>
                  If you submit feedback, you grant us the right to use it freely without compensation.
                </p>
              </section>

              <section id="apple">
                <SectionHeading num={16} id="apple">Apple App Store Terms</SectionHeading>
                <p>If you downloaded the App via Apple:</p>
                <ul>
                  <li>Apple is not responsible for the App</li>
                  <li>Apple provides no maintenance/support obligations</li>
                  <li>Apple is a third-party beneficiary of these Terms</li>
                </ul>
              </section>

              <section id="contact">
                <SectionHeading num={17} id="contact">Contact Us</SectionHeading>
                <p>If you have questions regarding these Terms:</p>
                <ul>
                  <li>Email: <a href="mailto:support@runableapp.com">support@runableapp.com</a></li>
                  <li>App: Runable</li>
                </ul>
              </section>

              <section id="acknowledgment">
                <SectionHeading num={18} id="acknowledgment">Acknowledgment</SectionHeading>
                <p>By using Runable, you confirm that you:</p>
                <ul>
                  <li>Have read these Terms</li>
                  <li>Understand them</li>
                  <li>Agree to be bound by them</li>
                </ul>
                <p className="mt-8 text-white/50 text-sm">
                  By using Runable, you acknowledge that you have read and agree to these Terms of Use.
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
