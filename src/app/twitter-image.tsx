import { ImageResponse } from "next/og";
import { LOGO_BASE64 } from "./logo-base64";

export const alt = "Cheng-Han Lin - Cloud Engineer & AI Solution Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(145deg, #0f0f23 0%, #1a1a3e 40%, #2d1b4e 70%, #1a1a3e 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "60px 80px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: "absolute",
                        top: -200,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -150,
                        left: -100,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
                    }}
                />

                {/* Left content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        flex: 1,
                        paddingRight: 40,
                    }}
                >
                    {/* Small label */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 20,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 16,
                                color: "rgba(139, 92, 246, 0.9)",
                                textTransform: "uppercase",
                                letterSpacing: 3,
                                fontWeight: 600,
                            }}
                        >
                            Portfolio
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            color: "#ffffff",
                            margin: 0,
                            marginBottom: 8,
                            letterSpacing: -2,
                            lineHeight: 1.1,
                        }}
                    >
                        Cheng-Han Lin
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: 20,
                            color: "rgba(255, 255, 255, 0.6)",
                            margin: 0,
                            marginBottom: 24,
                        }}
                    >
                        Also known as BR Lin
                    </p>

                    {/* Title */}
                    <p
                        style={{
                            fontSize: 26,
                            color: "rgba(255, 255, 255, 0.85)",
                            margin: 0,
                            marginBottom: 32,
                            fontWeight: 500,
                        }}
                    >
                        Cloud Engineer & AI Solution Developer
                    </p>

                    {/* Tags */}
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                        }}
                    >
                        {["AWS", "Generative AI", "RAG", "Multi-Agent"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "10px 20px",
                                    background: "rgba(139, 92, 246, 0.2)",
                                    borderRadius: 24,
                                    color: "rgba(255, 255, 255, 0.9)",
                                    fontSize: 15,
                                    fontWeight: 500,
                                    border: "1px solid rgba(139, 92, 246, 0.3)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Domain */}
                    <p
                        style={{
                            fontSize: 18,
                            color: "rgba(255, 255, 255, 0.4)",
                            margin: 0,
                            marginTop: 40,
                        }}
                    >
                        brlin.org
                    </p>
                </div>

                {/* Right side - Logo */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 320,
                        height: 320,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 280,
                            height: 280,
                            borderRadius: "50%",
                            background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                            boxShadow: "0 30px 80px rgba(139, 92, 246, 0.25), inset 0 0 40px rgba(255,255,255,0.05)",
                            padding: 20,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={LOGO_BASE64}
                            alt="Logo"
                            width={240}
                            height={240}
                            style={{
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
