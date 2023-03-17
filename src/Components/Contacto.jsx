import React from "react";
import styled from "styled-components";
import Footer from "./Footer";


import NavBar from './NavBar';
import emailjs from 'emailjs-com';

const Contacto = () => {

    function enviarEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_birc1gw','template_igtbmr9',e.target,'BPisGsf_AmkKM40bT').then(res=>{
            alert('se ha enviado correctamente.');
        })
    }

    return (
        <>
        <NavBar></NavBar>
        <ContactoContainer>

            <div className="container">
                <div className="containerForm">
                    <h1><u>Formulario de Contacto</u></h1>
                    <form onSubmit={enviarEmail}>
                        <div className="campos">
                            <label><b>Nombre:</b></label>
                            <input type="text" className="form-control" id="nombre" name="nombre"></input>
                        </div>
                        <div className="campos">
                            <label><b>Email:</b></label>
                            <input type="email" className="form-control" id="email" name="email"></input>
                        </div>
                        <div className="campos">
                            <label><b>Mensaje:</b></label>
                            <textarea type="text" className="form-control" id="mensaje" name="mensaje"></textarea>
                        </div>
                        <button type="submit" className="botonEC" >Enviar Correo</button>
                    </form>
                </div>
            </div>
        </ContactoContainer>
        <Footer></Footer>
        </>
    )
}

export default Contacto

const ContactoContainer = styled.nav`
    min-height: 86vh;
    .campos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #mensaje{
        min-height: 35px;
        max-height: 200px;

        min-width: 350px;
        max-width: 450px;
        border-width: 2px;
        }
    .form-control{
        height: 3vh;
        width: 35vh;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 0.7em;
        border-style: solid;
        border-color: #ff2301;
        &:focus{
            border-style: dashed;
            border-color: #ff2301;
            outline: none;
        }
        &:hover{
            border-style:dashed ;
            border-color: #ff2301;
        }
    }
    
    .containerForm{
        background-color: rgba(0,0,0,0.2);
        height: 30rem;
        width: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ff2301;
        margin: 10rem;
        border: dashed ;
        font-family: "Roboto", "sanserif";
        font-weight: bold;
        font-size: 1.3em;
    }   
    .containerForm h1 {
        font-size: 2em;
        margin-top: 0;
    }
    .botonEC{
        cursor: pointer;
        width:200px;
        height: 30px;
        margin-top:10px;
        color: #ff2301;
        font-size: 0.8em;
        font-weight: bold;
        border-radius: 10px;
        border-style: solid;
        border-color: #ff2301;
    }
    .botonEC:hover{
        background-color: rgba(0,0,0,0.1);
        color: #ff2301;
        border-style: dashed;
        border-color: #ff2301;
    }
`