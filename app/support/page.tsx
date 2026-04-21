import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Support — Runable",
  description: "Get help with Runable. Join our Discord community or email our support team.",
};

const DISCORD_URL = "https://discord.gg/47cT8zKdTj";
const SUPPORT_EMAIL = "support@runableapp.com";

export default function SupportPage() {
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
        <div className="max-w-3xl mx-auto">
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
            <div className="eyebrow text-gradient mb-4">Support</div>
            <h1 className="heading-lg mb-4">We&apos;re here to help</h1>
            <p className="subheading max-w-xl mx-auto">
              Running into a bug, have a feature idea, or need help with your account? Reach out through either channel
              below and we&apos;ll get back to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border group relative rounded-2xl bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] mb-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white/80"
                >
                  <path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3a.074.074 0 0 0-.079.037c-.34.607-.719 1.4-.984 2.02a18.27 18.27 0 0 0-5.487 0 12.68 12.68 0 0 0-.995-2.02.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 5.174 4.369a.07.07 0 0 0-.032.027C1.773 9.388.862 14.278 1.31 19.108a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 6.005 3.03.077.077 0 0 0 .084-.027 14.28 14.28 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.107 13.107 0 0 1-1.872-.893.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.197.372.291a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.105c.36.698.772 1.362 1.225 1.994a.076.076 0 0 0 .084.028 19.834 19.834 0 0 0 6.014-3.03.077.077 0 0 0 .032-.055c.5-5.586-.838-10.437-3.549-14.713a.061.061 0 0 0-.031-.028zM8.02 16.166c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.177 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.177 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Join our Discord</h2>
              <p className="text-sm text-white/60 mb-5">
                Chat with the team and other runners in real time. Best for quick questions, feedback, and community
                events.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gradient">
                Open Discord
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M7.5 4.5l5 5.5-5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="gradient-border group relative rounded-2xl bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] mb-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="w-6 h-6 text-white/80"
                >
                  <path
                    d="M3.75 6.75h16.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 7l8.25 6.5L20.25 7"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Email support</h2>
              <p className="text-sm text-white/60 mb-5">
                Prefer email? Send us the details and we&apos;ll respond within 1–2 business days.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gradient break-all">
                {SUPPORT_EMAIL}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M7.5 4.5l5 5.5-5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <p className="mt-10 text-center text-xs text-white/40">
            For privacy requests, see our{" "}
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
