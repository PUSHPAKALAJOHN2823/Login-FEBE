import React , { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Sucess from './Sucess.jsx';
import Fail from './Fail.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/sucess' element={<Sucess />} />
    <Route path='/fail' element={<Fail />} />

  </Routes>
  </BrowserRouter>
)
