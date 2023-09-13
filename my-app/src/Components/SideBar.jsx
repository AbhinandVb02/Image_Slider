import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  
  return (
    <div className='sidebar'>
       <ol className='olmenu' >
        <span style={{marginLeft:'10px'}}>
        <img className='sideimg' src="https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="" /><br />
        <button className='menubutton'><Link className='linkstyle' to='/'>Space</Link></button>
        </span><br /><br />
        <span style={{marginLeft:'10px'}}>
        <img className='sideimg' src="https://images.unsplash.com/photo-1534528489707-ef61ee67b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdpbGQlMjAxNiUzQTl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /><br />
        <button className='menubutton'><Link className='linkstyle' to='/wild'>Wild</Link></button>
        </span><br /><br />
        <span style={{marginLeft:'10px'}}>
        <img className='sideimg' src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /><br />
        <button className='menubutton'><Link className='linkstyle' to='/cars'>Cars</Link></button>
        </span>
       </ol>
    </div>
  )
}

export default SideBar