"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import ContactForm from "@/components/sections/contact-form";
import FadeIn from "@/components/animations/fade-in";
import SlideIn from "@/components/animations/slide-in";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <SkillsSection />
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.4}>
            <CaseStudiesSection />
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.6}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next Android app project. I'm available for
              freelance work and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-primary bg-background text-foreground hover:bg-background/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
