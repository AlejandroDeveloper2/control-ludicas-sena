import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.webp';
import breakpoint from '../functions/Breakpoints';
//componente pie de pagina 
const Footer=()=>{
    return(
        <FooterDiv className="footer">
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
    position:absolute;
    bottom:0;
    min-height:70px;
    padding:10px;
    display:grid;
    grid-template-columns:1fr 1fr;
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
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        position:relative;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        padding:5px;
        height:auto;
        article h5{
            font-size:15px;
        }
        position:relative;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        position:relative;
    }
    @media only screen and (min-width: 768px) and (max-width:768px){
        position:relative;
    }
`;