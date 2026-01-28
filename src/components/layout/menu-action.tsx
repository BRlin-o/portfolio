"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Home, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MenuAction() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { setTheme, theme } = useTheme()
    const containerRef = React.useRef<HTMLDivElement>(null)

    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div ref={containerRef} className="fixed right-6 top-6 z-50 print:hidden">
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative"
            >
                {/* Trigger Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 h-10 w-10 rounded-full border border-white/10 bg-background/50 text-foreground backdrop-blur-md hover:bg-background/80"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-5 w-5" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-5 w-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>

                {/* Dropdown Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
                            className="absolute right-0 top-12 flex w-48 flex-col gap-2 rounded-2xl border border-white/10 bg-background/80 p-3 shadow-xl backdrop-blur-xl"
                        >
                            <Link href="/">
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                    <Home className="h-4 w-4" />
                                    Home
                                </motion.div>
                            </Link>

                            <Link href="/resume">
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                    <FileText className="h-4 w-4" />
                                    Resume
                                </motion.div>
                            </Link>

                            <div className="my-1 h-px bg-border/50" />

                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                                <div className="flex items-center gap-3">
                                    {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                    <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                                </div>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
