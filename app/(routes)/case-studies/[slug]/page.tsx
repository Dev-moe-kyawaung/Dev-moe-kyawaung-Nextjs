import { notFound } from "next/navigation";
import FadeIn from "@/components/animations/fade-in";
import { FiClock, FiEye, FiTag } from "react-icons/fi";

// Mock data (replace with CMS or database)
const caseStudies = {
  "finance-app-redesign": {
    slug: "finance-app-redesign",
    title: "FinanceHub - Banking App Redesign",
    category: "Fintech",
    duration: "4 months",
    downloads: "500K+",
    rating: "4.8",
    technologies: ["Jetpack Compose", "Kotlin", "Hilt", "Room", "Retrofit"],
    challenge: "Legacy XML-based UI with poor performance and difficult maintenance",
    solution: "Complete migration to Jetpack Compose with MVVM architecture",
    results: [
      { metric: "User Engagement", value: "+40%", improvement: "Increased session time" },
      { metric: "Crash Rate", value: "-65%", improvement: "Better stability" },
      { metric: "Development Speed", value: "+50%", improvement: "Faster feature delivery" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {caseStudy.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                {caseStudy.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center">
                  <FiClock className="mr-2" />
                  {caseStudy.duration}
                </span>
                <span className="flex items-center">
                  <FiEye className="mr-2" />
                  {caseStudy.downloads}
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-overlay rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                <p className="text-lg text-muted-foreground">{caseStudy.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <p className="text-lg text-muted-foreground">{caseStudy.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {caseStudy.results.map((result) => (
                    <div key={result.metric} className="card p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {result.value}
                      </div>
                      <div className="font-medium mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">
                        {result.improvement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
