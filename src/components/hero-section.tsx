"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "./animated-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-6 overflow-hidden">
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="geometric-background">
        <div className="dot-pattern"></div>
        <div className="circuit-lines"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Main Headline */}

        <div className="geometric-background">
          <div className="dot-pattern"></div>
          <div className="circuit-lines"></div>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold arit-text text-header leading-tight fade-in-up">
          From Learning to Earning,Together
        </h1>

        <div className="mt-8 fade-in-up fade-in-up-delay-1">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold arit-accent">
            Build real skills. Grow your confidence. Thrive in Tech.
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto fade-in-up fade-in-up-delay-2">
          <p className="font-sans text-lg arit-text leading-relaxed">
            The Queen Arit Circle is a welcoming, no-fluff community for early
            and mid-career techies and those still learning, led by your tech
            aunty <strong>Arit</strong>. We help you master the practical skills
            that advance your career forward: interviewing, leadership,
            collaboration, storytelling, and more. Whatever your role in tech,
            you don&apos;t have to figure it out on your own.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mt-12 fade-in-up fade-in-up-delay-3">
          <AnimatedButton
            className="arit-accent-bg text-white hover:bg-pink-600 transition-all duration-300 px-6 py-5 w-60 "
            onClick={() =>
              window.open("https://proxy.nas.io/queenaritcircle", "_blank")
            }
          >
            Join the Circle Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
