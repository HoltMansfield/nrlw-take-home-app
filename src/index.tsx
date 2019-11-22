import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './style.css'


const Site = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(Site, document.getElementById('root'))
