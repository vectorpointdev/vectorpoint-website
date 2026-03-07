const featuredProjects = [
  {
    name: "Don",
    tagline: "Your money, understood.",
    description:
      "AI-first personal finance app with conversational intelligence. Chat with your financial data, get smart transaction categorization, track net worth and investments, and hit gamified savings goals. Cross-platform: web + native iOS + Android.",
    highlights: [
      "46 AI-powered financial tools via conversational chat (Claude API)",
      "Transaction splitting, duplicate detection, and CSV import",
      "Bank sync with 11,000+ institutions via Plaid",
      "Investment portfolio tracking with holdings and allocation breakdown",
      "Gamified goals with XP, streaks, and difficulty tiers",
      "Stripe + App Store + Play Store payments",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "SwiftUI",
      "Kotlin",
      "PostgreSQL",
      "Claude API",
      "Plaid",
      "Stripe",
      "Prisma",
    ],
    link: "https://don.financial",
    status: "Live",
  },
  {
    name: "hppy",
    tagline: "Automated bug resolution for dev teams.",
    description:
      "DevOps platform that triages incoming bugs, generates AI-powered code fixes, and manages feature requests — so your team can focus on building instead of firefighting. Multi-agent pipeline from issue to deployed fix.",
    highlights: [
      "Multi-agent triage → fix → review pipeline (Haiku, Sonnet, Opus)",
      "Feature request analysis with value scoring, scope estimation, and dedup",
      "Vercel alert investigation — auto-diagnoses production incidents",
      "Context-aware code patch generation with GitHub integration",
      "Inngest-orchestrated workflows with retries and concurrency control",
      "Email and SMS notifications with one-click approve/reject",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Claude API",
      "Inngest",
      "GitHub API",
      "Vercel API",
      "Prisma",
    ],
    link: "https://hppy.dev",
    status: "Live",
  },
  {
    name: "Vox",
    tagline: "Voice to text, anywhere on your Mac.",
    description:
      "macOS menu bar app that turns speech into text in any application. Press a hotkey, speak, and your words appear — with optional AI post-processing that cleans up filler words, fixes grammar, and adapts to the active app context.",
    highlights: [
      "Global hotkey activation — works in any app, any text field",
      "On-device transcription via WhisperKit (no internet required for STT)",
      "Claude-powered post-processing — removes filler, fixes grammar",
      "App-aware context — adapts output based on frontmost application",
      "Real-time audio pipeline with 16kHz PCM capture",
      "Lightweight menu bar UI with instant text injection",
    ],
    tags: [
      "Swift",
      "SwiftUI",
      "WhisperKit",
      "Claude API",
      "AVFoundation",
      "AppKit",
    ],
    status: "Live",
  },
];


export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Work
        </h2>
        <p className="text-text-secondary text-center max-w-xl mx-auto mb-16">
          Products I&apos;ve designed, built, and shipped — solo, end-to-end.
        </p>

        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.name} className="glass-card p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-accent mb-4 italic">
                {project.tagline}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-text-secondary leading-relaxed flex gap-2"
                  >
                    <span className="text-accent mt-0.5 shrink-0">&#x2022;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  View project &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
