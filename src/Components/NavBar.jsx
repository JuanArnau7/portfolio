import React from "react";
import {Link, Navigate} from 'react-router-dom'
import styled from "styled-components";
import Switch from "./SwitchTheme";

const NavBar = () => {
    
    
    
    return (
        <>
        <NavContainer>
        
        <div className="divisor">
        <Switch></Switch>
            {/* <p>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            
            </p> */}

        </div>
            <a className="direccionadorCv" href="">cv</a>

            <a className="direccionadorProyectos" href="/Proyectos">Proyectos</a>

            <a className="direccionadorFoto" href="/">Foto</a>

            <a className="direccionadorSobreMi" href="/About">SobreMi</a>

            <a className="direccionadorContacto" href="/Contacto">Contacto</a>

        <div className="divisor">
            <p className="botonesen"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-language" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 5h7" />
            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
            <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
            <path d="M12 20l4 -9l4 9" />
            <path d="M19.1 18h-6.2" />
            </svg></p>
        </div>

        </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav `
    display: flex;
    justify-content: space-around;    
    align-items: center;
    /* background-color: #3e4144; */
    /* background-color: #dcdcdc; */
    border-bottom: dashed;
    border-color: #ff2301;

    a{
    font-size:1.5rem;
    color: #ff2301;
    position: relative;
    text-decoration: none;
}

a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #ff2301;   
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s .1s;
    }

a:hover::before {
    transform-origin: left;   
    transform: scaleX(1);

}  
a:active{
    text-decoration: none;
    
}




    `
