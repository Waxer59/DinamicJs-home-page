import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './home/pages/HomePage'
import './styles/main.css'
import './styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)
