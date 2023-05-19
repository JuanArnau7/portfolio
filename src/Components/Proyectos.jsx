import React from "react";
// import Footer from "./Footer";
// import NavBar from './NavBar'

import pi from '../images/PI-Henry.png'
import pf from '../images/PF-Henry.png'
import portafolio from '../images/Portafolio.png'
import styled from "styled-components";
import { DiCss3, DiHtml5, DiJsBadge, DiMongodb, DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { SiGithub, SiTailwindcss } from "react-icons/si"
import { HiOutlineWindow } from "react-icons/hi2"


const Proyectos = () => {



    return (
        <>
        {/* <NavBar> </NavBar> */}
        <ProyectosContainer>
        <div className="fondo">

            <article className="card">
                <div className="card_inner">
                    <div className="card_side card_side--front">
                        <div className="card_image-wrapper">
                            <img src={pf} alt="" className="card_image"></img>
                        </div>
                        <div className="card_body card_body--flex">
                            <h2 className="card_title">Henry's Food</h2>
                            <h3>Desarrollado con las siguientes tecnologias:</h3>
                            <div className="iconos">
                            <h6><b>HTML</b><DiHtml5 fontSize={'2rem'} color="e54d26"/></h6>                
                            <h6><b>JavaScript</b><DiJsBadge fontSize={'2rem'} color='#ffff00'/></h6>
                            <h6><b>React</b><DiReact fontSize={'2rem'} color="#61dbfb"/></h6>
                            <h6><b>Node</b><DiNodejs fontSize={'2rem'} color="#8dc62b"/></h6>
                            <h6><b>MongoDB</b><DiMongodb fontSize={'2rem'} color="#4DB33D"/></h6>
                            <h6><b>Tailwind</b><SiTailwindcss fontSize={'2rem'} color="#3490dc"/></h6>
                            </div>

                            {/* <span className="card_arrow"> &rarr; </span> */}
                        </div>
                    </div>
                    <div className="card_side card_side--back">
                        <div className="card_body">
                            <p>
                                E-comerce que busca integrar las compras de un cliente con envio al domicilio o consumo en el local. 
                                Además cuenta con un dashboard para el dueño del restaurant con gráficos y estadísticas.
                            </p>
                            <div className="iconos-backcard">

                                <a href="">GitHub<SiGithub size="3rem" ></SiGithub></a>    <a href="">Deploy<HiOutlineWindow size="3rem"></HiOutlineWindow></a>
                                </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="card">
                <div className="card_inner">
                    <div className="card_side card_side--front">
                        <div className="card_image-wrapper">
                            <img src={portafolio} alt="" className="card_image"></img>


                        </div>
                        <div className="card_body card_body--flex">
                            <h2 className="card_title">Portafolio</h2>
                            <h3>Desarrollado con las siguientes tecnologias:</h3>
                            <div className="iconos">
                            <h6><b>CSS</b><DiCss3 fontSize={'2rem'} color="#1b73ba"/></h6>
                            <h6><b>HTML</b><DiHtml5 fontSize={'2rem'} color="e54d26"/></h6>                
                            <h6><b>JavaScript</b><DiJsBadge fontSize={'2rem'} color='#ffff00'/></h6>
                            <h6><b>React</b><DiReact fontSize={'2rem'} color="#61dbfb"/></h6>
                            </div>
                            {/* <span className="card_arrow"> &rarr; </span> */}
                        </div>
                    </div>
                    <div className="card_side card_side--back">
                        <div className="card_body">
                                <p>
                                Este es el portafolio en el cual se encuentra navegando actualmente.
                                
                                </p>
                                <div className="iconos-backcard">

                                <a href="">GitHub<SiGithub size="3rem" ></SiGithub></a>    <a href="">Deploy<HiOutlineWindow size="3rem"></HiOutlineWindow></a>
                                </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="card">
                <div className="card_inner">
                    <div className="card_side card_side--front">
                        <div className="card_image-wrapper">
                            <img src={pi} alt="" className="card_image"></img>
                        </div>
                        <div className="card_body card_body--flex">
                            <h2 className="card_title">Recipes App</h2>
                            <h3>Desarrollado con las siguientes tecnologias:</h3>
                            <div className="iconos">
                            <h6><b>CSS</b><DiCss3 fontSize={'2rem'} color="#1b73ba"/></h6>
                            <h6><b>HTML</b><DiHtml5 fontSize={'2rem'} color="e54d26"/></h6>                
                            <h6><b>JavaScript</b><DiJsBadge fontSize={'2rem'} color='#ffff00'/></h6>
                            <h6><b>React</b><DiReact fontSize={'2rem'} color="#61dbfb"/></h6>
                            <h6><b>Node</b><DiNodejs fontSize={'2rem'} color="#8dc62b"/></h6>
                            <h6><b>Postgresql</b><DiPostgresql fontSize={'2rem'} color="#008bb9"/></h6>
                            </div>

                            {/* <span className="card_arrow"> &rarr; </span> */}
                        </div>
                    </div>
                    <div className="card_side card_side--back">
                        <div className="card_body">
                                <p>
                                    Aplicación de recetas, consumidas de una API.
                                    Cuenta con la posibilidad de buscar, filtrar, ordenar y crear nuevas.
                                </p>
                                <div className="iconos-backcard">

                                    <a href="">GitHub<SiGithub size="3rem" ></SiGithub></a>    <a href="">Deploy<HiOutlineWindow size="3rem"></HiOutlineWindow></a>
                                </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>            
        </ProyectosContainer>
        </>
    )
}

export default Proyectos

const ProyectosContainer = styled.nav `
    padding-top: 80px;
    .iconos{ 
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin: 0px;
        color: var(--text-primary-about);        
        h6{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column-reverse;
            margin: 0px;
            svg{

                padding: 5px;
            }
        }
    }
    .iconos-backcard{
        display: flex;
        justify-content: space-around;
        a{
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            text-decoration: none;
            color: var(--text-primary-about);
            font-size: 2rem;
            

        }
    }
    .fondo{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    img{
        height: 100%;
        width: 100%;
    }
    .card_image{
        display: block;
        max-width: 600px;
    }
    .card_image-wrapper{
        position: relative;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }

    .card{
        width: 600px;
        height: 600px;
        color: #151515;
        perspective: 800px;
    }

    .card_inner{
        position: relative;
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s
    }

    .card:hover .card_inner{
        transform: rotateY(-180deg);
    }
    .card_side {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: grid;
        grid-template-rows: 180px 1fr;
        backface-visibility: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    }
    .card_side--front{
        display: flex;
        flex-direction: column;
        margin: 25px;
    }
    .card_side--back{
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        margin: 25px;
        align-items: center;
        justify-content: center;

    }
    .card_body{
        padding: 16px;
        font-size: 2rem;
        p{
            font-size: 2rem;
            color: var(--text-primary-about);
        }
    }
    .card_body--flex {
        height: 100%;
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-direction: column;
        h2{
            color: var(--text-primary-about);
            font-size: 2.5rem;
        }
        h3{
            color: var(--text-primary-about);

            font-size: 1.5rem;
        }
    }
    .card_title {
        font-size: 26px;
        text-transform: capitalize;
        padding: 10px;
        margin: 0px;
    }  
    /* .fondo{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;

    }
        
    
    .contImgs{
        margin: 10px;
        padding: 5px;
        border: 2px solid #ff2301;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .imgs{

        height: 400px;
        border: 2px solid #ff2301;
        margin: 5px 5px;
        @media(max-width:1000px){
            height: 200px;
        }
        @media(max-width:760px){
            height: 170px;
        }
        @media(max-width:500px){
            height: 150px;
        }
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
        color: #ff2301;
        font-size : 25px;
        font-weight: 900;
        margin: 10px;
    } */

`