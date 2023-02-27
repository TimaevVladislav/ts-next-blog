import Head from "next/head"
import 'materialize-css/dist/css/materialize.min.css'
import Navigation from "@/pages/components/Navigation"

export default function Home() {
  return (
    <>
      <Head>
          <title>Next blog</title>
      </Head>
      <Navigation />
    </>
  )
}
