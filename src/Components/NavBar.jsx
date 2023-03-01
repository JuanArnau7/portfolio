import React from "react";
import {Link, Navigate} from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
    
    
    
    return (
        <>
        <NavContainer>
        
        <div>
            <h1>luna/sol</h1>
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
            <h1>en/es</h1>
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
