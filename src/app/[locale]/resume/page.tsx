"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useResumeLayoutStore } from "@/store/resume-layout"
import { LazyMotion, domAnimation, m } from "motion/react"
import {
    Mail, Github, Linkedin, Phone, Globe,
    GraduationCap, Briefcase, Rocket, Code2, Trophy, BookOpen, Users, Award
} from "lucide-react"
import { useTranslations } from 'next-intl'

// Glowing section wrapper component with proximity-based glow effect
function GlowingSection({
    children,
    className = "",
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={`relative rounded-xl border border-slate-200/50 dark:border-slate-800/50 print:border-slate-200 break-inside-avoid flex flex-col ${className}`}>
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2.5}
            />
            <div className="relative rounded-xl bg-white dark:bg-slate-900 backdrop-blur-sm p-3.5 print:p-2 print:bg-white flex-1">
                {children}
            </div>
        </div>
    )
}

// Section title component
function SectionTitle({
    icon: Icon,
    children
}: {
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-500/10 dark:bg-blue-400/10">
                <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight uppercase">
                {children}
            </h2>
        </div>
    )
}

function AwardItem({ badge, title, org, desc, colorClass = "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" }: { badge: string, title: string, org: string, desc: string, colorClass?: string }) {
    return (
        <div className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Badge className={`${colorClass} text-[9px] px-2 py-0.5 shrink-0 mt-0.5 min-w-[60px] justify-center shadow-sm`}>{badge}</Badge>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug tracking-tight">{title}</p>
                <div className="flex flex-wrap items-center gap-x-2 mt-0.5">
                    <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{org}</p>
                    <span className="text-[9px] text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
                    <p className="text-[10px] text-slate-500 w-full sm:w-auto">{desc}</p>
                </div>
            </div>
        </div>
    )
}

function CertItem({ provider, title, year }: { provider: string, title: string, year: string }) {
    let colorClass = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    if (provider.includes("NVIDIA")) colorClass = "bg-[#76B900]/15 text-[#76B900] dark:bg-[#76B900]/20 dark:text-[#76B900]";
    else if (provider.includes("AWS")) colorClass = "bg-[#FF9900]/15 text-[#FF9900] dark:bg-[#FF9900]/20 dark:text-[#FF9900]";
    else if (provider.includes("Google")) colorClass = "bg-[#4285F4]/15 text-[#4285F4] dark:bg-[#4285F4]/20 dark:text-[#4285F4]";

    return (
        <div className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Badge className={`${colorClass} text-[9px] px-2 py-0.5 shrink-0 mt-0.5 min-w-[60px] justify-center shadow-sm`}>{provider}</Badge>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug tracking-tight">{title}</p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{year}</p>
            </div>
        </div>
    )
}

