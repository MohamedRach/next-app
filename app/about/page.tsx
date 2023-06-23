import Link from "next/link";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Welcome to about page"
}
const About = () => {
    //throw new Error("not today")
    return (
        <>
        <Link href="/">Home</Link>
        <h1>About</h1>
        </>
    );
}
 
export default About;