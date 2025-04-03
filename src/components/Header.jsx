import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src='/detail-header.png' className='detail-header-2'/>
      <nav>
        <Link to="about" smooth={true} duration={500}>Sobre mim</Link>
        <Link to="projects" smooth={true} duration={500}>Projetos</Link>
        <Link to="contact" smooth={true} duration={500}>Contato <img src="/detail.png" className="detail-image" /></Link>
      </nav>
    </header>
  );
}

export default Header;
