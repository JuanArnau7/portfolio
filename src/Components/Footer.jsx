import React from "react";
import styled from "styled-components";

const Footer = () => {

    

    return (
        <>
        <FooterContainer>

        <p>Desarrollado por <a href="/contacto">JuanArnau7</a>
            © 2023
        </p>

        </FooterContainer>
        </>
    )
}

export default Footer

const FooterContainer = styled.nav`
position: absolute;
bottom: 0;
width: 100%;
align-items: center;
border-top: dashed;
border-color: #ff2301;

a{
    text-decoration: none;
    color: #ff2301;
    text-decoration: underline;
}
`