"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyMotion, domAnimation, m } from "motion/react"
import { Briefcase } from "lucide-react"

export function Experience() {
    const experiences = [
        {
            company: "BETO ENG. & MKTG., CO., LTD.",
            role: "Data Engineer & Executive Assistant (Part-time)",
            period: "Sep 2023 - Dec 2024",
            description: [
                "Led digital transformation for Sales & Finance depts (50+ users), reducing report prep time by 40%.",
                "Developed 10+ interactive BI dashboards (Tableau/Alteryx) for C-level insights.",
                "Optimized ETL pipelines for SAP data, improving cross-team efficiency by 30%.",
                "Conducted market research on GenAI & BI trends from 20+ tech conferences (AWS Summit, etc.)."
            ],
            skills: ["Tableau", "Alteryx", "ETL", "BI", "Data Analysis"]
        },
        {
            company: "BETO ENG. & MKTG., CO., LTD.",
            role: "Software Engineer",
            period: "Jan 2023 - Sep 2023",
            description: [
                "Delivered internal solutions saving 500k+ TWD in external consulting costs.",
                "Built Attendance Analysis Platform serving 500+ employees, reducing HR reporting time from 60min to instant.",
                "Automated inventory sync for 30+ SKUs, cutting manual workload by 25%.",
                "Implemented containerized microservices (Docker, CI/CD), improving stability by 40%."
            ],
            skills: ["Python", "C#", "React.js", "Docker", "DevOps"]
        }
    ]

    return (
        <LazyMotion features={domAnimation}>
            <section id="experience" className="container py-24 md:py-32">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Professional Experience</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Proven track record in software engineering and data-driven solutions.
                        </p>
                    </div>

                    <div className="mx-auto flex max-w-3xl flex-col gap-8">
                        {experiences.map((job, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border last:before:hidden"
                            >
                                <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />

                                <Card>
                                    <CardHeader>
                                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                            <div>
                                                <CardTitle className="text-xl">{job.role}</CardTitle>
                                                <CardDescription className="text-base font-semibold text-primary">{job.company}</CardDescription>
                                            </div>
                                            <Badge variant="secondary" className="w-fit">{job.period}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                                            {job.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {job.skills.map(skill => (
                                                <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </section>
        </LazyMotion>
    )
}
