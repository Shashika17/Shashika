// import logo from './logo.svg';
// import './App.css';
import Namee from './Name';
import './dark-theme.css'
import Profile from './Profile';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function App() 
{
  const exampleVariant = {
    visible: { opacity: 0 },
    hidden: { opacity: 2 },
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     <div className='vertical-center'><Namee/></div>
    
    
     <motion.div 
animate={{ x: 20 }} 
initial={{x: 1}} 
variants={exampleVariant}
className="box"
> <Profile/></motion.div>
    </div>
  );
}

export default App;
