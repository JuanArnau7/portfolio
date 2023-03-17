import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurgerButton";
import SwitchLang from "./SwitchLang";
import Switch from "./SwitchTheme";

const NavBar = () => {
    
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    
    return (
        <>
        <NavContainer>
            <Switch></Switch>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a href="../CV-Juan-Pablo-Arnau-EN.pdf" download >Decargar CV</a>
            <a href="/Proyectos">Proyectos</a>
            <a href="/">Inicio</a>
            <a href="/About">SobreMi</a>
            <a href="/Contacto">Contacto</a>
        </div>
            <SwitchLang></SwitchLang>
        
        <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>

        
        </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav `
    border-bottom: dashed;
    border-color: #ff2301;
    padding: .4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        color: #ff2301;
        text-decoration: none;
        
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        a{
            color: #ff2301;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 1000px){
            position: initial;
            margin: 0;
            display: block;
            a{
                font-size: 1.5rem;
                padding: 15px 15px;
                margin: 5px 5px;
                color: #ff2301;
                display: inline;
            }
        }
    }
    
    .links.active{
        display: none;
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 26;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: #ff2301;
        }
    }
    .burguer{
        z-index: 99;
        @media(min-width: 1000px){
            display: none;
    }
}
`

const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    `

// a::before {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 3px;
//     border-radius: 4px;
//     background-color: #ff2301;   
//     bottom: 0;
//     left: 0;
//     transform-origin: right;
//     transform: scaleX(0);
//     transition: transform .2s .1s;
//     }

// a:hover::before {
//     transform-origin: left;   
//     transform: scaleX(1);

// }  
// a:active{
//     text-decoration: none;
    
// }    