import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  steps: ProcessStep[];
}

export default function Process({ steps }: ProcessProps) {
  return (
    <section className="relative section-padding overflow-hidden bg-zinc-900">
      {/* Background Gradient Orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, rgb(var(--purple)) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, rgb(var(--cyan)) 0%, transparent 70%)",
        }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="gradient-text-secondary">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results, every time. From discovery to delivery, we're with you at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
              )}

              <div className="relative text-center">
                {/* Step Number Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white font-bold text-2xl mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
