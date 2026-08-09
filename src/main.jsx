import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './router/AppRoutes.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ContextApi from './context/contextApi.jsx'
 import { ToastContainer} from 'react-toastify';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  
  <ContextApi>
    <QueryClientProvider client={queryClient}>
      <AppRoutes/>
      <ToastContainer/>
    </QueryClientProvider> 
  </ContextApi>
  
  
)
