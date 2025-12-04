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
     
        {/* <div className="fitpro">
          <img src="/fitpro.png" className="fitpro-image" />
          <h3 className="project-title">FitPro</h3>


            <p className="project-description">Projeto de e-commerce de uma loja de produtos fitness.
              Proporciona uma experiência responsiva e moderna, com funcionalidades de visualização de produtos 
              e modo noturno.
            </p>
            <p className="project-description">Tecnologias utilizadas: </p>
             <ul className="project-description list">
            <li>HTML e SCSS</li>
            <li>JavaScript</li>
          </ul>
          
          <div className="icons">
          
           <a href="https://github.com/ThaissaDomiciano/fitpro">
           <img src="/github.png" className="github-icon"/> </a>
           
          <a href="https://www.figma.com/design/SbzYbLIU8WuQoLCWMskeuH/fitpro?node-id=0-1&p=f&t=GhIuXbUJ9r1yCSDQ-0">
           <img src="/figma.png"  className="figma-icon" />
          </a>
          </div>
        </div> */}
        <div className="gestao">
          <img src="/gestao.png" className="gestao-image" />
          <h3 className="project-title">Gestão de Benefícios</h3>


            <p className="project-description">Projeto para gestão de benefícios. Pensado para transformar a gestão interna através da digitalização e automação de processos. Unificando processos, reduzindo erros, acelerando aprovações e agendamentos e melhorando o diálogo entre gestão e colaborador.  
            </p>
            <p className="project-description">Tecnologias utilizadas: </p>
             <ul className="project-description list">
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Shadcn UI</li>
            <li>Deploy Vercel</li>
          </ul>
          
          <div className="icons">
          
           <a href="https://github.com/ThaissaDomiciano/gestao-beneficios/">
           <img src="/github.png" className="github-icon"/> </a>
           
          </div>
        </div>
        <div className="acadly">
          <img src="/acadly.png" className="acadly-image" />
          <h3 className="project-title">Acadly</h3>
          <p className="project-description">Projeto de gestão de atividades acadêmicas desenvolvido nas versões web
             e mobile, com funcionalidades voltadas para professores e alunos. A plataforma permite criação de turmas,
              tarefas, lançamento de notas, controle de presença, notificações e visualização de desempenho.</p>
              <p className="project-description">Tecnologias utilizadas: </p>
          <ul className="project-description list">
            <li>Back-end: Java com Spring Boot</li>
            <li>Front-end web: ReactJS</li>
            <li>App mobile: React Native + Expo</li>
          </ul>
          
            <div className="icons">

            <a href="https://github.com/ThaissaDomiciano/acadly-complete">
            <img src="/github.png" className="github-icon"/> </a>

            <a href="https://www.figma.com/design/je3CozP4cOuJ0S8P6vGKEL/Acadly?node-id=0-1&p=f&t=yagtPJbQVOp365m9-0">
           <img src="/figma.png"  className="figma-icon" />
          </a>
            
            </div>
        </div>
        <div className="eiTriz">
          <img src="/eiTriz.png" className="eiTriz-image" />
          <h3 className="project-title">EiTriz</h3>
            <p className="project-description">EiTriz foi desenvolvido durante o projeto Gran Prix 2024, criado
              pelo Senai, onde meu grupo consquistou o segundo lugar na categoria Indústria 4.0 com o protótipo e requisitos 
              de uma assistente virtual voltada para a indústria. O projeto foi desenvolvido no Figma e tem como objetivo 
              auxiliar os usuário na busca de informações sobre a empresa, produtos e serviços, além de fornecer
               suporte técnico para os funcionários.</p>
            
            <div className="icons">
            <a href="https://www.figma.com/design/BQNWbMmQX29vbviotGWqTt/Projeto-Grand-Prix?node-id=0-1&p=f&t=4206R1935NmzNuB2-0">
           <img src="/figma.png"  className="figma-icon" />
          </a>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Projects;