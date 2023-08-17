// import logo from './logo.svg';
// import './App.css';
import Namee from './Name';
import './dark-theme.css'
import Profile from './Profile';
import { motion, useAnimation } from "framer-motion";
import Skills from './skills';
import './ease-in.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
    
    <br/>
    <div className="bn1">
     <motion.div 
  animate={{x: 100}}
  transition={{ ease: "easeOut", duration: 2 }}
className="box"
> <Profile/></motion.div></div>
<br/>
<div className="bn1">
     <motion.div 
  animate={{x: 100}}
  transition={{ ease: "easeOut", duration: 3 }}
className="box"
> <Skills/></motion.div>
    </div>
    </div>
  );
}

export default App;
