import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h3 className="contact-title">Contact</h3>
      <ul className="contacts">
        <li className="link-title">
          <img src="/linkedin.png" alt="icone do Linkedin" className="icon-linkedin"/>
          <a href="#">LinkedIn</a>
        </li>
        <li className="link-title">
          <img src="/github.png" alt="icone do Github" className="icon-github"/>
          <a href="#">GitHub</a>
        </li>
      </ul>
 
    </section>
  );
}

export default Contact;