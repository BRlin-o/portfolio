"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Moon, Sun, Printer, ChevronRight, ChevronLeft, Columns2, Square, ZoomIn, ZoomOut } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useResumeLayoutStore } from "@/store/resume-layout"

export function FloatingActions() {
    const { setTheme, theme } = useTheme()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { viewMode, singleScale, dualScale, toggleViewMode, zoomIn, zoomOut, resetZoom } = useResumeLayoutStore()
    const locale = useLocale()
    const router = useRouter()
    const scale = viewMode === 'single' ? singleScale : dualScale

    // Language toggle logic using next-intl locale
    // Show the TARGET language icon (what the user can switch TO)
    const isZh = locale === 'zh-TW'
    const displayLang = isZh ? 'EN' : '中'  // Show what they can switch TO
    const targetLang = isZh ? 'English' : '中文'

    const handleLanguageToggle = () => {
        if (isZh) {
            // Switch to English - use explicit /en prefix to avoid middleware redirect
            router.push('/en/resume')
        } else {
            // Switch to Chinese - go to /zh-TW/resume
            router.push('/zh-TW/resume')
        }
    }

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
                    {/* Home - locale-aware */}
                    <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <Link href={isZh ? '/zh-TW' : '/'} title="返回首頁">
                            <Home className="h-5 w-5" />
                            <span className="sr-only">返回首頁</span>
                        </Link>
                    </Button>

                    {/* Language Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleLanguageToggle}
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        title={`切換至${targetLang}版`}
                    >
                        <span className="text-sm font-semibold">{displayLang}</span>
                        <span className="sr-only">切換至{targetLang}版</span>
                    </Button>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-1" />

                    {/* View Mode Toggle: Single/Dual */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleViewMode}
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        title={viewMode === 'dual' ? "切換為單頁檢視" : "切換為雙頁並排"}
                    >
                        {viewMode === 'dual' ? (
                            <Square className="h-5 w-5" />
                        ) : (
                            <Columns2 className="h-5 w-5" />
                        )}
                        <span className="sr-only">
                            {viewMode === 'dual' ? "切換為單頁檢視" : "切換為雙頁並排"}
                        </span>
                    </Button>

                    {/* Zoom Controls */}
                    <div className="flex flex-col gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={zoomIn}
                            className="h-9 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                            title="放大"
                        >
                            <ZoomIn className="h-4 w-4" />
                            <span className="sr-only">放大</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={resetZoom}
                            className="h-7 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[10px] font-medium text-slate-500 dark:text-slate-400"
                            title="重置縮放"
                        >
                            {Math.round(scale * 100)}%
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={zoomOut}
                            className="h-9 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                            title="縮小"
                        >
                            <ZoomOut className="h-4 w-4" />
                            <span className="sr-only">縮小</span>
                        </Button>
                    </div>

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
                        <span className="sr-only">切換深淺模式</span>
                    </Button>

                    {/* Print */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.print()}
                        className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="列印 / 儲存 PDF"
                    >
                        <Printer className="h-5 w-5" />
                        <span className="sr-only">列印 / 儲存 PDF</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
