"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock, FiEye } from "react-icons/fi";

const caseStudies = [
  {
    slug: "finance-app-redesign",
    title: "FinanceHub - Banking App Redesign",
    excerpt:
      "Complete redesign of a banking application with Jetpack Compose, resulting in 40% improvement in user engagement.",
    image: "/images/case-studies/finance-app.jpg",
    category: "Fintech",
    duration: "4 months",
    downloads: "500K+",
    rating: "4.8",
    technologies: ["Jetpack Compose", "Kotlin", "Hilt", "Room", "Retrofit"],
  },
  {
    slug: "health-tracker-app",
    title: "HealthTrack - Fitness & Wellness App",
    excerpt:
      "Built a comprehensive health tracking app with Wear OS support, Google Fit integration, and real-time data synchronization.",
    image: "/images/case-studies/health-app.jpg",
    category: "Healthcare",
    duration: "6 months",
    downloads: "1M+",
    rating: "4.9",
    technologies: [
      "Jetpack Compose",
      "Kotlin Flow",
      "Room",
      "Google Fit API",
      "Wear OS",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "ShopEasy - E-commerce Platform",
    excerpt:
      "Developed a high-performance e-commerce app with advanced search, personalized recommendations, and seamless checkout experience.",
    image: "/images/case-studies/ecommerce-app.jpg",
    category: "E-commerce",
    duration: "5 months",
    downloads: "750K+",
    rating: "4.7",
    technologies: ["Kotlin", "MVVM", "Coroutines", "GraphQL", "Firebase"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CaseStudiesSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Deep dives into complex Android projects showcasing architecture, performance
          optimization, and user experience excellence
        </p>
        <Link
          href="/case-studies"
          className="btn-primary inline-flex items-center group"
        >
          View All Case Studies
          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {caseStudies.map((caseStudy, index) => (
          <motion.div key={caseStudy.slug} variants={itemVariants}>
            <Link href={`/case-studies/${caseStudy.slug}`}>
              <div className="card-hover overflow-hidden group cursor-pointer">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/30">
                      {caseStudy.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {caseStudy.excerpt}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <FiClock className="mr-1" size={14} />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center">
                      <FiEye className="mr-1" size={14} />
                      {caseStudy.downloads}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-overlay text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-surface-overlay text-xs rounded-md">
                        +{caseStudy.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
