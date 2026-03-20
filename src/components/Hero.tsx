import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Large watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <Image
          src="/logo-large.png"
          alt=""
          width={500}
          height={500}
          className="hero-star"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Software that{" "}
          <span className="bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">
            ships
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          One-person dev shop. I design, build, and ship full-stack web apps,
          mobile apps, and AI-powered products — from zero to production.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
