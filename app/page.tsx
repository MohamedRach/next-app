import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my first App"
}
export default function Home() {
  return (
    <>
    <Link href="/about">About</Link>
    <h1>hello</h1>
    </>
  )
}
