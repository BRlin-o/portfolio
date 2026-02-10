"use client";

import { useEffect, useState } from "react";
import { type Variants } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";

interface TypewriterProps {
    text: string[];
    speed?: number;
    deleteSpeed?: number;
    waitTime?: number;
    loop?: boolean;
    className?: string;
    cursorChar?: string | React.ReactNode;
    cursorClassName?: string;
}

export function Typewriter({
    text,
    speed = 50,
    deleteSpeed = 30,
    waitTime = 2000,
    loop = true,
    className,
    cursorChar = "|",
    cursorClassName = "ml-1",
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textArrayIndex, setTextArrayIndex] = useState(0);

    useEffect(() => {
        const currentString = text[textArrayIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentIndex < currentString.length) {
                        setDisplayText((prev) => prev + currentString[currentIndex]);
                        setCurrentIndex((prev) => prev + 1);
                    } else {
                        if (loop) {
                            setTimeout(() => setIsDeleting(true), waitTime);
                        }
                    }
                } else {
                    if (currentIndex > 0) {
                        setDisplayText((prev) => prev.slice(0, -1));
                        setCurrentIndex((prev) => prev - 1);
                    } else {
                        setIsDeleting(false);
                        setTextArrayIndex((prev) => (prev + 1) % text.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [
        currentIndex,
        isDeleting,
        text,
        textArrayIndex,
        speed,
        deleteSpeed,
        waitTime,
        loop,
    ]);

    const cursorVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    return (
        <span className={cn("inline", className)}>
            <span>{displayText || "\u200B"}</span>
            <m.span
                variants={cursorVariants}
                initial="initial"
                animate="animate"
                className={cn("inline-block", cursorClassName)}
            >
                {cursorChar}
            </m.span>
        </span>
    );
}
