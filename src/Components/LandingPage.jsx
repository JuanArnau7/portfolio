import React from "react";

import NavBar from './NavBar'
import foto from '../images/fotocv.png'
import styled from "styled-components";
const LandingPage = () => {



    return (
        <>
        <NavBar></NavBar>
        <LandingContainer>  

        <div>
        <img src={foto} height="400px"  alt="Profile image not found"></img>
        </div>


        <div className="texto">

        <p>Hola! Bienvenidos!</p>
        <p>Mi nombre es Juan Pablo Arnau</p>

        <p>Soy desarrollador full stack</p>
        
        <p>Naci y vivo en Argentina</p>
        
        <p>juanarnau81@gmail.com</p>
        </div>
        <div className="aCont">
            <a href="https://github.com/JuanArnau7/">GITHUB</a>
            <br></br>
            <a href="https://www.linkedin.com/in/juanarnau7">LINKEDIN</a>
        </div>

        </LandingContainer>
        </>
    )
}

export default LandingPage

const LandingContainer =styled.nav `


.texto{
    display: flex;
    flex-direction: column;

}
.aCont{ 
    display:flex;
    flex-direction:row;
    justify-content: center;
    padding:2rem ;
    margin: 2rem;
}
a{
    padding: 1rem;
    margin: 1rem;
}

`