import React from "react";
import Footer from "./Footer";


import NavBar from './NavBar'
import styled from "styled-components";

import iconoCss from '../skills/Css.png'
import iconohtml from '../skills/Html.png'
import iconoBoostrap from '../skills/Boostrap.png'
import iconoJavaScript from '../skills/JavaScript.png'
import iconoMongoDB from '../skills/MongoDB.png'
import iconoNode from '../skills/Node.png'
import iconoPostgresql from '../skills/Postgresql.png'
import iconoReact from '../skills/React.png'
import iconoTailwind from '../skills/Tailwind.png'
import iconoTypeScript from '../skills/TypeScript.png'


const About = () => {



    return (
        <>
        <NavBar></NavBar>
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
                Me gradue en Henry de desarrollador Web Full Stack, tengo mas afinidad por el Front End.<br></br>
                Descubrí que queria ser desarrollador hace dos años aproximadamente, mientras estudiaba la carrera de licenciatura
                en informatica, decidí comenzar con algunos cursos basicos sobre Python, luego incursione en el mundo del procesamiento de Datos,
                pero no me sentia completamente comodo, por lo que comence el Bootcamp y allí fue que encontre lo que estaba buscando.<br></br>
                Planeo dedicarme al desarrollo en tiempo completo, en alguna empresa en la cual pueda continuar desarrollando mis habilidades tecnicas.
                
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
                <li><p>Python. CoderHouse (Certificación). 2021</p></li>
                <li><p>Todo en ciberseguridad. Udemy(Certificación). 2021</p></li>
                <li><p>Ciencia de Datos. A2 Capacitación(Certificación). 2022</p></li>
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
                <img alt="Skill icon not found" src={iconoCss}></img>
                <img alt="Skill icon not found" src={iconoBoostrap}></img>
                <img alt="Skill icon not found" src={iconohtml}></img>
                <img alt="Skill icon not found" src={iconoJavaScript}></img>
                <img alt="Skill icon not found" src={iconoMongoDB}></img>
                <img alt="Skill icon not found" src={iconoNode}></img>
                <img alt="Skill icon not found" src={iconoPostgresql}></img>
                <img alt="Skill icon not found" src={iconoReact}></img>
                <img alt="Skill icon not found" src={iconoTailwind}></img>
                <img alt="Skill icon not found" src={iconoTypeScript}></img>
            </div>
            </div>
        </div>

        </AboutContainer>
        <Footer></Footer>
        </>
    )
}

export default About

const AboutContainer = styled.nav`
    min-height: 84vh;
    a{
        color: #ff2301;
        
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
            color: #ff2301;
        }
        li{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 25px;
                color: #ff2301;
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