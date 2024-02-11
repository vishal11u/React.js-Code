import React from 'react'
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import About1 from './About1';

function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/contact/child' element={<About1 />} />
      </Routes>
    </div>
  )
}

export default Home;