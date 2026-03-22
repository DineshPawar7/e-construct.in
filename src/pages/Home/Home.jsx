import About from "../../components/About"
import CTASection from "../../components/CTASection"
import Hero from "../../components/Hero"
import Services from "../../components/OurServices"
import ProcessSection from "../../components/ProcessSection"
import LatestProjects from "../../components/Projects"
import TrustedPartners from "../../components/TrustedPartners"


function Home() {

  return (
    <>
     
<Hero />
<TrustedPartners />
<About />
<Services />
<LatestProjects />
<CTASection />
<ProcessSection />
    </>
  )
}

export default Home
