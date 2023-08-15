export const metadata = {
  title: 'NCA Parts🔩',
  description: 'Generated by Next.js',
  icons: {
    favicon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
