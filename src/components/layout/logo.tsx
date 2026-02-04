import Link from "next/link"
import Image from "next/image"

export function Logo() {
    return (
        <Link href="/" className="fixed top-6 left-6 z-50 transition-transform hover:scale-105">
            <Image
                src="/logo.webp"
                alt="BR Lin"
                width={72}
                height={72}
                className="rounded-full shadow-lg border-2 border-white/20"
                priority
            />
        </Link>
    )
}
