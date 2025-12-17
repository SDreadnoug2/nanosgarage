import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/ng2W.png';
import Portfolio from './Components/Portfolio/Portoflio';
import {motion} from "motion/react";
function App() {

  const [tab, setTab] = useState("");
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

  const textFade = {
    initial: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
    active: {opacity: 1, y: -10, transition: {duration: 0.2}}
  };

  const hoverAnim = {
    y: -5,
    transition: {duration: 0.3}
  };
  return (
    <div className='App'>
      <div className="App__main">
        <img className='App__logo' src={logo}></img>
        <nav className="App__nav">
          <motion.button
            variants={textFade}
            initial="initial"
            animate={tab === "Portfolio" ? "active" : "show"}
            transition={{ duration: 1.0 }}
            whileHover={hoverAnim}
            className={`App__nav_item ${tab === "Portfolio" ? "active" : ""}`}
            onClick={() => setTab("Portfolio")}
          >
            Portfolio
          </motion.button>

          <motion.button
            variants={textFade}
            initial="initial"
           animate={tab === "Store" ? "active" : "show"}
            transition={{ duration: 1.2 }}
            whileHover={hoverAnim}
            className={`App__nav_item ${tab === "Store" ? "active" : ""}`}
            onClick={() => setTab("Store")}
          >
            Store
          </motion.button>

          <motion.button
            variants={textFade}
            initial="initial"
            animate={tab === "Contact" ? "active" : "show"}
            transition={{ duration: 1.4 }}
            whileHover={hoverAnim}
            className={`App__nav_item ${tab === "Contact" ? "active" : ""}`}
            onClick={() => setTab("Contact")}
          >
            Contact
          </motion.button>

          <motion.button
            variants={textFade}
            initial="initial"
            animate={tab === "About" ? "active" : "show"}
            transition={{ duration: 1.6 }}
            whileHover={hoverAnim}
            className={`App__nav_item ${tab === "About" ? "active" : ""}`}
            onClick={() => setTab("About")}
          >
            About
          </motion.button>
        </nav>
      </div>
      <div className="App__sidebar"></div>
      <div className="App__content">
        {tab == "Portfolio" && <Portfolio/>}
      </div>

    </div>
  )

}

export default App
