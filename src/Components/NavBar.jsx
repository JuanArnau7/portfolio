import React from "react";
import {Link, Navigate} from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
    
    
    
    return (
        <>
        <NavContainer>
        
        <div>
            <p>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2301" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            
            </p>
        </div>
        <div className="aContainer">
            <a href="">cv</a>
        </div>
        <div className="aContainer">
            <a href="/Proyectos">Proyectos</a>
        </div>
        <div className="aContainer">
            <a href="/">Foto</a>
        </div>
        <div className="aContainer">
            <a href="/About">SobreMi</a>
        </div>
        <div className="aContainer">
            <a href="/Contacto">Contacto</a>
        </div>
        <div>
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
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: #656565;

a{
    text-decoration: none;
    color: #ff2301;
    font-size:1.5rem;

}
.aContainer{
    background-color: #656565;

    margin:1rem;
    height:100%;
}
a:active{
    background-color:red;
}

    `
