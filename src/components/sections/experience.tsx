"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyMotion, domAnimation, m } from "motion/react"
import { useTranslations } from 'next-intl'

export function Experience() {
    const t = useTranslations('Experience')

    const experiences = [
        {
            company: t('job1Company'),
            role: t('job1Role'),
            period: t('job1Period'),
            description: [
                t('job1Desc1'),
                t('job1Desc2'),
                t('job1Desc3'),
                t('job1Desc4')
            ],
            skills: ["Tableau", "Alteryx", "SAP", "ETL", "BI", "Data Analysis"]
        },
        {
            company: t('job1Company'),
            role: t('job2Role'),
            period: t('job2Period'),
            description: [
                t('job2Desc1'),
                t('job2Desc2'),
                t('job2Desc3'),
                t('job2Desc4')
            ],
            skills: ["Python", "C#", "React.js", "Docker", "DevOps"]
        }
    ]

    return (
        <LazyMotion features={domAnimation}>
            <section id="experience" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t('title')}</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            {t('subtitle')}
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
