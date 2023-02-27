import Link from "next/link"
import Head from "next/head"
import 'materialize-css/dist/css/materialize.min.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>Next blog</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

      </Head>
      <h1>Home</h1>
      <Link href="/about">
          About
      </Link>
      <Link href="/posts">
           Posts
      </Link>
    </>
  )
}
