
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <nav>
          <h1>my navBar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
