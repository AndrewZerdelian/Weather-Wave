import React from 'react'
import BG from '../Assets/Waves.mp4'

export default function BackGround() {

  return (

    <div className='w-full h-screen'>   
    
    <video src={BG} autoPlay loop muted 
    className='w-full h-full object-cover blur-xl'/></div>


  )
}
