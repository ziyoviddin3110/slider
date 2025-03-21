
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Feature from './components/feature/Feature'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='hero' element={<Hero/>}/>
        <Route path='/praduct' element={<Feature/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
