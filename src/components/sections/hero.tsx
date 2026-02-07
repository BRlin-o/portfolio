"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, FileText } from "lucide-react"
import { LazyMotion, domAnimation, m } from "motion/react"
import * as motion from "motion/react-m"
import { Typewriter } from "@/components/ui/typewriter-text"


export function Hero() {
    return (
        <LazyMotion features={domAnimation}>
            <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 pb-32">
                {/* Abstract Background */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-background">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                    <div className="absolute bottom-0 right-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </div>

                <div className="container flex flex-col items-center gap-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="rounded-full border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                            Available for Opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                            <Typewriter
                                text={["Cheng-Han", "Steven", "BR"]}
                                speed={100}
                                deleteSpeed={100}
                                waitTime={3000}
                            // cursorChar={"_"}
                            // cursorClassName="ml-0"
                            />Lin
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    >
                        Cloud Engineer & AI Solution Developer.<br className="hidden sm:inline" />
                        Specializing in Generative AI, RAG Systems, and Scalable Cloud Architectures.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-4 flex gap-4"
                    >
                        <Button size="lg" asChild>
                            <a href="#about-me">
                                About Me <ArrowDown className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/resume">
                                View Resume <FileText className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </LazyMotion>
    )
}
