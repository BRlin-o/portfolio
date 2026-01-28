"use client";

import React, { useEffect, useRef, useCallback, memo, useState } from "react";
import { animate } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}

const GlowingEffect = memo(
    ({
        blur = 0,
        inactiveZone = 0.7,
        proximity = 0,
        spread = 20,
        variant = "default",
        glow = false,
        className,
        movementDuration = 2,
        borderWidth = 1,
        disabled = true,
    }: GlowingEffectProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const glowRef = useRef<HTMLDivElement>(null);
        const lastPosition = useRef({ x: 0, y: 0 });
        const animationFrameRef = useRef<number>(0);
        const [isActive, setIsActive] = useState(false);
        const [currentAngle, setCurrentAngle] = useState(0);

        const gradient =
            variant === "white"
                ? `repeating-conic-gradient(
                    from 236.84deg at 50% 50%,
                    var(--black),
                    var(--black) 5%
                  )`
                : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                   radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                   radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                   radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                   repeating-conic-gradient(
                     from 236.84deg at 50% 50%,
                     #dd7bbb 0%,
                     #d79f1e 5%,
                     #5a922c 10%, 
                     #4c7894 15%,
                     #dd7bbb 20%
                   )`;

        const handleMove = useCallback(
            (e?: MouseEvent | { x: number; y: number }) => {
                if (!containerRef.current || !glowRef.current) return;

                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }

                animationFrameRef.current = requestAnimationFrame(() => {
                    const element = containerRef.current;
                    const glowElement = glowRef.current;
                    if (!element || !glowElement) return;

                    const { left, top, width, height } = element.getBoundingClientRect();
                    const mouseX = e?.x ?? lastPosition.current.x;
                    const mouseY = e?.y ?? lastPosition.current.y;

                    if (e) {
                        lastPosition.current = { x: mouseX, y: mouseY };
                    }

                    const center = [left + width * 0.5, top + height * 0.5];
                    const distanceFromCenter = Math.hypot(
                        mouseX - center[0],
                        mouseY - center[1]
                    );
                    const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

                    if (distanceFromCenter < inactiveRadius) {
                        setIsActive(false);
                        return;
                    }

                    const isMouseActive =
                        mouseX > left - proximity &&
                        mouseX < left + width + proximity &&
                        mouseY > top - proximity &&
                        mouseY < top + height + proximity;

                    setIsActive(isMouseActive);

                    if (!isMouseActive) return;

                    const prevAngle =
                        parseFloat(glowElement.dataset.angle || "0") || 0;
                    let targetAngle =
                        (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
                        Math.PI +
                        90;

                    const angleDiff = ((targetAngle - prevAngle + 180) % 360) - 180;
                    const newAngle = prevAngle + angleDiff;

                    animate(prevAngle, newAngle, {
                        duration: movementDuration,
                        ease: [0.16, 1, 0.3, 1],
                        onUpdate: (value) => {
                            if (glowElement) {
                                glowElement.dataset.angle = String(value);
                                setCurrentAngle(value);
                            }
                        },
                    });
                });
            },
            [inactiveZone, proximity, movementDuration]
        );

        useEffect(() => {
            if (disabled) return;

            const handleScroll = () => handleMove();
            const handlePointerMove = (e: PointerEvent) => handleMove(e);

            window.addEventListener("scroll", handleScroll, { passive: true });
            document.body.addEventListener("pointermove", handlePointerMove, {
                passive: true,
            });

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                window.removeEventListener("scroll", handleScroll);
                document.body.removeEventListener("pointermove", handlePointerMove);
            };
        }, [handleMove, disabled]);

        // Generate mask-image CSS
        const maskImage = `linear-gradient(#0000, #0000), conic-gradient(from ${currentAngle - spread}deg, transparent 0deg, #fff ${spread}deg, transparent ${spread * 2}deg)`;

        return (
            <>
                {/* Fallback border when disabled */}
                <div
                    className={cn(
                        "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity print:hidden",
                        glow && "opacity-100",
                        variant === "white" && "border-white",
                        disabled && "!block"
                    )}
                />
                {/* Main glow container */}
                <div
                    ref={containerRef}
                    className={cn(
                        "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity print:hidden",
                        glow && "opacity-100",
                        blur > 0 && `blur-[${blur}px]`,
                        className,
                        disabled && "!hidden"
                    )}
                >
                    {/* Glow effect layer - using real element instead of ::after */}
                    <div
                        ref={glowRef}
                        className="absolute rounded-[inherit] transition-opacity duration-300 overflow-hidden"
                        style={{
                            inset: `-${borderWidth}px`,
                            border: `${borderWidth}px solid transparent`,
                            background: gradient,
                            backgroundAttachment: "fixed",
                            opacity: isActive ? 1 : 0,
                            maskImage: maskImage,
                            WebkitMaskImage: maskImage,
                            maskClip: "padding-box, border-box",
                            WebkitMaskClip: "padding-box, border-box",
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                </div>
            </>
        );
    }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
