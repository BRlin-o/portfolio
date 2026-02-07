import { Hero } from "@/components/sections/hero";
import { AboutMe } from "@/components/sections/about-me";
import { Background } from "@/components/sections/background";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { Logo } from "@/components/layout/logo";
import { SectionNavigation } from "@/components/layout/section-navigation";
import { MenuAction } from "@/components/layout/menu-action";
import { setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Logo />
            <SectionNavigation />
            <MenuAction />
            <div className="w-full">
                <Hero />
            </div>

            <div className="w-full">
                <AboutMe />
            </div>

            <div className="w-full">
                <Background />
            </div>

            <div className="w-full">
                <Experience />
            </div>

            <div className="w-full bg-slate-50 dark:bg-transparent">
                <Projects />
            </div>

            <div className="w-full">
                <Awards />
            </div>

            <div className="w-full">
                <Contact />
            </div>
        </main>
    );
}
