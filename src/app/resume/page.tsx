"use client"

import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useResumeLayoutStore } from "@/store/resume-layout"
import { LazyMotion, domAnimation, m } from "motion/react"
import {
    Mail, Github, Linkedin, Phone, MapPin, Globe,
    GraduationCap, Briefcase, Rocket, Code2, Trophy, BookOpen, Users, Award
} from "lucide-react"

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
            <div className="relative rounded-xl bg-white dark:bg-slate-900 backdrop-blur-sm p-4 print:p-3 print:bg-white flex-1">
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

export default function ResumePage() {
    const { viewMode, singleScale, dualScale } = useResumeLayoutStore()
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

    return (
        <LazyMotion features={domAnimation}>
            <div className="resume-container py-4 px-3 md:py-6 bg-slate-50/50 dark:bg-slate-950 min-h-screen overflow-x-auto">
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
                            className="p-5 md:p-6 print:p-[8mm] space-y-4 print:space-y-2"
                        >
                            {/* Header */}
                            <m.header variants={item} className="pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-start gap-4">
                                    {/* Left: Name & Title */}
                                    <div className="shrink-0">
                                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                            CHENG-HAN LIN
                                        </h1>
                                        <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                                            Steven 林承漢
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                            Cloud Engineer & AI Solution Developer
                                        </p>
                                    </div>
                                    {/* Right: Contact Info Grid */}
                                    <div className="flex-1 flex flex-wrap items-start justify-end gap-x-3 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
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
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        <strong className="text-slate-900 dark:text-slate-100">MS in Computer Science</strong> with research in Information Security and Image Processing.
                                        Specializing in <strong className="text-blue-600 dark:text-blue-400">Generative AI applications</strong> and <strong className="text-blue-600 dark:text-blue-400">Cloud solution architecture</strong>.
                                        Successfully delivered enterprise-grade, scalable AI solutions leveraging Multi-Agent Systems, RAG frameworks, and AWS/GCP cloud services.
                                        Proven track record in leading technical teams and driving digital transformation with <strong className="text-blue-600 dark:text-blue-400">multiple 1st place hackathon wins</strong>.
                                    </p>
                                </GlowingSection>
                            </m.section>

                            {/* Professional Experience */}
                            <m.section variants={item}>
                                <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>
                                <div className="space-y-2">
                                    {/* Role 1 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">Data Engineer & Executive Assistant</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">BETO ENG. & MKTG., CO., LTD. • Part-time</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] px-2 py-0.5 shrink-0">Sep 2023 – Dec 2024</Badge>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {["Tableau", "Alteryx", "BI", "ETL", "SAP"].map(t => (
                                                <Badge key={t} variant="secondary" className="text-[9px] px-1.5 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>Led enterprise BI implementation for <strong>50+ users</strong> across Sales and Finance departments</li>
                                            <li>Developed <strong>10+ interactive dashboards</strong>, reducing report preparation time by <strong>40%</strong></li>
                                            <li>Created executive KPI dashboards for C-level, improving data-driven decision-making by <strong>30%</strong></li>
                                            <li>Attended <strong>20+ tech conferences</strong> (AWS Summit, Google DevFest, COMPUTEX) for executive briefings</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* Role 2 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">Software Engineer</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">BETO ENG. & MKTG., CO., LTD.</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] px-2 py-0.5 shrink-0">Jan 2023 – Sep 2023</Badge>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {["Python", "C#", "React", "Docker", "CI/CD"].map(t => (
                                                <Badge key={t} variant="secondary" className="text-[9px] px-1.5 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>Delivered in-house solutions saving <strong>500,000+ TWD</strong> in development costs</li>
                                            <li>Built attendance platform for <strong>500+ employees</strong>, reducing HR report time from 60min to instant</li>
                                            <li>Implemented containerized microservices with Docker & CI/CD, <strong>75% faster troubleshooting</strong></li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Education */}
                            <m.section variants={item}>
                                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                                <GlowingSection>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">MS, Computer Science & Information Engineering</p>
                                                <p className="text-xs text-slate-500">National Taichung University of Science and Technology</p>
                                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                                    <span className="font-medium">Thesis:</span> Optimized 2D Histogram-Based Reversible Data Hiding for JPEG
                                                </p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">Image Processing</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">Reversible Data Hiding</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">Security</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">AI/ML</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">GenAI</Badge>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">2023 – 2025</Badge>
                                        </div>
                                        <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">BS, Computer Science & Information Engineering</p>
                                                <p className="text-xs text-slate-500">National Taichung University of Science and Technology</p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">GPA 3.83/4.0</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">Top 5% (3/55)</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">Honors Student</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">Early Graduation</Badge>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">2019 – 2023</Badge>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>

                            {/* Featured Projects */}
                            <m.section variants={item} className="break-inside-avoid">
                                <SectionTitle icon={Rocket}>Featured Projects</SectionTitle>
                                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2">
                                    {/* Project 1 */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">Gogoro Smart Scooter Wizard</span>
                                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1.5 py-0 shrink-0">🥇 1st Place</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">AIWave: Taiwan Generative AI Applications Hackathon 2024</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {["LangChain", "RAG", "AWS", "OpenSearch"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>Multi-agent chatbot for <strong>12 scooter models</strong></li>
                                            <li>RAG over <strong>800+ manual pages</strong></li>
                                            <li>30-hour hackathon delivery</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* Project 2 */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">AI-Powered Sales Agent</span>
                                            <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-[8px] px-1.5 py-0 shrink-0">Finalist</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">ETmall TV Shopping</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {["TEN-Agent", "Dify.ai", "Bedrock", "Claude", "AWS"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>3-tier AI system (Coach + Sales + Evaluation)</li>
                                            <li><strong>100+ customer attributes</strong> integration</li>
                                            <li>Led <strong>5-member team</strong> for rapid deployment</li>
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
                            className="p-5 md:p-6 print:p-[8mm] space-y-6 print:space-y-2"
                        >
                            {/* Work Projects */}
                            <m.section variants={item}>
                                <SectionTitle icon={Briefcase}>Work Projects</SectionTitle>
                                <div className="grid grid-cols-2 gap-2">
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">BETO Digital Hub</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["Tableau", "Alteryx", "SAP", "Next.js"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            Enterprise BI platform serving 50+ users with real-time business intelligence.
                                        </p>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">Splitpush E-commerce</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["PHP", "Docker", "Alipay", "Aliyun ECS"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            Led 4-member team delivering e-commerce with <strong>60% faster deployment</strong>.
                                        </p>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Awards & Certifications */}
                            <m.section variants={item}>
                                <SectionTitle icon={Trophy}>Awards & Certifications</SectionTitle>
                                <div className="grid grid-cols-2 gap-2">
                                    {/* Competition Awards */}
                                    <GlowingSection>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                                            <span className="font-medium text-xs text-slate-700 dark:text-slate-300">Competition Awards</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">4th</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">55th National Skills Competition</p>
                                                    <p className="text-[9px] text-slate-500">Cloud Computing, 2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">1st</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">55th Central Region National Skills Competition</p>
                                                    <p className="text-[9px] text-slate-500">Cloud Computing, 2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">1st</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">AIWave: Taiwan Generative AI Applications Hackathon</p>
                                                    <p className="text-[9px] text-slate-500">Gogoro Smart Mobility, 2024</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">1st</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">2022 ITSA Programming Geek Contest</p>
                                                    <p className="text-[9px] text-slate-500">Information System and Web Application, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowingSection>

                                    {/* Certifications */}
                                    <GlowingSection>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <Award className="h-3.5 w-3.5 text-orange-500" />
                                            <span className="font-medium text-xs text-slate-700 dark:text-slate-300">Certifications</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">AWS</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Machine Learning Engineer – Associate</p>
                                                    <p className="text-[9px] text-slate-500">2025 • Early Adopter</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">AWS</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Data Engineer – Associate</p>
                                                    <p className="text-[9px] text-slate-500">2024</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">Google</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Gemini Certified Educator</p>
                                                    <p className="text-[9px] text-slate-500">2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">Google</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Google Digital Talent Exploration Program</p>
                                                    <p className="text-[9px] text-slate-500">2024</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">NVIDIA</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Generative AI Agents Contest</p>
                                                    <p className="text-[9px] text-slate-500">2024 • with LangChain</p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* Publications */}
                            <m.section variants={item}>
                                <SectionTitle icon={BookOpen}>Publications</SectionTitle>
                                <GlowingSection>
                                    <div className="space-y-2">
                                        <div className="border-l-2 border-green-400 pl-2">
                                            <p className="text-xs text-slate-700 dark:text-slate-300">
                                                <strong>Lin, C. H., & Hong, W. (2025).</strong> Adaptive reversible data hiding in JPEG images via pairwise nonzero AC expansion and frequency sorting.
                                            </p>
                                            <p className="text-[10px] text-slate-500 italic">ICASI 2025, IET Digital Library</p>
                                        </div>
                                        <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-2">
                                            <p className="text-xs text-slate-700 dark:text-slate-300">
                                                <strong>Zhou, X., Hong, W., Chen, T. S., Yang, G., & Lin, C. H. (2024).</strong> An authentication scheme for color images with grayscale invariance and recoverability.
                                            </p>
                                            <p className="text-[10px] text-slate-500 italic">Journal of Information Security and Applications</p>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>

                            {/* Community */}
                            <m.section variants={item}>
                                <SectionTitle icon={Users}>Community Involvement</SectionTitle>
                                <GlowingSection>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-[9px] px-1.5 py-0">AWS User Group Taiwan</Badge>
                                    </div>
                                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                        <li><strong>Speaker:</strong> &ldquo;Multi-Agent RAG System Implementation&rdquo; at May 2024 Meetup</li>
                                        <li><strong>Volunteer:</strong> AWS Community Day (2023-2025), AWS Summit (2024-2025)</li>
                                        <li><strong>Session Host:</strong> AWS Community Day 2025</li>
                                    </ul>
                                </GlowingSection>
                            </m.section>

                            {/* Technical Skills */}
                            <m.section variants={item}>
                                <SectionTitle icon={Code2}>Technical Skills</SectionTitle>
                                <GlowingSection>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">Languages</p>
                                            <div className="flex flex-wrap gap-1">
                                                {["Python", "TypeScript", "C++", "C#", "PHP", "Java"].map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">AI / ML</p>
                                            <div className="flex flex-wrap gap-1">
                                                {["PyTorch", "LangChain", "RAG", "Agentic", "TensorFlow"].map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">Cloud & DevOps</p>
                                            <div className="flex flex-wrap gap-1">
                                                {["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"].map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">Data & Frontend</p>
                                            <div className="flex flex-wrap gap-1">
                                                {["Tableau", "Alteryx", "PostgreSQL", "React JS", "Next.js"].map(s => (
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
