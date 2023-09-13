import React from 'react'
import Textfile2 from './Textfile2'
import { Parallax } from 'react-parallax'

function Slider2() {
  return (
    <div className='maindiv'>
    <Textfile2/>
    <Parallax className='image' bgImage='https://images.unsplash.com/photo-1534528489707-ef61ee67b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdpbGQlMjAxNiUzQTl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
  </Parallax>
  <Textfile2/>
  <Parallax className='image' bgImage='https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdpbGQlMjAxNiUzQTl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
      <Textfile2/>
      <Parallax className='image' bgImage='https://images.unsplash.com/photo-1430026996702-608b84ce9281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdpbGQlMjAxNiUzQTl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
      <Textfile2/>
      <Parallax className='image' bgImage='https://images.unsplash.com/photo-1425141750113-187b6a13e28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdpbGQlMjAxNiUzQTl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'  strength={800}>
      
      </Parallax>
  </div>
  )
}

export default Slider2