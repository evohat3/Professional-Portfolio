import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
    <div className='h-screen overflow-auto' 
    style={{ 
      backgroundImage: 'url(https://i.imgur.com/YOQTXrQ.png)',
      backgroundSize: 'cover', // or 'contain', depending on your preference
      backgroundRepeat: 'repeat',
      }}>
      <Navbar />

<BrowserRouter>
<Routes>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
</BrowserRouter>
      <Footer />
      
    </div>

    </div>
  );
}

export default App;
