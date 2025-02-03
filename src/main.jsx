import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContentProvider from './context/StoreContent.jsx'

createRoot(document.getElementById('root')).render(
 
   <BrowserRouter>
   
    <StoreContentProvider>
   <App />
    </StoreContentProvider>
   
   </BrowserRouter>
 
)