export default function ResumePage() {
    const { viewMode, singleScale, dualScale, initializeLayout } = useResumeLayoutStore()
    const [isMounted, setIsMounted] = React.useState(false)
    const t = useTranslations('Resume')

    React.useEffect(() => {
        setIsMounted(true)
        // Initialize layout on mount
        initializeLayout(window.innerWidth)

        // Dynamic switching/scaling on resize
        const handleResize = () => {
            initializeLayout(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [initializeLayout])

    const scale = viewMode === 'single' ? singleScale : dualScale

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 }
    }

    // Tech skill arrays (not translated as they are proper nouns)
    const job1Skills = ["Tableau", "Alteryx", "BI", "ETL", "SAP", "Python"]
    const job2Skills = ["Python", "C#", "React JS", "SQL", "Docker", "CI/CD"]
    const gogoroTech = ["LangChain", "RAG", "Agent", "AWS", "OpenSearch", "ETL", "Docker", "CI/CD"]
    const etmallTech = ["TEN-Agent", "Dify.ai", "Agent", "Bedrock", "AWS"]
    const betoTech = ["Next.js", "SAP", "Zustand", "OnlyOffice"]
    const splitpushTech = ["PHP", "Docker", "Alipay", "Aliyun"]
    const fanbarTech = ["React", "Python", "PyTorch", "LLM"]
    const tripfanTech = ["Next.js", "Gemini", "Capacitor", "Zustand"]

    // Rich text helper for rendering <strong> tags in translations
    const richText = (key: string) => t.rich(key, {
        strong: (chunks) => <strong>{chunks}</strong>
    })
    const languages = ["Python", "TypeScript", "C++", "C#", "PHP", "Java"]
    const aiMl = ["PyTorch", "LangChain", "RAG", "Agentic", "TensorFlow"]
    const cloudDevOps = ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"]
    const dataFrontend = ["Tableau", "Alteryx", "PostgreSQL", "React JS", "Next.js"]

    return (
        <LazyMotion features={domAnimation}>
            <div className="resume-container py-4 px-3 md:py-6 bg-slate-50/50 dark:bg-slate-950 flex-1">
                {/* A4 Pages Container */}
                <div
                    className="resume-pages flex gap-4 print:block transition-all duration-300 justify-center"
                    style={{
                        flexDirection: viewMode === 'single' ? 'column' : undefined,
                        alignItems: viewMode === 'single' ? 'center' : 'flex-start',
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                    }}
                >

                    {/* ===== PAGE 1 ===== */}
                    <article className="a4-page bg-white dark:bg-slate-950 rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden">
                        <m.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="p-5 md:p-6 print:p-[8mm] space-y-4 print:space-y-1.5"
                        >
                            {/* Header */}
                            <m.header variants={item} className="pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex flex-col md:flex-row print:flex-row md:items-start print:items-start gap-4">
                                    {/* Left: Name & Title */}
                                    <div className="shrink-0 mb-4 md:mb-0 print:mb-0">
                                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                            {t('name')}
                                        </h1>
                                        <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                                            {t('englishName')}
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                            {t('title')}
                                        </p>
                                    </div>
                                    {/* Right: Contact Info Grid */}
                                    <div className="w-full md:w-auto print:w-auto md:flex-1 flex flex-col sm:flex-row sm:flex-wrap print:flex-row print:flex-wrap items-start justify-start md:justify-end print:justify-end gap-x-3 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <a href="mailto:brend.main@gmail.com" className="flex items-center gap-1 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50">
                                            <Mail className="h-3 w-3" /> brend.main@gmail.com
                                        </a>
                                        <a href="tel:+886937209353" className="flex items-center gap-1 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50">
                                            <Phone className="h-3 w-3" /> +886 937-209-353
                                        </a>
                                        <a href="https://github.com/BRlin-o" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50">
                                            <Github className="h-3 w-3" /> BRlin-o
                                        </a>
                                        <a href="https://linkedin.com/in/cheng-han-lin-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50">
                                            <Linkedin className="h-3 w-3" /> cheng-han-lin-br
                                        </a>
                                        <a href="https://brlin.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50">
                                            <Globe className="h-3 w-3" /> brlin.org
                                        </a>
                                    </div>
                                </div>
                            </m.header>

                            {/* Summary */}
                            <m.section variants={item}>
                                <GlowingSection>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {t.rich('summary', {
                                            strong: (chunks) => <strong className="text-slate-900 dark:text-slate-100">{chunks}</strong>,
                                            highlight: (chunks) => <strong className="text-blue-600 dark:text-blue-400">{chunks}</strong>
                                        })}
                                    </p>
                                </GlowingSection>
                            </m.section>

                            {/* Professional Experience */}
                            <m.section variants={item}>
                                <SectionTitle icon={Briefcase}>{t('sections.experience')}</SectionTitle>
                                <div className="space-y-2">
                                    {/* Role 1 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('experience.job1.title')}</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t('experience.job1.company')} • {t('experience.job1.type')}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-1 shrink-0">
                                                <Badge variant="outline" className="text-[10px] px-2 py-0.5">{t('experience.job1.period')}</Badge>
                                                <div className="flex justify-end gap-1">
                                                    {job1Skills.map(skill => (
                                                        <Badge key={skill} variant="secondary" className="text-[9px] px-1.5 py-0">{skill}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('experience.job1.desc1')}</li>
                                            <li>{richText('experience.job1.desc2')}</li>
                                            <li>{richText('experience.job1.desc3')}</li>
                                            <li>{richText('experience.job1.desc4')}</li>
                                            <li>{richText('experience.job1.desc5')}</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* Role 2 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('experience.job2.title')}</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t('experience.job2.company')}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-1 shrink-0">
                                                <Badge variant="outline" className="text-[10px] px-2 py-0.5">{t('experience.job2.period')}</Badge>
                                                <div className="flex justify-end gap-1">
                                                    {job2Skills.map(skill => (
                                                        <Badge key={skill} variant="secondary" className="text-[9px] px-1.5 py-0">{skill}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('experience.job2.desc1')}</li>
                                            <li>{richText('experience.job2.desc2')}</li>
                                            <li>{richText('experience.job2.desc3')}</li>
                                            <li>{richText('experience.job2.desc4')}</li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Education */}
                            <m.section variants={item}>
                                <SectionTitle icon={GraduationCap}>{t('sections.education')}</SectionTitle>
                                <GlowingSection>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('education.ms.degree')}</p>
                                                <p className="text-xs text-slate-500">{t('education.ms.school')}</p>
                                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                                    {t('education.ms.thesis')}
                                                </p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    {(t.raw('education.ms.tags') as string[]).map((tag: string) => (
                                                        <Badge key={tag} className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">{t('education.ms.period')}</Badge>
                                        </div>
                                        <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('education.bs.degree')}</p>
                                                <p className="text-xs text-slate-500">{t('education.bs.school')}</p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    {(t.raw('education.bs.tags') as string[]).map((tag: string) => (
                                                        <Badge key={tag} className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">{t('education.bs.period')}</Badge>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>

                            {/* Featured Projects */}
                            <m.section variants={item} className="break-inside-avoid">
                                <SectionTitle icon={Rocket}>{t('sections.featuredProjects')}</SectionTitle>
                                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2">
                                    {/* Project 1 - Gogoro */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('featuredProjects.gogoro.title')}</span>
                                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1.5 py-0 shrink-0">{t('featuredProjects.gogoro.award')}</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">{t('featuredProjects.gogoro.event')}</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {gogoroTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('featuredProjects.gogoro.desc1')}</li>
                                            <li>{richText('featuredProjects.gogoro.desc2')}</li>
                                            <li>{richText('featuredProjects.gogoro.desc3')}</li>
                                            <li>{richText('featuredProjects.gogoro.desc4')}</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* Project 2 - ETmall */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('featuredProjects.etmall.title')}</span>
                                            <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-[8px] px-1.5 py-0 shrink-0">{t('featuredProjects.etmall.award')}</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">{t('featuredProjects.etmall.event')}</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {etmallTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('featuredProjects.etmall.desc1')}</li>
                                            <li>{richText('featuredProjects.etmall.desc2')}</li>
                                            <li>{richText('featuredProjects.etmall.desc3')}</li>
                                            <li>{richText('featuredProjects.etmall.desc4')}</li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>
                        </m.div>
                    </article>

                    {/* ===== PAGE 2 ===== */}
                    <article className="a4-page bg-white dark:bg-slate-950 rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden">
                        <m.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="p-5 md:p-6 print:p-[8mm] space-y-6 print:space-y-1.5"
                        >
                            {/* Projects */}
                            <m.section variants={item}>
                                <SectionTitle icon={Code2}>{t('sections.projects')}</SectionTitle>
                                <div className="grid grid-cols-2 gap-2">
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('projects.beto.title')}</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {betoTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('projects.beto.desc1')}</li>
                                            <li>{richText('projects.beto.desc2')}</li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('projects.splitpush.title')}</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {splitpushTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('projects.splitpush.desc1')}</li>
                                            <li>{richText('projects.splitpush.desc2')}</li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('projects.fanbar.title')}</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {fanbarTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('projects.fanbar.desc1')}</li>
                                            <li>{richText('projects.fanbar.desc2')}</li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{t('projects.tripfan.title')}</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {tripfanTech.map(tech => (
                                                <Badge key={tech} variant="outline" className="text-[8px] px-1 py-0">{tech}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>{richText('projects.tripfan.desc1')}</li>
                                            <li>{richText('projects.tripfan.desc2')}</li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Awards & Certifications */}
                            <m.section variants={item}>
                                <SectionTitle icon={Trophy}>{t('sections.awards')}</SectionTitle>
                                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2">
                                    {/* Competition Awards */}
                                    <GlowingSection className="h-full">
                                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                                            <Trophy className="h-4 w-4 text-yellow-500" />
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 tracking-tight">{t('sections.competitions')}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <AwardItem
                                                badge={t('awards.competition1.badge')}
                                                title={t('awards.competition1.title')}
                                                org={t('awards.competition1.org')}
                                                desc={t('awards.competition1.desc')}
                                                colorClass="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                            />
                                            <AwardItem
                                                badge={t('awards.competition2.badge')}
                                                title={t('awards.competition2.title')}
                                                org={t('awards.competition2.org')}
                                                desc={t('awards.competition2.desc')}
                                            />
                                            <AwardItem
                                                badge={t('awards.competition3.badge')}
                                                title={t('awards.competition3.title')}
                                                org={t('awards.competition3.org')}
                                                desc={t('awards.competition3.desc')}
                                            />
                                            <AwardItem
                                                badge={t('awards.competition4.badge')}
                                                title={t('awards.competition4.title')}
                                                org={t('awards.competition4.org')}
                                                desc={t('awards.competition4.desc')}
                                            />
                                            <AwardItem
                                                badge={t('awards.competition5.badge')}
                                                title={t('awards.competition5.title')}
                                                org={t('awards.competition5.org')}
                                                desc={t('awards.competition5.desc')}
                                                colorClass="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                            />
                                        </div>
                                    </GlowingSection>

                                    {/* Certifications */}
                                    <GlowingSection className="h-full">
                                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                                            <Award className="h-4 w-4 text-orange-500" />
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 tracking-tight">{t('sections.certifications')}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <CertItem
                                                provider={t('certifications.cert1.provider')}
                                                title={t('certifications.cert1.title')}
                                                year={t('certifications.cert1.year')}
                                            />
                                            <CertItem
                                                provider={t('certifications.cert2.provider')}
                                                title={t('certifications.cert2.title')}
                                                year={t('certifications.cert2.year')}
                                            />
                                            <CertItem
                                                provider={t('certifications.cert3.provider')}
                                                title={t('certifications.cert3.title')}
                                                year={t('certifications.cert3.year')}
                                            />
                                            <CertItem
                                                provider={t('certifications.cert4.provider')}
                                                title={t('certifications.cert4.title')}
                                                year={t('certifications.cert4.year')}
                                            />
                                            <CertItem
                                                provider={t('certifications.cert5.provider')}
                                                title={t('certifications.cert5.title')}
                                                year={t('certifications.cert5.year')}
                                            />
                                            <CertItem
                                                provider={t('certifications.cert6.provider')}
                                                title={t('certifications.cert6.title')}
                                                year={t('certifications.cert6.year')}
                                            />
                                        </div>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Publications */}
                            <m.section variants={item}>
                                <SectionTitle icon={BookOpen}>{t('sections.publications')}</SectionTitle>
                                <GlowingSection>
                                    <div className="space-y-2">
                                        <div className="border-l-2 border-green-400 pl-2">
                                            <p className="text-xs text-slate-700 dark:text-slate-300">
                                                <strong>{t('publications.pub1.citation')}</strong>
                                            </p>
                                            <p className="text-[10px] text-slate-500 italic">{t('publications.pub1.venue')}</p>
                                        </div>
                                        <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-2">
                                            <p className="text-xs text-slate-700 dark:text-slate-300">
                                                <strong>{t('publications.pub2.citation')}</strong>
                                            </p>
                                            <p className="text-[10px] text-slate-500 italic">{t('publications.pub2.venue')}</p>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>

                            {/* Community */}
                            <m.section variants={item}>
                                <SectionTitle icon={Users}>{t('sections.community')}</SectionTitle>
                                <GlowingSection>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-[9px] px-1.5 py-0">{t('community.group')}</Badge>
                                    </div>
                                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                        <li>{t('community.talk')}</li>
                                        <li>{t('community.volunteer')}</li>
                                        <li>{t('community.host')}</li>
                                    </ul>
                                </GlowingSection>
                            </m.section>

                            {/* Technical Skills */}
                            <m.section variants={item}>
                                <SectionTitle icon={Code2}>{t('sections.skills')}</SectionTitle>
                                <GlowingSection>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">{t('skills.languages')}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {languages.map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">{t('skills.aiMl')}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {aiMl.map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">{t('skills.cloudDevOps')}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {cloudDevOps.map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">{t('skills.dataFrontend')}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {dataFrontend.map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>
                        </m.div>
                    </article>
                </div>
            </div>
        </LazyMotion>
    )
}
