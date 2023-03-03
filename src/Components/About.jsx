import React from "react";
import Footer from "./Footer";


import NavBar from './NavBar'
import styled from "styled-components";
const About = () => {



    return (
        <>
        <NavBar></NavBar>
            <h1>Soy About</h1>
        <AboutContainer>

            <div className="sobre">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="3" y1="4" x2="21" y2="4" />
                <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                <line x1="12" y1="16" x2="12" y2="20" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
                <span> Me gradue en Henry de desarrollador web full stack, pero me dedico al front end ya que es lo que me apasiona
                Descubri mi pasion por el desarrollo hace un año aproximadamente, mientras estudiaba la carrera de licenciatura
                en informatica, realice varios cursos, </span>
            </div>

            <div className="educacion">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="15" cy="15" r="3" />
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
            <line x1="6" y1="9" x2="18" y2="9" />
            <line x1="6" y1="12" x2="9" y2="12" />
            <line x1="6" y1="15" x2="8" y2="15" />
            </svg>
            </div>

            <div className="skills">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tabler" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 9l3 3l-3 3" />
            <line x1="13" y1="15" x2="16" y2="15" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            </svg>

            </div>
            
        </AboutContainer>
        <Footer></Footer>
        </>
    )
}

export default About

const AboutContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    .sobre{
        border: 1px solid black;
        width: 30%;
        height: 700px;
    }
    .educacion{
        border: 1px solid black;
        width: 30%;
        height: 700px;
    }
    .skills{
        border: 1px solid black;
        width: 30% ;
        height: 700px;
    }

`