import React from "react";
import styled from "styled-components";
import Footer from "./Footer";


import NavBar from './NavBar'

const Contacto = () => {



    return (
        <>
        <NavBar></NavBar>
        <ContactoContainer>

            <div className="container">
                <div className="izquierda">
                    <label>titulo</label>
                    <input></input>
                    <label>tipo de trabajo</label>
                    <input></input>
                    <label>detalles</label>
                    <input></input>
                </div>
                <div className="derecha">

                </div>
            </div>
        </ContactoContainer>
        <Footer></Footer>
        </>
    )
}

export default Contacto

const ContactoContainer = styled.nav`
    /* background-color: #3e4144; */
    /* background-color: #dcdcdc; */
    height: 850px;
    /* position: relative; */
    .container{
        display: flex;
        
    }
    .izquierda{
        display: flexnpm;
        flex-direction: column;
    }

`