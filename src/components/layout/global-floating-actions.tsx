"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Moon, Sun, ChevronRight, ChevronLeft, User, Briefcase, FolderGit2, Award, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function GlobalFloatingActions() {
    const { setTheme, theme } = useTheme()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const navLinks = [
        { name: "About", href: "/#about", icon: User },
        { name: "Experience", href: "/#experience", icon: Briefcase },
        { name: "Projects", href: "/#projects", icon: FolderGit2 },
        { name: "Awards", href: "/#awards", icon: Award },
        { name: "Contact", href: "/#contact", icon: Mail },
    ]

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 print:hidden">
            <div className="flex items-center gap-1">
                {/* Toggle Collapse Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="h-8 w-8 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    title={isCollapsed ? "展開選單" : "收合選單"}
                >
                    {isCollapsed ? (
                        <ChevronLeft className="h-4 w-4" />
                    ) : (
                        <ChevronRight className="h-4 w-4" />
                    )}
                    <span className="sr-only">{isCollapsed ? "展開選單" : "收合選單"}</span>
                </Button>

                {/* Actions Panel */}
                <div
                    className={`flex flex-col gap-2 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300 ${isCollapsed ? "opacity-0 scale-95 pointer-events-none w-0 p-0 overflow-hidden" : "opacity-100 scale-100"
                        }`}
                >
                    {/* Home */}
                    <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <Link href="/" title="Home">
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </Button>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-1" />

                    {/* Navigation Links */}
                    {navLinks.map((link) => (
                        <Button
                            key={link.name}
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            <Link href={link.href} title={link.name}>
                                <link.icon className="h-5 w-5" />
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        </Button>
                    ))}

                    {/* Divider */}
                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-1" />

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="切換深淺模式"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
