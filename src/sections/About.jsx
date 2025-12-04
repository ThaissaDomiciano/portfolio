import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-title">
        Sobre mim
        <div className="line"></div>
        <img src="/detail.png" className="about-line-image"/>
      </div>
      <div className="section-about">
        <div className="skills">
          Habilidades
          <ul>
            <li className="li-title">JavaScript</li>
            <li className="li-title">ReactJS</li>
            <li className="li-title">NextJS</li>
            <li className="li-title">React Native</li>
          </ul>
        </div>
        <div className="education">
          Educação
          <ul>
            <li className="li-title">Análise e Desenvolvimento de Sistemas</li>
            <li className="li-text">Jan/2025 - atualmente | UNIUBE - Universidade de Uberaba</li>
            <li className="li-title">Desenvolvimento de Sistemas</li>
            <li className="li-text">Jan/2024 - Dez/2025 | SENAI - Márcio Bagueira Leal</li>
            <li className="li-title">Desenvolvimento de Sistemas</li>
            <li className="li-text">Jan/2021 - Jul/2022 | ETEC Pedro Badran</li>
          </ul>
        </div>
        <div className="work">
          Experiência Profissional
          <ul>
          <li className="li-title">Usina Alta Mogiana</li>
          <li className="li-text">Jan/2024 - atualmente</li>
          <li className="li-text">Aprendiz em Desenvolvimento de Sistemas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;