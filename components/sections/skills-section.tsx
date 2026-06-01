"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiFolder,
  FiTool,
  FiZap,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: FiCode,
    skills: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "XML Layouts",
      "Coroutines",
      "Flow",
    ],
  },
  {
    title: "Architecture",
    icon: FiFolder,
    skills: [
      "MVVM",
      "MVI",
      "Clean Architecture",
      "SOLID Principles",
      "Dependency Injection",
      "Hilt/Dagger",
    ],
  },
  {
    title: "Tools & Libraries",
    icon: FiTool,
    skills: [
      "Android Studio",
      "Gradle",
      "Retrofit",
      "Room",
      "DataStore",
      "Navigation Component",
    ],
  },
  {
    title: "Performance",
    icon: FiZap,
    skills: [
      "Profile Optimization",
      "Memory Management",
      "Battery Optimization",
      "Network Optimization",
      "App Size Reduction",
      "Core Web Vitals",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SkillsSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expertise in modern Android development with a focus on clean architecture,
          performance optimization, and exceptional user experiences
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={category.title} variants={itemVariants}>
            <div className="card-hover p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-center text-lg font-semibold mb-6">Additional Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Kotlin Multiplatform",
            "Compose Multiplatform",
            "Flutter",
            "GraphQL",
            "Protocol Buffers",
            "CI/CD",
            "GitHub Actions",
            "Firebase",
            "Unit Testing",
            "Espresso",
            "Mockk",
            "Git",
          ].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-surface-overlay rounded-full text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
