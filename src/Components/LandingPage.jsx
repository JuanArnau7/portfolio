import React from "react";

import NavBar from './NavBar'
import foto from '../images/foto-cv-t.png'
import styled from "styled-components";
import Footer from "./Footer";
const LandingPage = () => {



    return (
        <>
        <NavBar></NavBar>
        <LandingContainer>  
        <div className="contNoA">
        <div className="contImg">

        <img src={foto} height="450px"  alt="Profile not found"></img>

        </div>
        <div className="contTexto">

        <h1>Hola! Bienvenidos!👋</h1>
        <h2>Mi nombre es Juan Pablo Arnau 👨‍💻</h2>

        <h3>💻Soy desarrollador full stack💻</h3>
        
        <p>📍Naci y vivo en Argentina📍</p>
        
        <p>📩juanarnau81@gmail.com📩</p>
        </div>
        </div>
        <div className="aCont">
            <a href="https://github.com/JuanArnau7/">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="54" height="54" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            </a>
            <br></br>
            <a href="https://www.linkedin.com/in/juanarnau7">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="54" height="54" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2301" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="18" height="18" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg></a>
        </div>

        </LandingContainer>
        <Footer></Footer>
        </>
    )
}

export default LandingPage

const LandingContainer =styled.nav `
img{
    border-radius: 50%;
    border: dashed;
    border-color: #ff2301;
    margin: 3px 50px;
    @media(max-width: 850px){
        height: 350px;
    }
}
.contTexto{
    color: #ff2301;
    border: dashed;
    flex-direction: column;
    margin: 5px 70px;
    padding: 15px 30px;

}
.aCont{ 
    display:flex;
    justify-content: center;

    padding:2rem  ;
    margin: 2rem 2rem;
    
}
a{
    border: dashed;
    border-color: #ff2301;
    padding: 1rem;
    margin: 1.5rem 5rem;
    transition: transform 250ms, opacity 400ms;

}
.contNoA{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;    
    align-items: center;
    margin-top: 70px;
    /* margin: 70px; */

    @media(max-width:1070px){
        /* display: flex; */
        justify-content: center;
        align-items: center;
        flex-direction:column ;
        /* padding: 3px 3px; */
    }
}


a:hover{
    transform: scale(1.2);
    opacity: 1;
}

h1{
    font-size: 45px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
h2{
    font-size: 35px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
h3{
    font-size: 33px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
p{
    font-size: 25px;
    font-weight: 500;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
`