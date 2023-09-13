import React from 'react'
import { Parallax } from 'react-parallax'
import Textfile from './Textfile'

function Slider1() {
  return (
    <div className='maindiv'>
      <Textfile/>
      <Parallax className='image' bgImage='https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'  strength={800}>
        
    </Parallax>
    <Textfile/>
    <Parallax className='image' bgImage='https://i.pinimg.com/564x/8f/aa/13/8faa13beb3bd6ba74f05ee5a65cdfd42.jpg'  strength={800}>
        
        </Parallax>
        <Textfile/>
        <Parallax className='image' bgImage='https://i.pinimg.com/736x/01/0c/0e/010c0e6122ed045e8bc8814d6ff21b12.jpg'  strength={800}>
        
        </Parallax>
        <Textfile/>
        <Parallax className='image' bgImage='https://i.pinimg.com/564x/4e/82/eb/4e82eb2db54333698e156148b7c9e93c.jpg'  strength={800}>
        
        </Parallax>
    </div>
  )
}

export default Slider1