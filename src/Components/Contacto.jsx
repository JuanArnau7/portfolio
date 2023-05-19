import React from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const Contacto = () => {

    function enviarEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_birc1gw','template_igtbmr9',e.target,'BPisGsf_AmkKM40bT').then(res=>{
            alert('se ha enviado correctamente.');
        })
        
    }
    const input = document.getElementById("#input")

    const handleChange = (event) => {        
        event.target.classList.toggle("has-value", event.target.value)
    }

    return (
        <>
        <ContactoContainer>

            <div className="container">
                <div className="containerForm">
                    <h1><u>Formulario de Contacto</u></h1>
                    <form onSubmit={enviarEmail}>
                        <div className="formulario">

                        <div className="md-textbox">
                            <input
                                onInput={handleChange}
                                id="input"
                                type="text"
                                name="nombre"
                                className="letras"
                            />
                            {/* <span
                            className="material-symbols-outlined">
                            account_circle
                            </span> */}
                            <label htmlFor="input"> Nombre: </label>
                        </div>
                        <div className="md-textbox">
                            <input
                                onInput={handleChange}
                                // id="input"
                                type="email"
                                name="email"
                                className="letras"

                            />
                            {/* <span
                            className="material-symbols-outlined">
                            account_circle
                            </span> */}
                            <label htmlFor="input"> Email: </label>
                        </div>
                        <div className="md-textbox">
                            <input
                                onInput={handleChange}
                                // id="input"
                                type="text-area"
                                name="mensaje"
                                className="letras"

                            />
                            {/* <span
                            className="material-symbols-outlined">
                            account_circle
                            </span> */}
                            <label htmlFor="input"> Mensaje: </label>
                        </div>
                        {/* <input type="text" className="form-control" id="nombre" name="nombre"></input> */}
                        <button type="submit" className="botonEC" >Enviar Correo</button>
                        </div>
                    </form>
                </div>
            </div>
        </ContactoContainer>
        </>
    )
}

export default Contacto

const ContactoContainer = styled.nav`
    min-height: 86vh;
    padding-top: 80px;
    .letras{
        font-size: 20px;
    }
    .formulario{
        gap: 25px;
        display: flex;
        flex-direction:column;
        padding: 7px 25px;
    }
    .md-textbox{
        position: relative;
    }
    .md-textbox :is(label,span){
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        pointer-events: none;
        color: #ff2301;
        transition: 0.3s;
    }

    .md-textbox > label {
        left: 10px;
        translate: 0 -50%;
        padding: 4px 8px;

    }

    .md-textbox > span {
        right: 16px;
        font-size: 28px;
    }

    .md-textbox > input {
        height: 56px;
        width: 220px;
        padding-left: 16px;
        border: 2px dashed #ff2301;
        border-radius: 8px;
        background: transparent;
        color: #ff2301;
    }
    .md-textbox > :is(input:focus, .has-value){
        border-color: #ff2301;
    }
    .md-textbox > :is(input:focus, .has-value)
    ~span{
        color : #ff2301;
    }
    .md-textbox > :is(input:focus, .has-value)
    ~ label {
        background-color: var(--background-form);
        color: rgb(255, 255, 255 / 85%);
        translate: 0 -46px;
    }   
    .md-textbox > input:invalid {
        outline: 2px solid red;
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
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .containerForm{
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
        background-color: inherit;
        width:242px;
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
        background-color: inherit;
        color: #ff2301;
        border-style: dashed;
        border-color: #ff2301;
        transform: scale(1.2);
    }

    


    

`