import FadeIn from "@/components/animations/fade-in";
import { FiBriefcase, FiMapPin, FiMail } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Senior Android Developer with 5+ years of experience building high-quality
              mobile applications.
            </p>
            {/* Add more content */}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
