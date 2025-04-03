import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects">

      <div className="section-title">
        <img src="/code.png" className="title-image" />
        Projetos
      </div>
      <div className="section-projects">
     
        <div className="fitpro">
          <img src="/fitpro.png" className="fitpro-image" />
          <h3 className="project-title">FitPro</h3>
          <p className="project-description">FitPro é um e-commerce focado em produtos fitness.
            O projeto foi desenvolvido utilizando HTML, JavaScript e SCSS para proporcionar uma experiência moderna
            e responsiva, alternando também para modo noturno.</p>
        </div>
        <div className="disneyCharacters">
          <img src="/disneyCharacters.png" className="disneyCharacters-image" />
          <h3 className="project-title">Disney Characters</h3>
          <p className="project-description">Este projeto é uma aplicação React Native que permite pesquisar
            personagens da Disney. A aplicação utiliza a Disney API para buscar informações sobre personagens
            com base no nome inserido pelo usuário.</p>
        </div>
        <div className="eiTriz">
          <img src="/eiTriz.png" className="eiTriz-image" />
          <h3 className="project-title">EiTriz</h3>
          <p className="project-description">Esse projeto é uma assistente virtual pensada para o setor industrial.
            Desenvolvida no figma, durante o projeto Gran Prix Senai 2024, onde conquistamos o segundo lugar.</p>
        </div>
      </div>

    </section>
  )
}

export default Projects;