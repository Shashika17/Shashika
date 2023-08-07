import React from 'react'
import styles from'./dark-theme.css'
import Typewriter from 'typewriter-effect';

export default function Namee() {
  
  return (
   <div><body>
   
  <h1> <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello, I am Shashika kavinda')
      .start();
  }}
/></h1>

   </body></div>



  )
}
