import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.webp';
//componente pie de pagina 
const Footer=()=>{
    return(
        <FooterDiv>
            <article>
                <h5>© Aplicacion web creada por aprendiz de El SENA
                todos los derechos reservados</h5>
            </article>
            <img src={Logo} className="rounded float-right" alt="..." id="img" />
	    </FooterDiv>
    );
}
export default Footer;
const FooterDiv=styled.div`
    width:100%;
    height:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding-left:20px;
    padding-right:20px;
    background:rgba(225,120,27,0.7);
    color:#fff;
    box-shadow:inset 6px 6px 6px rgba(0,0,0,0.5);
    article{
        display:flex;
        justify-content:center;
        align-items:center;
        paddind:5px;
    }
    img{
        margin:30px auto;
        width:100px;
        height:auto;
    }
`;
