import React from "react";
import Footer from "./Footer";
import NavBar from './NavBar'

import pi from '../images/PI-Henry.png'
import pf from '../images/PF-Henry.png'
import styled from "styled-components";


const Proyectos = () => {



    return (
        <>
        <NavBar> </NavBar>
        <ProyectosContainer>
            {/* <h1>Proyectos</h1> */}
        <div className="fondo"> 

            <div className="contImgs">
                <p>Henry Recipes</p>
                <img src={pi} height="400px" className="imgs" alt="Proyect not found"></img>
                <div className="botonesContainer">
                <a href="https://github.com/JuanArnau7/PI-Food">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a href="https://pi-front-six.vercel.app/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="1" />
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="8" y1="4" x2="8" y2="8" />
                    </svg>
                </a>
                </div>
            </div>
            <div className="contImgs">
                <p>Henry Food's</p>
                <img src={pf} height="400px" className="imgs" alt="Proyect not found"></img>
                <div className="botonesContainer">
                <a href="https://github.com/JuanArnau7/HenryClient">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a href="https://main-henry-client.vercel.app/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="1" />
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="8" y1="4" x2="8" y2="8" />
                    </svg>
                </a>
                </div>
                
            </div>
        </div>
        <div className="relleno">
            {/* <p>hola</p> */}
        </div>
        </ProyectosContainer>
        <Footer></Footer>
        </>
    )
}

export default Proyectos

const ProyectosContainer = styled.nav `

    /* background-color: #dcdcdc; */
    /* background-color: #3e4144; */

    
    .relleno{ 
        height: 320px;
        width: 100px;
    }
    .fondo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
        
    
    .contImgs{
        margin: 10px;
        padding: 5px;
        border: 2px solid #ff2301;
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        background-color: #ccc;
    }
    
    .imgs{
        border: 2px solid #ccc;
    }

    .botonesContainer{
        display: flex;
        justify-content: space-around;
    }
    .a{
        transition: transform 250ms, opacity 400ms;

    }
    a:hover{
        transform: scale(1.2);
        opacity: 1;
    }

    p{
        font-family: 'Courier New', Courier, monospace;
        /* font:"Copperplate" ; */
        font-size : 25px;
        font-weight: 900;
        margin: 10px;
    }
    span {
        margin: 10px;
        
    }
`