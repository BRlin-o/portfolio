"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyMotion, domAnimation, m } from "motion/react"
import { Trophy, Award } from "lucide-react"
import Image from "next/image"

export function Awards() {
    const awards = [
        {
            title: "AIWave: Taiwan Generative AI Applications Hackathon",
            rank: "1st Place (Superior Award)",
            year: "2024",
            image: "/awards/AIWave2024-gogoro-1st.jpg",
            desc: "Smart Mobility – Gogoro Category"
        },
        {
            title: "55th Central Skills Competition",
            rank: "1st Place",
            year: "2025",
            image: "/awards/55中區賽-1st.JPG",
            desc: "Cloud Computing"
        },
        {
            title: "ITSA 2022 National Collegiate Programming Contest",
            rank: "1st Place",
            year: "2022",
            image: "/awards/ITSA2022全國網頁組-1st.jpg",
            desc: "Web & Info Systems Group"
        },
        {
            title: "55th National Skills Competition",
            rank: "4th Place",
            year: "2025",
            image: "/awards/55全國賽-4th.jpg",
            desc: "Cloud Computing"
        }
    ]

    const certifications = [
        {
            name: "AWS Certified: Machine Learning Engineer - Associate",
            issuer: "AWS",
            year: "2025",
            image: "/badges/aws-ml-assoc.png"
        },
        {
            name: "AWS Certified: Data Engineer - Associate",
            issuer: "AWS",
            year: "2024",
            image: "/badges/aws-data-assoc.png"
        },
        {
            name: "Gemini Certified Educator",
            issuer: "Google",
            year: "2025",
            image: "/awards/Gemini Certified Educator.jpg" // Using image from awards based on data
        },
        {
            name: "Google Cloud Digital Talent Exploration",
            issuer: "Google",
            year: "2024",
            image: "/awards/Google Cloud 學程結業證書.jpg"
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

                    {/* Awards Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Trophy className="h-6 w-6 text-yellow-500" />
                            <h3 className="text-2xl font-semibold">Competition Awards</h3>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {awards.map((award, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={award.image}
                                            alt={award.title}
                                            fill
                                            className="object-cover transition-transform hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <CardHeader className="p-4">
                                        <Badge className="w-fit bg-yellow-500 hover:bg-yellow-600 border-none">{award.rank}</Badge>
                                        <CardTitle className="line-clamp-2 text-lg mt-2">{award.title}</CardTitle>
                                        <CardDescription>{award.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Certifications</h3>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {certifications.map((cert, index) => (
                                <Card key={index} className="flex flex-row items-center gap-4 p-4 sm:flex-col sm:text-center sm:p-6">
                                    <div className="relative h-16 w-16 shrink-0 sm:h-24 sm:w-24">
                                        <Image
                                            src={cert.image}
                                            alt={cert.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100px, 150px"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 sm:items-center">
                                        <h4 className="font-semibold line-clamp-2">{cert.name}</h4>
                                        <p className="text-sm text-muted-foreground">{cert.issuer}, {cert.year}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </m.div>
            </section>
        </LazyMotion>
    )
}
