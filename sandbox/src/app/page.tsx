// Home page
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <h2>Hello, Next.js!</h2>
      <h3>Hello, Next.js!</h3>
      <Link href="/about">
        <p>Link</p>
      </Link>
    </>
  );
}
