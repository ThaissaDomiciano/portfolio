import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src='/detail-header.png' className='detail-header-2'/>
      <nav className='links'>
      <Link to="about" smooth={true} duration={500} className="nav-link">Sobre mim</Link>
      <Link to="projects" smooth={true} duration={500} className="nav-link">Projetos</Link>
      <Link to="contact" smooth={true} duration={500} className="nav-link">Contato</Link>
      <img src="/detail.png" className="detail-image" />
    </nav>
    </header>
  );
}

export default Header;
