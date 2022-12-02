import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AxiosInterceptor from '@/Services/interceptor/axios.interceptor'

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
