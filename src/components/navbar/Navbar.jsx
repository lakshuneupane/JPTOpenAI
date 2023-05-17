import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.css'


const Menu = () => {
  
  return  (
    <>
     
     <p><a href='#home'>Home</a></p>
      <p><a href='#jpt'>What Is JPT</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#blog'>Library</a></p>
     
    </>
  )
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <div className='jpt__navbar'>
      <div className='jpt__navbar-links'>
        <div className='jpt__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='jpt__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='jpt__navbar-sign'>
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>
      <div className='jpt__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={ () => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={ () => setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='test scale-up-center'>
            <div className='jpt__navbar-menu_container-links'>
              <Menu toggle = {toggleMenu}/>
              <div className='jpt__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar