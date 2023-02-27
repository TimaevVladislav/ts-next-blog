import Head from "next/head"
import 'materialize-css/dist/css/materialize.min.css'

import Navigation from "@/pages/components/Navigation"
import Footer from "@/pages/components/Footer"
import Section from "@/pages/components/Section"

export default function Home() {
  return (
    <Navigation>
      <Head>
          <title>Next blog</title>
      </Head>

      <Section />
      <Footer />
    </Navigation>
  )
}
