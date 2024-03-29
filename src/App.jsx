import './App.css'
import './assets/css/hero.css'
import React, { useEffect } from "react";
import Web from './layout'
import Navbar from './components/navigation'
import Footerend from './components/footer';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Web />
      <Footerend />
    </div>
  )
}

export default App
