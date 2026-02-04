"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"
import { Trophy, Award, X, ZoomIn } from "lucide-react"
import Image from "next/image"

export function Awards() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
    const [isCarouselPaused, setIsCarouselPaused] = useState(false)

    const awards = [
        {
            title: "AIWave: Taiwan Generative AI Applications Hackathon",
            rank: "1st Place (Superior Award)",
            category: "AI & Innovation",
            organizer: "DIGITIMES • National Development Council • AWS",
            year: "2024",
            image: "/awards/AIWave2024-gogoro-1st.jpg",
            desc: "Smart Mobility – Gogoro Category. Built an AI assistant for Gogoro e-scooters using Claude 3 on Amazon Bedrock. Unanimously awarded by all judges."
        },
        {
            title: "55th Central Skills Competition",
            rank: "1st Place",
            category: "Cloud Computing",
            organizer: "Ministry of Labor",
            year: "2025",
            image: "/awards/55中區賽-1st.JPG",
            desc: "Regional competition showcasing advanced cloud architecture and DevOps skills."
        },
        {
            title: "2022 ITSA Programming Geek Contest",
            rank: "1st Place",
            category: "Web Development",
            organizer: "Ministry of Education",
            year: "2022",
            image: "/awards/ITSA2022全國網頁組-1st.jpg",
            desc: "Information System & Web Applications Division. National-level programming competition focused on web technologies."
        },
        {
            title: "55th National Skills Competition",
            rank: "4th Place",
            category: "Cloud Computing",
            organizer: "Ministry of Labor",
            year: "2025",
            image: "/awards/55全國賽-4th.jpg",
            desc: "National finals representing excellence in cloud computing and infrastructure management."
        },
        {
            title: "Taichung City Honors Student Award",
            rank: "Honor Student",
            category: "Academic Excellence",
            organizer: "Taichung City Government",
            year: "2023",
            image: "/awards/台中市模範生.jpg",
            desc: "Recognition for outstanding academic performance and contributions to the community."
        }
    ]

    const certifications = [
        {
            name: "NVIDIA-Certified Professional: Accelerated Data Science",
            issuer: "NVIDIA",
            year: "2026",
            image: "/badges/nvidia-accelerated-data-scie-profes.png",
            type: "badge" as const
        },
        {
            name: "AWS Certified: Machine Learning Engineer - Associate",
            issuer: "AWS",
            year: "2025",
            image: "/badges/aws-ml-assoc.png",
            type: "badge" as const
        },
        {
            name: "AWS Certified: Data Engineer - Associate",
            issuer: "AWS",
            year: "2024",
            image: "/badges/aws-data-assoc.png",
            type: "badge" as const
        },
        {
            name: "Gemini Certified Educator",
            issuer: "Google",
            year: "2025",
            image: "/awards/Gemini Certified Educator.jpg",
            type: "certificate" as const
        },
        {
            name: "Google Cloud Digital Talent Exploration",
            issuer: "Google",
            year: "2024",
            image: "/awards/Google Cloud 學程結業證書.jpg",
            type: "certificate" as const
        }
    ]

    return (
        <LazyMotion features={domAnimation}>
            <section id="awards" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Awards & Certifications</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Recognition of my technical expertise and competitive achievements.
                        </p>
                    </div>

                    {/* Awards Grid - Modern Card Style */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Trophy className="h-6 w-6 text-yellow-500" />
                            <h3 className="text-2xl font-semibold">Awards</h3>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {awards.map((award, index) => (
                                <m.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="group overflow-hidden h-full flex flex-col rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                                        {/* Image Section */}
                                        <div className="p-4 pb-0">
                                            <div
                                                className="relative h-56 w-full overflow-hidden bg-muted rounded-xl cursor-pointer"
                                                onClick={() => setLightboxImage({ src: award.image, alt: award.title })}
                                            >
                                                <Image
                                                    src={award.image}
                                                    alt={award.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                {/* Hover Overlay with Zoom Icon */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                    <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <CardContent className="flex flex-col flex-1 p-6">
                                            {/* Category Badge & Rank */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <Badge variant="secondary" className="text-xs font-medium rounded-full px-3">
                                                    {award.category}
                                                </Badge>
                                                <Badge className="bg-yellow-500/90 hover:bg-yellow-500 text-yellow-950 text-xs border-none rounded-full px-3">
                                                    {award.rank}
                                                </Badge>
                                            </div>

                                            {/* Title */}
                                            <h4 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
                                                {award.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-sm text-muted-foreground line-clamp-3 flex-1 mb-4">
                                                {award.desc}
                                            </p>

                                            {/* Footer - Organizer & Date */}
                                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-muted-foreground">Organized by</span>
                                                    <span className="text-sm font-medium">{award.organizer}</span>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-xs text-muted-foreground">Awarded</span>
                                                    <span className="text-sm font-medium">{award.year}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </m.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications - Infinite Marquee Carousel */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Certifications</h3>
                        </div>

                        {/* Marquee Container */}
                        <div
                            className="relative overflow-hidden"
                            onMouseEnter={() => setIsCarouselPaused(true)}
                            onMouseLeave={() => setIsCarouselPaused(false)}
                        >
                            {/* Gradient masks for fade effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                            {/* Scrolling Track */}
                            <div
                                className={`flex gap-6 w-fit animate-marquee ${isCarouselPaused ? "animate-marquee-paused" : ""}`}
                            >
                                {/* Double items for seamless infinite loop */}
                                {[...certifications, ...certifications].map((cert, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-64"
                                    >
                                        <Card className="group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 h-full">
                                            <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                                {/* Fixed height image container - ensures text alignment */}
                                                <div className="h-44 w-full flex items-center justify-center mb-4">
                                                    <div
                                                        className={`relative transition-transform duration-300 group-hover:scale-105 cursor-pointer ${cert.type === "certificate"
                                                            ? "h-44 w-44"
                                                            : "h-32 w-32"
                                                            }`}
                                                        onClick={() => setLightboxImage({ src: cert.image, alt: cert.name })}
                                                    >
                                                        <Image
                                                            src={cert.image}
                                                            alt={cert.name}
                                                            fill
                                                            className="object-contain"
                                                            sizes={cert.type === "certificate" ? "176px" : "128px"}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Certification Name */}
                                                <h4 className="font-medium text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                                                    {cert.name}
                                                </h4>

                                                {/* Issuer & Year */}
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
                                                    <span className="font-medium text-foreground/80">{cert.issuer}</span>
                                                    <span>•</span>
                                                    <span>{cert.year}</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </m.div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>

                        {/* Image Container */}
                        <m.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[85vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage.src}
                                alt={lightboxImage.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </m.div>

                        {/* Caption */}
                        <m.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                        >
                            {lightboxImage.alt}
                        </m.p>
                    </m.div>
                )}
            </AnimatePresence>
        </LazyMotion >
    )
}
