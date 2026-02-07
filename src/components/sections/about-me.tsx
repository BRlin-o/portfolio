"use client"

import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "motion/react"
import { ExternalLink, Trophy } from "lucide-react"

export function AboutMe() {
    const certifications = [
        { name: "NVIDIA Accelerated Data Science", image: "/badges/nvidia-accelerated-data-scie-profes.webp" },
        { name: "AWS ML Associate", image: "/badges/aws-ml-assoc.webp" },
        { name: "AWS Data Engineer", image: "/badges/aws-data-assoc.webp" },
        { name: "Google Cloud", image: "/badges/google-cloud.webp" },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <LazyMotion features={domAnimation}>
            <section
                id="about-me"
                className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950"
            >
                {/* Background gradient - theme aware */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

                {/* Content Container - Full height flex centering */}
                <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24 lg:py-20 relative z-10 w-full">
                    <m.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={container}
                        className="flex flex-col items-center gap-10 lg:gap-16"
                    >
                        {/* Section Label */}
                        <m.div variants={item} className="flex items-center gap-4">
                            <span className="h-px w-16 bg-primary/30" />
                            <span className="text-sm tracking-[0.3em] text-primary/70 uppercase font-medium">About Me</span>
                            <span className="h-px w-16 bg-primary/30" />
                        </m.div>

                        {/* Two Column Layout - Larger proportions */}
                        <div className="grid gap-12 lg:gap-20 xl:gap-28 lg:grid-cols-2 items-center w-full max-w-7xl">

                            {/* Left - Portrait - Larger sizes */}
                            <m.div variants={item} className="flex justify-center lg:justify-end">
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-primary/20 dark:via-purple-500/10" />

                                    {/* Portrait - Responsive sizes: mobile -> tablet -> desktop -> large desktop */}
                                    <div className="relative w-80 sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                                        <Image
                                            src="/steven-portrait.png"
                                            alt="林承漢 Cheng-Han Lin"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                            sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, (max-width: 1280px) 416px, 448px"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                        {/* Name & Stats Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">林承漢</h3>
                                            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 md:mb-6">Cheng-Han Lin (Steven)</p>
                                            <div className="flex gap-8">
                                                <div className="text-center">
                                                    <span className="block text-2xl sm:text-3xl font-bold text-white">2+</span>
                                                    <span className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Years</span>
                                                </div>
                                                <div className="w-px bg-white/20" />
                                                <div className="text-center">
                                                    <span className="block text-2xl sm:text-3xl font-bold text-white">10+</span>
                                                    <span className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Projects</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </m.div>

                            {/* Right - Content - Larger text */}
                            <m.div variants={item} className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
                                {/* Title */}
                                <div>
                                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-2 md:mb-3">Cloud Engineer & AI Solution Developer</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
                                        Building{" "}
                                        <span className="bg-gradient-to-r from-primary via-purple-500 to-purple-600 bg-clip-text text-transparent">
                                            Scalable AI
                                        </span>
                                        <br className="hidden md:block" />
                                        {" "}Solutions
                                    </h2>
                                </div>

                                {/* Summary - Following Resume Writing Style - Larger text */}
                                <div className="space-y-4 md:space-y-5 text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed">
                                    <p>
                                        <strong className="text-slate-900 dark:text-slate-100">電腦科學與資訊工程碩士</strong>，
                                        研究領域涵蓋資訊安全與影像處理，專精於
                                        <strong className="text-primary dark:text-primary">生成式 AI 應用</strong>與
                                        <strong className="text-primary dark:text-primary">雲端解決方案架構</strong>。
                                    </p>
                                    <p>
                                        透過多代理系統 (Multi-Agent)、RAG 框架及 AWS/GCP 雲端服務，成功交付企業級可擴展 AI 解決方案。
                                        持有 <strong className="text-primary dark:text-primary">NVIDIA、AWS、Google Cloud 等國際認證</strong>，
                                        於多項黑客松及全國性競賽獲得佳績，具備帶領技術團隊與推動數位轉型之實務經驗。
                                    </p>
                                </div>

                                {/* Highlighted Awards */}
                                <div className="pt-4">
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 md:mb-5">Highlighted Awards</p>
                                    <ul className="space-y-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
                                        <li className="flex items-start gap-3">
                                            <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span>
                                                <strong className="text-slate-900 dark:text-slate-100">第 55 屆全國技能競賽</strong>
                                                {" "}— 全國第四名 & 中區第一名
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span>
                                                <strong className="text-slate-900 dark:text-slate-100">雲湧智生｜臺灣生成式 AI 應用黑客松競賽</strong>
                                                {" "}— Gogoro 智慧移動組 第一名
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span>
                                                <strong className="text-slate-900 dark:text-slate-100">2022 ITSA 全國大專程式設計極客挑戰賽</strong>
                                                {" "}— 網頁及資訊系統組 第一名
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Certifications - Larger badges */}
                                <div className="pt-4">
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 md:mb-5">Professional Certifications</p>
                                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4">
                                        {certifications.map((cert, index) => (
                                            <m.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                className="group relative"
                                                title={cert.name}
                                            >
                                                <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-2 transition-all duration-300 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-primary/5">
                                                    <Image
                                                        src={cert.image}
                                                        alt={cert.name}
                                                        fill
                                                        className="object-contain p-2"
                                                        sizes="96px"
                                                    />
                                                </div>
                                            </m.div>
                                        ))}
                                        {/* View All Link */}
                                        <Link
                                            href="#awards"
                                            className="flex flex-col items-center justify-center h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-dashed border-slate-300 dark:border-slate-600 transition-all duration-300 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 group"
                                        >
                                            <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">View All</span>
                                            <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-slate-400 dark:text-slate-500 group-hover:text-primary mt-1" />
                                        </Link>
                                    </div>
                                </div>
                            </m.div>
                        </div>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    )
}
