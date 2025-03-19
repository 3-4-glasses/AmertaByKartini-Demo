import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OrderSteps from './OrderSteps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderSteps />
  </StrictMode>,
)
