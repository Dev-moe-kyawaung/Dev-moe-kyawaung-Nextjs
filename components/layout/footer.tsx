"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/moekyaw-aung", icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/moekyaw-aung", icon: FiLinkedin },
  { name: "Twitter", href: "https://twitter.com/moekyaw-aung", icon: FiTwitter },
  { name: "Email", href: "mailto:moe@kyaw-aung.dev", icon: FiMail },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/home" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Services", href: "/services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Get in Touch", href: "/contact" },
      { name: "Download Resume", href: "/resume" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/home" className="inline-block mb-4">
              <span className="text-3xl font-bold text-primary-light">MKA</span>
            </Link>
            <p className="text-background/70 mb-4 max-w-sm">
              Senior Android Developer specializing in Jetpack Compose, Kotlin, and
              building premium mobile experiences. Based in Kuala Lumpur, Malaysia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-primary-light">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Moe Kyaw Aung. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Built with Next.js 15, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
