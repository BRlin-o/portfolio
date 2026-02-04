"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LazyMotion, domAnimation, m } from "motion/react"
import { GraduationCap, Code2, Users, Trophy } from "lucide-react"

export function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
                <m.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                    className="flex flex-col gap-12"
                >
                    <m.div variants={item} className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Combining academic depth in Information Security with practical expertise in Cloud & AI.
                        </p>
                    </m.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Education Card */}
                        <m.div variants={item} className="lg:col-span-2">
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                        <CardTitle>Education</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <div className="flex justify-between font-semibold">
                                            <span>MS, Computer Science and Information Engineering</span>
                                            <span className="text-muted-foreground">2023 - 2025</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">National Taichung University of Science and Technology</p>
                                        <p className="mt-2 text-sm">Thesis: Optimized Two-Dimensional Histogram-Based Reversible Data Hiding Technique for JPEG</p>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {["Security", "Image Processing", "Reversible Data Hiding", "AI/ML", "GenAI"].map((field) => (
                                                <Badge key={field} variant="outline" className="text-xs">{field}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-semibold">
                                            <span>BS, Computer Science and Information Engineering</span>
                                            <span className="text-muted-foreground">2019 - 2023</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">National Taichung University of Science and Technology</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <Badge variant="secondary">GPA 3.83/4.0</Badge>
                                            <Badge variant="secondary">Top 5% (3/55)</Badge>
                                            <Badge variant="secondary">Honor Student</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </m.div>

                        {/* Community Card */}
                        <m.div variants={item}>
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        <CardTitle>Community</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-semibold">AWS User Group Taiwan</p>
                                        <p className="text-sm text-muted-foreground">Active Member & Speaker</p>
                                        <p className="mt-2 text-sm">Shared "Multi-Agent RAG System Implementation" at May 2024 Meetup.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Volunteer Experience</p>
                                        <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                                            <li>AWS Community Day (2023-2025)</li>
                                            <li>AWS Summit (2024-2025)</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </m.div>

                        {/* Skills Card */}
                        <m.div variants={item} className="lg:col-span-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Code2 className="h-5 w-5 text-primary" />
                                        <CardTitle>Technical Skills</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Languages</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Python", "TypeScript", "C++", "C#", "Go"].map((s) => (
                                                    <Badge key={s} variant="outline">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">AI / ML</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["PyTorch", "LangChain", "RAG", "Agentic Workflow", "TensorFlow"].map((s) => (
                                                    <Badge key={s} variant="outline">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Cloud & DevOps</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"].map((s) => (
                                                    <Badge key={s} variant="outline">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Data & Tools</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Tableau", "Alteryx", "PostgreSQL", "React", "Next.js"].map((s) => (
                                                    <Badge key={s} variant="outline">{s}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </m.div>

                    </div>
                </m.div>
            </section>
        </LazyMotion>
    )
}
