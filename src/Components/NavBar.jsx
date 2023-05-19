import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurgerButton";
// import SwitchLang from "./SwitchLang";
import Switch from "./SwitchTheme";
const sections = 
    document.querySelectorAll("section"),
    navLinks= document.querySelectorAll(".links a")
const resetLinks = () =>
navLinks.forEach(link => link.classList.remove("activo"));
const handleScroll = () => {
    const {pageYOffset } = window
    sections.forEach(section=>
        {const {id, offsetTop, clientHeight } = section;
        const offset = offsetTop -1;
        if (
            pageYOffset >= offset &&
            pageYOffset < offset + clientHeight){
                resetLinks();
                navLinks.forEach(link => {
                    if (link.dataset.scroll === id){
                        link.classList.add("activo");
                    }
                });
            }
        });
    };
document.addEventListener("scroll", handleScroll);
const NavBar = () => {
    
    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleClick1 = () => {
        if(clicked){

            setClicked(!clicked) 
        }   
    }
    
    return (
        <>
        <NavContainer>
        <Switch></Switch>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <ul>
            <li><a onClick={handleClick1} href="/CV" target={"_blank"}>Decargar CV</a></li> {/*onClick={handleClick1} className={`${clicked1 ? 'activo' : ''}`}*/}
            <li><a onClick={handleClick1} data-scroll="Inicio" href="#Inicio">Inicio</a></li> {/*onClick={handleClick1} className={`${clicked1 ? 'activo' : ''}`}*/}
            <li><a onClick={handleClick1} data-scroll="About" href="#About">SobreMi</a></li> {/*onClick={handleClick1} className={`${clicked1 ? 'activo' : ''}`}*/}
            <li><a onClick={handleClick1} data-scroll="Proyectos" href="#Proyectos">Proyectos</a></li> {/*onClick={handleClick1} className={`${clicked1 ? 'activo' : ''}`}*/}
            <li><a onClick={handleClick1} data-scroll="Contacto" href="#Contacto">Contacto</a></li> {/*onClick={handleClick1} className={`${clicked1 ? 'activo' : ''}`}*/}
        </ul>
        </div>
            {/* <SwitchLang></SwitchLang> */}
        
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
    z-index: 1000;
    position: sticky;
    top:0px;
    left: 0px;
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(
                to bottom,
                rgba(31,30,27,0.8),
                rgba(31,30,27,0.7)
                );
    border-bottom: dashed;
    border-color: #ff2301;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    li{
        justify-content: space-evenly;
        align-items: center;
        padding: 0px 25px;
        a{
            position: relative;
        }
    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }
    ul li a::before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    border-radius: 4px;
    background-color: #ff2301;   
    bottom: 0;
    left: 0;
    transform-origin: right;
    opacity: 0;
    transition: .5s;
    }
    ul li a.activo::before,
    ul li a:hover::before
    {
    width: 100%;
    transform-origin: left;
    opacity: 1 ;
    }  
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
        transition: all .5s ease;
        a{
            color: #ff2301;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 1000px){
            position: initial;
            margin: 0;
            display: block; /*  */ 
            
            a{
                font-size: 1.5rem;
                /* padding: 15px 15px; */
                /* margin: 5px 5px; */
                color: #ff2301;
                display: inline;
            }
        }
    }
    
    .links.active{
        ul{
            flex-direction: column;
        }
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1;
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
        top: 0;
        left: 0;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    `

