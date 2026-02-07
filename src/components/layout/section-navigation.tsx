"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const sections = [
    { id: "hero", label: "HOME" },
    { id: "about-me", label: "ABOUT ME" },
    { id: "background", label: "BACKGROUND" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "awards", label: "AWARDS" },
    { id: "contact", label: "CONTACT" },
]

export function SectionNavigation() {
    const [activeSection, setActiveSection] = React.useState("hero")

    React.useEffect(() => {
        // Use scroll-based detection for more reliable section tracking
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2

            let closestSection = sections[0].id
            let closestDistance = Infinity

            sections.forEach((section) => {
                const element = document.getElementById(section.id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // Calculate distance from section's center to viewport center
                    const sectionCenter = rect.top + rect.height / 2
                    const distance = Math.abs(sectionCenter - viewportCenter)

                    if (distance < closestDistance) {
                        closestDistance = distance
                        closestSection = section.id
                    }
                }
            })

            setActiveSection(closestSection)
        }

        // Initial check
        handleScroll()

        // Throttled scroll handler for performance
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <div className="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-6 print:hidden">
            {sections.map((section) => {
                const isActive = activeSection === section.id

                return (
                    <div
                        key={section.id}
                        className="group relative flex items-center justify-end"
                    >
                        {/* Label (Reveals on Hover) */}
                        <div className="absolute right-8 mr-4 pointer-events-none">
                            <div
                                className={cn(
                                    "px-6 py-2 rounded-full font-semibold uppercase tracking-widest text-xs whitespace-nowrap shadow-md transition-all duration-300 ease-out",
                                    "opacity-0 translate-x-4 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100",
                                    // Light Mode Styles (White background, dark text, subtle shadow)
                                    "bg-white text-slate-900 shadow-slate-200",
                                    // Dark Mode Styles (Dark background, white text, glass border)
                                    "dark:bg-slate-800 dark:text-slate-100 dark:shadow-black/50 dark:border dark:border-slate-700"
                                )}
                            >
                                {section.label}
                            </div>
                        </div>

                        {/* Interactive Area */}
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className="relative flex h-8 w-4 items-center justify-center outline-none"
                            aria-label={`Scroll to ${section.label}`}
                        >
                            {/* Inactive Dot (Hidden when active) */}
                            {!isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600 transition-colors group-hover:bg-slate-400 dark:group-hover:bg-slate-400"
                                />
                            )}

                            {/* Active Pill (Morphs in) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeSection"
                                    className={cn(
                                        "absolute h-7 w-1.5 rounded-lg shadow-[0_0_10px_rgba(124,58,237,0.5)]",
                                        "bg-primary" // Use primary color (usually purple/dark)
                                    )}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
