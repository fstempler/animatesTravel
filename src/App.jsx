import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import OurServices from './Components/OurServices/OurServices'
import Tips from './Components/Tips/Tips'
import Reviews from './Components/Reviews/Reviews'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import WhatsappBtn from './Components/Whatsapp/WhatsappBtn'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { AppProvider } from './state/AnimalCard.Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'



function App() {
  
  

  return (

    <>    
    <AppProvider>
      <Suspense fallback="Loading translation...">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WhatsappBtn />
                  <Navbar />
                  <Header />
                  <OurServices />
                  <Tips />
                  <Reviews />
                  <About />
                  <Contact />
                  <Footer />                  
                  <ToastContainer />
                </>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </AppProvider>
    
    </>
    
  )
}

export default App
