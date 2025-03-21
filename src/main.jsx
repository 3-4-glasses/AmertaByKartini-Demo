import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './HeroPage.jsx'
import AboutUs from './AboutUs.jsx'
import OrderSteps from './OrderSteps.jsx'
import ContactUs from './ContactUs.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AboutUs />
    <OrderSteps />
    <ContactUs />
    <Footer />
  </StrictMode>,
)
