"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'zh-TW' : 'en'

        // Remove current locale from pathname if present
        let newPathname = pathname
        if (pathname.startsWith('/en')) {
            newPathname = pathname.replace('/en', '') || '/'
        } else if (pathname.startsWith('/zh-TW')) {
            newPathname = pathname.replace('/zh-TW', '') || '/'
        }

        // Add new locale prefix (except for default locale 'en')
        if (newLocale === 'zh-TW') {
            newPathname = `/zh-TW${newPathname === '/' ? '' : newPathname}`
        }

        router.push(newPathname)
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="gap-2"
            title={locale === 'en' ? '切換至中文' : 'Switch to English'}
        >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">
                {locale === 'en' ? '中文' : 'EN'}
            </span>
        </Button>
    )
}
