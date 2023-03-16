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
                    <h1>Formulario de Contacto</h1>
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
                        <button type="submit" style={{width:"50%",margin:"0 auto", marginTop:"20px"}}>Enviar Correo</button>
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
    /* height: 100vh; */
    /* width: 100vw; */
    /* position: relative; */
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

        /* height: 80%  ; */
        /* width: 100%; */
        
        /* background-color: aliceblue; */
        
    }
    .form-control{
        height: 3vh;
        width: 35vh;
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
    }

`