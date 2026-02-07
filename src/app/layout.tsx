// Root layout - minimal wrapper for locale-based routing
// Main layout logic is in [locale]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
