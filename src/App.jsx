import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import OurServices from './Components/OurServices/OurServices'
import Tips from './Components/Tips/Tips'
import Reviews from './Components/Reviews/Reviews'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css'



function App() {
  
  

  return (

    <>
    {/* <Suspense fallback="Loading translation...">
      <BrowserRouter>
        <Navbar />
        <Header />
        <OurServices />
        <Tips />
        <Reviews />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </Suspense> */}
    <Suspense fallback="Loading translation...">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <OurServices />
                <Tips />
                <Reviews />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </Suspense>
    </>
    
  )
}

export default App
