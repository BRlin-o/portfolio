/**
 * Site Configuration Constants
 * 
 * Uses Vercel's system environment variables for preview deployments,
 * falls back to the production URL for local development and production.
 * 
 * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables
 */

function getSiteUrl(): string {
    // 1. Explicit override via environment variable
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }

    // 2. Vercel preview/production deployment
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // 3. Vercel production with custom domain
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    // 4. Fallback for local development
    return "https://brlin.org";
}

export const siteConfig = {
    url: getSiteUrl(),
    name: "Cheng-Han Lin | Cloud Engineer & AI Solution Developer",
    description:
        "Portfolio of Cheng-Han Lin (BR Lin) - Cloud Engineer specializing in Generative AI, Multi-Agent Systems, RAG Frameworks, and Scalable Cloud Architectures on AWS & GCP.",
    author: {
        name: "Cheng-Han Lin",
        alternateName: ["BR Lin", "Steven", "林承漢"],
        github: "https://github.com/BRlin-o",
        linkedin: "https://linkedin.com/in/cheng-han-lin-br",
    },
} as const;
