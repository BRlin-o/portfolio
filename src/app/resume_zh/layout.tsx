import type { Metadata } from "next"
import { FloatingActions } from "@/components/resume/floating-actions"

export const metadata: Metadata = {
    title: "履歷 | 林承漢 - 雲端架構師暨AI解決方案開發者",
    description: "林承漢（Steven Lin）個人履歷 - 專精雲端運算、生成式AI應用與資料工程，具備多項AWS認證與黑客松優勝紀錄。",
}

export default function ResumeZhLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="resume-layout bg-slate-200 dark:bg-slate-900 print:bg-white h-screen flex flex-col overflow-x-hidden overflow-y-auto">
            <FloatingActions />
            {children}
        </div>
    )
}
