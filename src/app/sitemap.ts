import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

/**
 * Generates a sitemap with locale-aware URLs for all pages.
 *
 * For each page, generates entries for all locales with proper alternates
 * (hreflang) so search engines can serve the correct language version.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * @see https://developers.google.com/search/docs/specialty/international/localized-versions
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const { locales, defaultLocale } = routing;

    // Define all pages with their change frequency and priority
    const pages = [
        { path: "", changeFrequency: "monthly" as const, priority: 1 },
        { path: "/resume", changeFrequency: "monthly" as const, priority: 0.8 },
    ];

    return pages.flatMap((page) => {
        // Build alternates.languages map for hreflang
        const languages: Record<string, string> = {};
        for (const locale of locales) {
            const prefix = locale === defaultLocale ? "" : `/${locale}`;
            languages[locale] = `${baseUrl}${prefix}${page.path}`;
        }
        // x-default points to the default locale version
        languages["x-default"] = `${baseUrl}${page.path}`;

        // Generate one entry per locale
        return locales.map((locale) => {
            const prefix = locale === defaultLocale ? "" : `/${locale}`;
            return {
                url: `${baseUrl}${prefix}${page.path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: {
                    languages,
                },
            };
        });
    });
}
