import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './AboutUs.jsx'
import OrderSteps from './OrderSteps.jsx'
import ContactUs from './ContactUs.jsx'
import Footer from './Footer.jsx'
import Header from "./Header.jsx"
import Carousel from "./Carousel.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="scroll-container overflow-y-auto h-screen">
      <Header/>
      <Carousel/>
      <AboutUs/> 
      <OrderSteps/>
      <ContactUs/>
      <Footer/>
  </div>
  </StrictMode>,
);
