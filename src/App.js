import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Web_Development from './Pages/Web_Development/Web_Development'
import Graphic_Designing from './Pages/Graphic_Designing/Graphic_Designing'
import Digital_Marketing from './Pages/Digital_Marketing/Digital_Marketing'
import Mobile_Apps from './Pages/Mobile_Apps/Mobile_Apps'
import CRM_Softwares from './Pages/CRM/CRM_Softwares'
import Latest_Works from './Pages/Works_Latest/Latest_Works.jsx'
import Contact from './Pages/Contact/Contact'
import SEO from './Pages/SEO/SEO';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import Chat from './Components/Chat/Chat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/Web_Development' element={<Web_Development />} />
          <Route exact path='/Graphic_Designing' element={<Graphic_Designing />} />
          <Route exact path='/Digital_Marketing' element={<Digital_Marketing />} />
          <Route exact path='/Mobile_Apps' element={<Mobile_Apps />} />
          <Route exact path='/CRM_Softwares' element={<CRM_Softwares />} />
          <Route exact path='/Latest_Works' element={<Latest_Works />} />
          <Route exact path='/SEO' element={<SEO />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
      {/* <Whatsapp /> */}
      <Chat />
    </>
  )
}

export default App
