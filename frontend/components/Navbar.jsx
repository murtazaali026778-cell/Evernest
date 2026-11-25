import './Navbar.css';
import { useState } from 'react';
import logo from '../src/assets/logo.png';
import { Menu, Search, X } from 'lucide-react';

const Navbar = () => {
  const [open, setopen] = useState(false)
  const toggle = () => setopen((pre) =>!pre)
  return (
    <header className="header">
      {open && <div className='overlay' >
        <div className='menu'>
        <div className='innermenu'>
          <div className='upperbtn'>
        <div>MainMenu</div>
        <button className='icon-btn' onClick={toggle}><X size={16} strokeWidth={3} /></button>
        </div>
        <div className='option'>
          Sports
          
        </div>
         <div className='option'>
          Travel
          
        </div>
           <div className='option'>
          School
          
        </div>
        
        </div>
        </div>
        
        </div>}
      <nav className="navbar">
        {/* Left: Menu & Search */}
         <div className="innernavdiv nav-left">
          <img src={logo} alt="Evernest Logo" className="nav-logo" />
          <h1 className="nav-title">EVERNEST</h1>
        </div>
       

        
        <div className="innernavdiv nav-center">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="innernavdiv nav-right">
          <button className="icon-btn" aria-label="Menu" onClick={toggle}>
            <Menu size={20} strokeWidth={2.5} />
          </button>
          <button className="icon-btn" aria-label="Search">
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>
       
      </nav>
    </header>
  );
};

export default Navbar;