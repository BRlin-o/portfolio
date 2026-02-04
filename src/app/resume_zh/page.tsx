"use client"

import * as React from "react"

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
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                {children}
            </h2>
        </div>
    )
}

export default function ResumeZhPage() {
    const { viewMode, singleScale, dualScale, initializeLayout } = useResumeLayoutStore()
    const [isMounted, setIsMounted] = React.useState(false)

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

                    {/* ===== 第一頁 ===== */}
                    <article className="a4-page bg-white dark:bg-slate-950 rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden">
                        <m.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="p-5 md:p-6 print:p-[8mm] space-y-4 print:space-y-2"
                        >
                            {/* 頁首 */}
                            <m.header variants={item} className="pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex flex-col md:flex-row print:flex-row md:items-start print:items-start gap-4">
                                    {/* 左側：姓名與職稱 */}
                                    <div className="shrink-0 mb-4 md:mb-0 print:mb-0">
                                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                            林承漢
                                        </h1>
                                        <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                                            Cheng-Han Lin (Steven)
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                            雲端架構師暨AI解決方案開發者
                                        </p>
                                    </div>
                                    {/* 右側：聯絡資訊 */}
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

                            {/* 個人簡介 */}
                            <m.section variants={item}>
                                <GlowingSection>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        <strong className="text-slate-900 dark:text-slate-100">電腦科學與資訊工程碩士</strong>，研究領域涵蓋資訊安全與影像處理，
                                        專精於<strong className="text-blue-600 dark:text-blue-400">生成式 AI 應用</strong>與<strong className="text-blue-600 dark:text-blue-400">雲端解決方案架構</strong>。
                                        透過多代理系統 (Multi-Agent)、RAG 框架及 AWS/GCP 雲端服務，成功交付企業級可擴展 AI 解決方案。
                                        持有 <strong className="text-blue-600 dark:text-blue-400">NVIDIA、AWS、Google Cloud 等國際認證</strong>，於多項黑客松及全國性競賽獲得佳績，具備帶領技術團隊與推動數位轉型之實務經驗。
                                    </p>
                                </GlowingSection>
                            </m.section>

                            {/* 專業經歷 */}
                            <m.section variants={item}>
                                <SectionTitle icon={Briefcase}>專業經歷</SectionTitle>
                                <div className="space-y-2">
                                    {/* 經歷 1 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">資料工程師暨總經理助理</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">雙餘實業股份有限公司 • 兼職</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] px-2 py-0.5 shrink-0">2023/09 – 2024/12</Badge>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {["Tableau", "Alteryx", "BI", "ETL", "SAP", "Python"].map(t => (
                                                <Badge key={t} variant="secondary" className="text-[9px] px-1.5 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>協助企業 BI 導入專案，支援銷售與財務部門 <strong>50+ 使用者</strong>之數位轉型需求</li>
                                            <li>開發 <strong>10+ 互動式報表</strong>（銷售分析、財務報告、高階 KPI），減少報表製作時間達 <strong>40%</strong></li>
                                            <li>建立跨部門儀表板（銷售至 C-level），<strong>打破資料孤島</strong>，提升整體效率 <strong>30%</strong></li>
                                            <li>運用 <strong>Alteryx</strong> 維護 ETL 流程，處理 <strong>SAP</strong> 數據以提供即時商業智慧分析</li>
                                            <li>2024 年出席 <strong>20+ 場技術研討會</strong>（AWS Summit、Google DevFest、COMPUTEX 等）進行趨勢研究</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* 經歷 2 */}
                                    <GlowingSection>
                                        <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                                            <div>
                                                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">軟體工程師</span>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">雙餘實業股份有限公司</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] px-2 py-0.5 shrink-0">2023/01 – 2023/09</Badge>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {["Python", "C#", "React JS", "SQL", "Docker", "CI/CD"].map(t => (
                                                <Badge key={t} variant="secondary" className="text-[9px] px-1.5 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>交付內部解決方案取代外部顧問服務，節省開發成本逾 <strong>50 萬新台幣</strong></li>
                                            <li>建立出勤分析平台服務 <strong>500+ 員工</strong>，將 HR 報表產製時間由 60 分鐘縮短至即時（<strong>每週節省 6 小時</strong>）</li>
                                            <li>開發庫存同步系統，管理 <strong>30+ SKU</strong> 及 <strong>20 名</strong>倉儲人員作業，減少 <strong>25%</strong> 人工負擔</li>
                                            <li>實作容器化微服務架構搭配 Docker 與 CI/CD，系統穩定性提升 <strong>40%</strong>，故障排除效率提升 <strong>75%</strong></li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* 學歷 */}
                            <m.section variants={item}>
                                <SectionTitle icon={GraduationCap}>學歷</SectionTitle>
                                <GlowingSection>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">資訊工程系碩士</p>
                                                <p className="text-xs text-slate-500">國立臺中科技大學</p>
                                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                                    <span className="font-medium">碩士論文：</span>Optimized Two-Dimensional Histogram-Based Reversible Data Hiding for JPEG
                                                </p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">影像處理</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">可逆資訊隱藏</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">資訊安全</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">AI/ML</Badge>
                                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] px-1.5 py-0">生成式AI</Badge>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">2023 – 2025</Badge>
                                        </div>
                                        <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">資訊工程系學士</p>
                                                <p className="text-xs text-slate-500">國立臺中科技大學</p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">GPA 3.83/4.0</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">排名 3/55 (Top 5%)</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">榮譽學生</Badge>
                                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] px-1.5 py-0">提前畢業</Badge>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] shrink-0">2019 – 2023</Badge>
                                        </div>
                                    </div>
                                </GlowingSection>
                            </m.section>

                            {/* 重點專案 */}
                            <m.section variants={item} className="break-inside-avoid">
                                <SectionTitle icon={Rocket}>重點專案</SectionTitle>
                                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2">
                                    {/* 專案 1 */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">Gogoro 智慧機車客服萬事通</span>
                                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1.5 py-0 shrink-0">🥇 優選獎（1st）</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">AIWave: 2024 生成式 AI 應用黑客松（Gogoro 組）</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {["LangChain", "RAG", "Agent", "AWS", "OpenSearch", "ETL", "Docker", "CI/CD"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>設計 <strong>Multi-Agent ReAct</strong> 架構，支援 <strong>12 款</strong>電動機車諮詢</li>
                                            <li>建置 RAG 系統處理 <strong>800+ 頁</strong>技術手冊，整合向量搜尋</li>
                                            <li>AWS 雲端部署：<strong>S3 + Bedrock + OpenSearch</strong></li>
                                            <li>於 <strong>30 小時</strong>馬拉松中完成完整解決方案</li>
                                        </ul>
                                    </GlowingSection>

                                    {/* 專案 2 */}
                                    <GlowingSection>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">AI 智能銷售助理</span>
                                            <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-[8px] px-1.5 py-0 shrink-0">決賽入圍</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-1.5">東森購物 電視購物網絡</p>
                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                            {["TEN-Agent", "Dify.ai", "Agent", "Bedrock", "AWS"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li><strong>三層 AI 架構</strong>：Coach → Sales → Evaluation Agent</li>
                                            <li>整合 <strong>100+ 客戶屬性</strong>實現即時個人化推薦</li>
                                            <li>AWS Bedrock + Transcribe + Polly <strong>語音 AI</strong> 堆疊</li>
                                            <li>帶領 <strong>5 人團隊</strong>完成原型開發並獲得業務認可</li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>
                        </m.div>
                    </article>

                    {/* ===== 第二頁 ===== */}
                    <article className="a4-page bg-white dark:bg-slate-950 rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden">
                        <m.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="p-5 md:p-6 print:p-[8mm] space-y-6 print:space-y-2"
                        >
                            {/* 其他專案 */}
                            <m.section variants={item}>
                                <SectionTitle icon={Code2}>專案作品</SectionTitle>
                                <div className="grid grid-cols-2 gap-2">
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">BETO Digital Hub</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["Next.js", "SAP", "Zustand", "OnlyOffice"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>整合 <strong>SAP/BI 數據</strong>，消除資料孤島</li>
                                            <li>支援<strong>多維度篩選</strong>與並列<strong>比對分析</strong></li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">Splitpush 電商平台</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["PHP", "Docker", "Alipay", "Aliyun"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li>帶領 <strong>4 人團隊</strong>交付完整電商平台</li>
                                            <li>Docker CI/CD 流程縮短 <strong>60%</strong> 部署時間</li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">FanBar - 圖片翻譯器</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["React", "Python", "PyTorch", "LLM"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li><strong>AI 驅動</strong>漫畫/圖片翻譯平台</li>
                                            <li><strong>CTD + OCR + LLM</strong> 流程搭配 LAMA 修復</li>
                                        </ul>
                                    </GlowingSection>
                                    <GlowingSection>
                                        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">TripFan - AI 旅遊助手</p>
                                        <div className="flex flex-wrap gap-1 my-1">
                                            {["Next.js", "Gemini", "Capacitor", "Zustand"].map(t => (
                                                <Badge key={t} variant="outline" className="text-[8px] px-1 py-0">{t}</Badge>
                                            ))}
                                        </div>
                                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                            <li><strong>AI 商品辨識</strong> + 菜單翻譯功能</li>
                                            <li><strong>跨平台</strong>（Web/iOS）支援動態主題</li>
                                        </ul>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* 獲獎與認證 */}
                            <m.section variants={item}>
                                <SectionTitle icon={Trophy}>獲獎與認證</SectionTitle>
                                <div className="grid grid-cols-2 gap-2">
                                    {/* 競賽獲獎 */}
                                    <GlowingSection>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                                            <span className="font-medium text-xs text-slate-700 dark:text-slate-300">競賽獲獎</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">第四名</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">第 55 屆全國技能競賽</p>
                                                    <p className="text-[9px] text-slate-500">雲端運算職類，2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">第一名</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">第 55 屆分區技能競賽青年組</p>
                                                    <p className="text-[9px] text-slate-500">雲端運算職類，2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">第一名</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">雲湧智生｜臺灣生成式 AI 應用黑客松競賽</p>
                                                    <p className="text-[9px] text-slate-500">Gogoro 智慧移動組，2024</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">第一名</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">2022 ITSA 全國大專程式設計極客挑戰賽</p>
                                                    <p className="text-[9px] text-slate-500">網頁及資訊系統組，2022</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">模範生</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">台中市模範生獎</p>
                                                    <p className="text-[9px] text-slate-500">優秀學業表現，2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowingSection>

                                    {/* 專業認證 */}
                                    <GlowingSection>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <Award className="h-3.5 w-3.5 text-orange-500" />
                                            <span className="font-medium text-xs text-slate-700 dark:text-slate-300">專業認證</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">NVIDIA</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Accelerated Data Science - Professional</p>
                                                    <p className="text-[9px] text-slate-500">2025</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[8px] px-1 py-0 shrink-0 mt-0.5">NVIDIA</Badge>
                                                <div>
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Generative AI Agents Contest</p>
                                                    <p className="text-[9px] text-slate-500">2024 • with LangChain</p>
                                                </div>
                                            </div>
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
                                                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Google Cloud 數位人才探索計畫</p>
                                                    <p className="text-[9px] text-slate-500">2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowingSection>
                                </div>
                            </m.section>

                            {/* 學術發表 */}
                            <m.section variants={item}>
                                <SectionTitle icon={BookOpen}>學術發表</SectionTitle>
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

                            {/* 社群參與 */}
                            <m.section variants={item}>
                                <SectionTitle icon={Users}>社群參與</SectionTitle>
                                <GlowingSection>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-[9px] px-1.5 py-0">AWS User Group Taiwan</Badge>
                                    </div>
                                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                                        <li><strong>技術分享：</strong>2024 年 5 月於 Meetup 分享「Multi-Agent RAG 系統實作」</li>
                                        <li><strong>志工服務：</strong>AWS Community Day (2023-2025)、AWS Summit (2024-2025)</li>
                                        <li><strong>議程主持：</strong>AWS Community Day 2025</li>
                                    </ul>
                                </GlowingSection>
                            </m.section>

                            {/* 技術能力 */}
                            <m.section variants={item}>
                                <SectionTitle icon={Code2}>技術能力</SectionTitle>
                                <GlowingSection>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">程式語言</p>
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
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">雲端與 DevOps</p>
                                            <div className="flex flex-wrap gap-1">
                                                {["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"].map(s => (
                                                    <Badge key={s} variant="secondary" className="text-[9px] px-1.5 py-0">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-xs text-slate-700 dark:text-slate-300 mb-1">資料與前端</p>
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
