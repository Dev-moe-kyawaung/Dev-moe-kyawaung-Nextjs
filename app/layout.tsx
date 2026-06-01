import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AnalyticsProvider } from "@/components/layout/analytics-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moe Kyaw Aung | Senior Android Developer",
  description:
    "Senior Android Developer specializing in Jetpack Compose, Kotlin, and building premium mobile experiences. View my case studies, skills, and projects.",
  keywords: [
    "Android Developer",
    "Jetpack Compose",
    "Kotlin",
    "Mobile Development",
    "Moe Kyaw Aung",
    "Kuala Lumpur",
  ],
  authors: [{ name: "Moe Kyaw Aung" }],
  openGraph: {
    title: "Moe Kyaw Aung | Senior Android Developer",
    description: "Senior Android Developer specializing in Jetpack Compose and Kotlin",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Kyaw Aung | Senior Android Developer",
    description: "Senior Android Developer specializing in Jetpack Compose and Kotlin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <AnalyticsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
