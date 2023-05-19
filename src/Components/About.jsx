import React from "react";
import styled from "styled-components";

import { DiCss3, DiGithubBadge, DiGit, DiJsBadge, DiHtml5, DiMongodb, DiNodejsSmall, DiPostgresql, DiReact, DiPython, DiTrello, DiVisualstudio  } from "react-icons/di";
import {SiTailwindcss, SiTypescript} from 'react-icons/si'

const About = () => {



    return (
        <>
        {/* <NavBar></NavBar> */}
        <AboutContainer>
        <div className="container">

            <div className="sobre">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-presentation" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="3" y1="4" x2="21" y2="4" />
                <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                <line x1="12" y1="16" x2="12" y2="20" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
                <p> 
                Me gradué en Henry de desarrollador Web Full Stack, tengo más afinidad por el Front End.<br></br>
                Descubrí que quería ser desarrollador hace dos años aproximadamente, mientras estudiaba la carrera de Licenciatura
                en Informática, decidí comenzar con algunos cursos básicos sobre Python, luego incursioné en el mundo del procesamiento de datos,
                pero no me sentía completamente cómodo, por lo que comencé el Bootcamp y allí fue que encontré lo que estaba buscando.<br></br>
                Planeo dedicarme al desarrollo en tiempo completo, en alguna empresa en la cual pueda aportar con mis conocimientos y continuar desarrollando mis habilidades técnicas .
                
                </p>
            </div>

            <div className="sobre">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="15" cy="15" r="3" />
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
            <line x1="6" y1="9" x2="18" y2="9" />
            <line x1="6" y1="12" x2="9" y2="12" />
            <line x1="6" y1="15" x2="8" y2="15" />
            </svg>
            <ul>
                <li><p><a href="https://certificates.soyhenry.com/cert?id=2c4aa596-072d-4839-b46b-e372d045afba">Full Stack Web Developer</a>. Henry Bootcamp. 
                        700 horas de cursado. 2022.</p></li>
                <li><p>Licenciatura en Informática. Universidad Nacional de La Plata. 2020-actualidad.</p></li>
                <li><p>Ciencia de Datos. A2 Capacitación(Certificación). 2022</p></li>
                <li><p>Python. CoderHouse (Certificación). 2021</p></li>
                <li><p>Todo en ciberseguridad. Udemy(Certificación). 2021</p></li>
                <li><p>Productor Asesor de Seguros. AAPAS. 2021.</p></li>
            </ul>
            </div>

            <div className="sobre">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tabler" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 9l3 3l-3 3" />
            <line x1="13" y1="15" x2="16" y2="15" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            </svg>
            <div className="icons-container">
                <h5><b>CSS</b><DiCss3 fontSize={'100px'} color="#1b73ba"/></h5>
                <h5><b>HTML</b><DiHtml5 fontSize={'100px'} color="e54d26"/></h5>                
                <h5><b>JavaScript</b><DiJsBadge fontSize={'100px'} color='#ffff00'/></h5>
                <h5><b>React</b><DiReact fontSize={'100px'} color="#61dbfb"/></h5>
                <h5><b>Node</b><DiNodejsSmall fontSize={'100px'} color="#8dc62b"/></h5>
                <h5><b>Python</b><DiPython fontSize={'100px'} color="#306998"/></h5>
                <h5><b>MongoDB</b><DiMongodb fontSize={'100px'} color="#4DB33D"/></h5>
                <h5><b>Postgresql</b><DiPostgresql fontSize={'100px'} color="#008bb9"/></h5>
                <h5><b>Tailwind</b><SiTailwindcss fontSize={'100px'} color="#3490dc"/></h5>
                <h5><b>TypeScript</b><SiTypescript fontSize={'100px'} color="#008acc"/></h5>
                <h5><b>Git</b><DiGit fontSize={'100px'} color="#f1502f"/></h5>
                <h5><b>GitHub</b><DiGithubBadge fontSize={'100px'} color="#b8c2cc" /></h5>
                <h5><b>VSC</b><DiVisualstudio fontSize={'100px'} color="#0078d7"/></h5>
                <h5><b>Trello</b><DiTrello color='#0079bf' fontSize={'100px'}/></h5>


                

            </div>
            </div>
        </div>

        </AboutContainer>
        {/* <Footer></Footer> */}
        </>
    )
}

export default About

const AboutContainer = styled.nav`
    padding-top: 80px;
    h5{
        /* display: flex; */
        flex-direction: column-reverse;
        display: inline-flex;
        font-size: 20px;
        color: var(--text-primary-about);

    }
    a{
        color: var(--text-primary-about);
        
    }
    .icons-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 3px;
        padding: 0px;
        margin: 0px;
    }
    .container{
        display: flex;
        margin: 10px;
        padding: 5px;
        @media(max-width:1200px){
            flex-direction:column;
        }
    }

    .sobre{  
        background: linear-gradient(
                to bottom,
                rgba(0,0,0,0.1),
                rgba(0,0,0,0.1)
                );
        @media(max-width:1200px){
            max-width: 100%;
        }
        border: 2px dashed #ff2301;
        max-width: 32%;
        padding: 10px;
        margin: 10px;
        margin-top: 20px;

        p{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 25px;
            color: var(--text-primary-about);
            
        }
        li{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 25px;
                color: var(--text-primary-about);
        }
    }

    img{
        width: 10rem;
        height: 7rem;
        border-radius: 15%;
        opacity: 1;
        padding: 3px;
        margin: 3px;
    }

`