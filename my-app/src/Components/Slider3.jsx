import React from 'react'
import Textfile3 from './Textfile3'
import { Parallax } from 'react-parallax'

function Slider3() {
  return (
    <div className='maindiv'>
    <Textfile3/>
    <Parallax className='image' bgImage='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
  </Parallax>
  <Textfile3/>
  <Parallax className='image' bgImage='https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
      <Textfile3/>
      <Parallax className='image' bgImage='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
      <Textfile3/>
      <Parallax className='image' bgImage='https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
  </div>
  )
}

export default Slider3