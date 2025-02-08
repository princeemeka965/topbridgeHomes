import LandingLayout from './layout/landing'
import HeroBanner from './modules/HeroBanner'
import Services from './modules/Services'

function App() {

  return (
    <>
        <LandingLayout>
          <div>
            <HeroBanner />
            <Services />
          </div>
        </LandingLayout>
    </>
  )
}

export default App
