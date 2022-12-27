import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Principal from './layout/Principal'
import Nosotros from './pages/Nosotros'
import Modelos from './pages/Modelos'
import Galeria from './pages/Galeria'
import './css/styles.css'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal/>}>
        <Route index element={<Inicio/>}/>
        <Route path="nosotros" element={<Nosotros/>}/>
        <Route path="modelos" element={<Modelos/>}/>
        <Route path="galeria" element={<Galeria/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
