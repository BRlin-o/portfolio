import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SectionNavigation } from "@/components/layout/section-navigation";
import { MenuAction } from "@/components/layout/menu-action";
import { Logo } from "@/components/layout/logo";

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

export const metadata: Metadata = {
  title: "BR Lin | Cloud Engineer & AI Solution Developer",
  description: "Portfolio of BR Lin (Cheng-Han Lin) - Cloud Engineer specializing in Generative AI, RAG Systems, and Scalable Cloud Architectures.",
  keywords: ["Cloud Engineer", "AI Developer", "Generative AI", "AWS", "RAG", "Portfolio", "BR Lin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          <SectionNavigation />
          <MenuAction />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
