import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Archivo, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    "zh-TW": "zh_TW",
};

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

const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const siteDescription = siteConfig.description;

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

/**
 * Generate locale-aware metadata with proper hreflang alternates.
 * @see https://developers.google.com/search/docs/specialty/international/localized-versions
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const { locales, defaultLocale } = routing;

    // Build alternates.languages for hreflang
    const languages: Record<string, string> = {};
    for (const loc of locales) {
        const prefix = loc === defaultLocale ? "" : `/${loc}`;
        languages[loc] = `${siteUrl}${prefix}`;
    }
    languages["x-default"] = siteUrl;

    // Canonical URL for the current locale
    const canonicalPrefix = locale === defaultLocale ? "" : `/${locale}`;

    return {
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

        // Canonical URL + hreflang alternates
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: `${canonicalPrefix}/`,
            languages,
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

        // Open Graph - locale-aware
        openGraph: {
            type: "website",
            locale: ogLocaleMap[locale] ?? "en_US",
            alternateLocale: locales
                .filter((l) => l !== locale)
                .map((l) => ogLocaleMap[l] ?? l),
            url: `${siteUrl}${canonicalPrefix}`,
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

        // Verification
        verification: {
            google: "VXc-kXyja_yx5VKcf1wcehAp2hsDW4GZjx6rk9jQAG8",
        },

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
}

// Generate static params for all locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Get messages for the current locale
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
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
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
