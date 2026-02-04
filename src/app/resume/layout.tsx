import type { Metadata } from "next";
import { FloatingActions } from "@/components/resume/floating-actions";

export const metadata: Metadata = {
    title: "Resume | BR Lin",
    description: "Professional resume of Cheng-Han Lin (BR Lin) - Cloud Engineer & AI Solution Developer",
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="resume-layout bg-slate-200 dark:bg-slate-900 print:bg-white h-screen flex flex-col overflow-x-hidden overflow-y-auto">
            <FloatingActions />
            {children}
        </div>
    );
}
