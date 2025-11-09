import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const links = (
   <>
    <Link to="/about">About us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/blog">Blogs</Link></>
  )
  const links2 = (
    <>
    <FaFacebook />
    <FaTwitter />
    <FaYoutube />
    </>
  )
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4 font-myfont2">
   {links}
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-2xl">
     {links2}
    </div>
  </nav>
  <aside>
    <p className='font-myfont2'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-green-500 uppercase'>Kick-Fussion</span></p>
  </aside>
</footer>
    </>
  )
}

export default Footer
