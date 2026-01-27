"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LazyMotion, domAnimation, m } from "motion/react"
import { ExternalLink, FileText, Github } from "lucide-react"

export function Projects() {
    const projects = [
        {
            title: "AI-Powered Sales Agent (East Shopping)",
            category: "Featured",
            type: "Hackathon / Featured",
            description: "Innovative 3-layer AI system (Coach, Sales, Evaluation AI) for Taiwan's leading TV shopping network. Separates strategy, execution, and analysis.",
            tech: ["Python", "TEN-Agent", "Dify.ai", "AWS", "Bedrock"],
            link: "/documents/東森購物.pdf",
            linkType: "pdf",
            tags: ["Hackathon", "AI Agent"]
        },
        {
            title: "Gogoro Smart Scooter Wizard",
            category: "Featured",
            type: "Hackathon / Featured",
            description: "AI-driven customer service solution for Gogoro, utilizing RAG to handle inquiries across 12 scooter models and 800+ manual pages. First Prize Winner.",
            tech: ["Python", "LangChain", "RAG", "AWS", "Streamlit"],
            link: "/documents/雲湧智生 生成式AI黑客松 Gogoro.pdf",
            linkType: "pdf",
            tags: ["Winner", "GenAI"]
        },
        {
            title: "BETO Digital Hub",
            category: "Work",
            type: "Work Project",
            description: "Enterprise digital transformation project establishing a BI platform and data analysis system for sales/finance insights.",
            tech: ["Tableau", "Alteryx", "SAP", "ETL"],
            link: "/documents/BETO Digital Hub 初步成果會議.pdf",
            linkType: "pdf",
            tags: ["BI", "Data Eng"]
        },
        {
            title: "Splitpush inc. Ecommerce",
            category: "Work",
            type: "Work / Team Project",
            description: "Delivered full ecommerce platform with catalog, membership, cart, and loyalty systems. Led backend team of 4.",
            tech: ["PHP", "MySQL", "Docker", "Aliyun", "DevOps"],
            link: "#",
            linkType: "none",
            tags: ["Team Lead", "Backend"]
        },
        {
            title: "JPEG Codec",
            category: "Side Project",
            type: "Side Project",
            description: "Built a complete image compression system from scratch. Implemented encoder/decoder with modular architecture for research.",
            tech: ["Python", "NumPy", "OpenCV", "OOP"],
            link: "#", // Add GitHub link if available later
            linkType: "github",
            tags: ["Research", "Image Processing"]
        }
    ]

    const categories = ["All", "Featured", "Work", "Side Project"]

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
            <section id="projects" className="container py-24 md:py-32 bg-slate-50 dark:bg-transparent">
                <div className="flex flex-col gap-12">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            A selection of my work in AI, Cloud, and Software Engineering.
                        </p>
                    </m.div>

                    <Tabs defaultValue="All" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList>
                                {categories.map(cat => (
                                    <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {categories.map(cat => (
                            <TabsContent key={cat} value={cat}>
                                <m.div
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                >
                                    {projects
                                        .filter(p => cat === "All" || p.category === cat || (cat === "Featured" && p.category === "Featured"))
                                        .map((project, index) => (
                                            <m.div key={index} variants={item}>
                                                <Card className="flex flex-col h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                                                    <CardHeader>
                                                        <div className="flex justify-between items-start">
                                                            <Badge variant={project.category === "Featured" ? "default" : "secondary"}>
                                                                {project.type}
                                                            </Badge>
                                                            {project.linkType !== "none" && (
                                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                                                    {project.linkType === "pdf" ? <FileText className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
                                                                </a>
                                                            )}
                                                        </div>
                                                        <CardTitle className="mt-4">{project.title}</CardTitle>
                                                        <CardDescription>{project.description}</CardDescription>
                                                    </CardHeader>
                                                    <CardContent className="flex-1">
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map(t => (
                                                                <Badge key={t} variant="outline" className="opacity-80">{t}</Badge>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter>
                                                        {project.linkType === "pdf" && (
                                                            <Button variant="ghost" className="w-full" asChild>
                                                                <a href={project.link} target="_blank">View Presentation</a>
                                                            </Button>
                                                        )}
                                                        {project.linkType === "github" && (
                                                            <Button variant="ghost" className="w-full" disabled>
                                                                <Github className="mr-2 h-4 w-4" /> Code not public
                                                            </Button>
                                                        )}
                                                    </CardFooter>
                                                </Card>
                                            </m.div>
                                        ))}
                                </m.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </LazyMotion>
    )
}
