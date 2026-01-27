"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LazyMotion, domAnimation, m } from "motion/react"
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react"

export function Contact() {
    return (
        <LazyMotion features={domAnimation}>
            <section id="contact" className="container py-24 md:py-32">
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="mx-auto max-w-3xl bg-primary text-primary-foreground">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold sm:text-4xl">Get in Touch</CardTitle>
                            <CardDescription className="text-primary-foreground/80 text-lg mt-2">
                                Interested in collaboration or have a project in mind? Let's connect.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-6 mt-4">
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button variant="secondary" size="lg" asChild className="gap-2">
                                    <a href="mailto:brend.main@gmail.com">
                                        <Mail className="h-5 w-5" /> Email Me
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                    <a href="https://linkedin.com/in/cheng-han-lin-br" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-5 w-5" /> LinkedIn
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                    <a href="https://github.com/BRlin-o" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-5 w-5" /> GitHub
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </m.div>

                <div className="mt-16 flex justify-center">
                    <Button variant="ghost" size="icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>

                <footer className="mt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} BR Lin. All rights reserved.</p>
                    <p className="mt-1">Built with Next.js, Tailwind CSS, & shadcn/ui</p>
                </footer>
            </section>
        </LazyMotion>
    )
}
