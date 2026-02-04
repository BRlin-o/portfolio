import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://brlin.org";
const siteName = "Cheng-Han Lin | Cloud Engineer & AI Solution Developer";
const siteDescription =
  "Portfolio of Cheng-Han Lin (BR Lin) - Cloud Engineer specializing in Generative AI, Multi-Agent Systems, RAG Frameworks, and Scalable Cloud Architectures on AWS & GCP.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: siteName,
    template: "%s | Cheng-Han Lin",
  },
  description: siteDescription,
  keywords: [
    "Cloud Engineer",
    "AI Developer",
    "Generative AI",
    "AWS",
    "GCP",
    "RAG",
    "Multi-Agent Systems",
    "LangChain",
    "Amazon Bedrock",
    "Portfolio",
    "BR Lin",
    "Cheng-Han Lin",
    "林承漢",
    "雲端工程師",
    "AI 解決方案",
  ],
  authors: [{ name: "BR Lin (Cheng-Han Lin)", url: siteUrl }],
  creator: "BR Lin",
  publisher: "BR Lin",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Icons
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cheng-Han Lin Portfolio",
    title: siteName,
    description: siteDescription,
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@brlin_dev",
  },

  // Verification (add your verification codes here)
  // verification: {
  //   google: "your-google-verification-code",
  // },

  // Category
  category: "technology",

  // Other
  applicationName: "BR Lin Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Cheng-Han Lin",
              alternateName: ["BR Lin", "Steven", "林承漢"],
              url: siteUrl,
              image: `${siteUrl}/logo.webp`,
              jobTitle: "Cloud Engineer & AI Solution Developer",
              worksFor: {
                "@type": "Organization",
                name: "National Taichung University of Science and Technology",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "National Taichung University of Science and Technology",
              },
              knowsAbout: [
                "Cloud Computing",
                "Generative AI",
                "Machine Learning",
                "AWS",
                "GCP",
                "RAG Systems",
                "Multi-Agent Systems",
              ],
              sameAs: [
                "https://github.com/BRlin-o",
                "https://linkedin.com/in/cheng-han-lin-br",
              ],
            }),
          }}
        />
        {/* JSON-LD Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cheng-Han Lin Portfolio",
              alternateName: "BR Lin Portfolio",
              url: siteUrl,
              description: siteDescription,
              author: {
                "@type": "Person",
                name: "Cheng-Han Lin",
              },
              inLanguage: ["en", "zh-TW"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
