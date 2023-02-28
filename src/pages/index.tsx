import 'materialize-css/dist/css/materialize.min.css'

import Navigation from "@/pages/components/Navigation"
import Footer from "@/pages/components/Footer"
import Section from "@/pages/components/Section"

export default function Home() {
  return (
    <Navigation title="Next blog">
      <Section />
      <Footer />
    </Navigation>
  )
}
