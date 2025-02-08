import LandingLayout from './layout/landing'
import AboutUs from './modules/AboutUs'
import Contact from './modules/Contact'
import Gallery from './modules/Gallery'
import HeroBanner from './modules/HeroBanner'
import Services from './modules/Services'

function App() {

  return (
    <>
        <LandingLayout>
          <div>
            <HeroBanner />
            <Services />
            <Gallery />
            <AboutUs />
            <Contact />
          </div>
        </LandingLayout>
    </>
  )
}

export default App
