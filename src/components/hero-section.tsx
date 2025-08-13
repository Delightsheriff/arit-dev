"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold arit-text leading-tight fade-in-up">
          Your Tech Journey, <span className="block">Accelerated</span>
        </h1>

        {/* Sub-headline */}
        <div className="mt-8 fade-in-up fade-in-up-delay-1">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold arit-accent">
            Build. Practice. Get Hired.
          </p>
        </div>

        {/* Description */}
        <div className="mt-8 max-w-2xl mx-auto fade-in-up fade-in-up-delay-2">
          <p className="font-sans text-lg md:text-xl arit-text leading-relaxed">
            The <strong className="font-bold">Arit</strong> Developer Circle is
            a supportive, no-fluff space to get you unstuck. Led by our tech
            aunty <strong className="font-bold">Arit</strong>, we deliver the
            spicy-honest feedback and insider strategies you need to push
            forward, stand out, and build a career you&apos;re proud of. This is
            where your real growth begins.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mt-12 fade-in-up fade-in-up-delay-3">
          <Button
            size="lg"
            className="arit-accent-bg text-white hover:bg-pink-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg px-8 py-4 group"
          >
            Join the Circle Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
