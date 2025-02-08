import React from 'react'
import Header from './sections/Header'
import Footer from './sections/Footer'


const LandingLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default LandingLayout