const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Python",
  "WhisperKit",
  "Claude API",
  "OpenAI",
  "Plaid",
  "Stripe",
  "Vercel",
  "WebSocket",
  "AWS",
  "Railway",
  "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          About
        </h2>

        <div className="glass-card p-8 sm:p-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            I&apos;m Andy — a staff-level engineer building AI-integrated
            products solo, from idea to app store. I design, code, and ship
            across web, iOS, and Android — full stack, no team, no shortcuts.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            Currently building{" "}
            <a href="https://don.financial" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">Don</a>
            , an AI-first personal finance app,{" "}
            <a href="https://hppy.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">hppy</a>
            , a DevOps platform that auto-triages and fixes bugs with AI,{" "}
            <a href="https://swarmlink.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">Swarmlink</a>
            , a real-time coordination platform for AI agent teams, and{" "}
            <span className="text-accent">Vox</span>
            , a macOS dictation app powered by on-device Whisper and Claude.
            All live products, built solo end-to-end.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Vector Point is my solo practice. I also partner with startups,
            founders, and teams who need high-quality engineering without the
            overhead. Whether it&apos;s a greenfield build or shipping features
            on an existing product, I bring the same standard: clean code, fast
            iteration, and real results.
          </p>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-secondary hover:text-text hover:border-accent/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
