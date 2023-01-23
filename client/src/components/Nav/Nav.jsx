import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useState, useEffect } from 'react';
 
const Nav = () => {

  const [menubar, setmenubar] = useState('Home');


  return (
    <div>
      <ul className='bg-warning'>
        <li className={menubar==='Home' ? 'current_menu': '' }><Link onClick={()=>{ setmenubar('Home') }} className='active' to='/' >Home</Link></li>
        <li className={menubar==='Contact' ? 'current_menu': '' }><Link onClick={()=>{ setmenubar('Contact') }}  className='active' to='/contact' >Contact</Link></li>
        <li className={menubar==='Signup' ? 'current_menu': '' }><Link onClick={()=>{ setmenubar('Signup') }} className='active' to='/signup' >Signup</Link></li>
      </ul>
    </div>
  )
}

export default Nav