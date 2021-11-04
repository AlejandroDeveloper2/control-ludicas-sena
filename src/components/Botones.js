import styled from 'styled-components';
import breakpoint from '../functions/Breakpoints';
import {Svg, Svg1} from '../pages/MenuPrincipal';

export const Boton=styled.button`
    color:#fff;
    width:100%;
    padding:10px;
    margin-top:20px;
    z-index:1;
    background:#EE7C12;
    position:relative;
    cursor:pointer;
    border:none;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        margin:0;
    }
    svg{
        margin-right:10px;
    }
    &::after{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        left:-360px;
        top:0;
        z-index:-1;
        background:#C37220;
        transition:all 0.5s ease;
    }
    &:hover::after{
        left:0px;
        transition:all 0.5s ease;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        p{
            display:none;
        }
    }
`;
export const BotonRecuperar=styled(Boton)`
    background:#D42D19;
    &::after{   
        background:#BC2914;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:90%;
    }
`;
export const BotonRegistrar=styled(Boton)`
    margin-left:10px;
    width:95%;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:100%;
        margin-left:0;
    }
`;
export const BotonCerrarSesion=styled.button`
    width:15%;
    padding:10px;
    background:transparent;
    color:#fff;
    border:solid 2px rgba(255, 255, 255, 0.9);
    border-radius:10px;
    margin-right:10px;
    transition: all 0.5s ease;
    &:hover{
        font-weight:bold;
        border:solid 2px rgba(255, 255, 255, 0.4);
        ${Svg1} {
            transition: all 0.5s ease;
            transform:scale(1.2);
        }
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:30%;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:20%;
    }
`;
export const BotonPerfil=styled(BotonCerrarSesion)`
    border:none;
    position:relative;
    rect{
        width:100%;
        height:100%;
        stroke:#fff;
        stroke-width:3px;
        stroke-dasharray:1000;
        stroke-dashoffset:1000;
        transition:all 0.8s ease;
    }
    &:hover {
        border:0;
        rect{         
            stroke-dashoffset:0;
        }  
        ${Svg}{
            transform:rotate(360deg);
        }    
    }
`;
export const BotonEsconderMenu=styled.button`
    width:60px;
    height:40px;
    background:#000;
    color:#fff;
    font-weight:bold;
    border:none;
    display:none;
    position:relative;
    margin-top:20%;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    overflow:hidden;
    z-index:1;
    transition:all 0.5s ease;
    &::after{
        content:'';
        opacity:0;
        transform:scaleX(0);
        position:absolute;
        width:100%;
        height:100%;
        left:0px;
        top:0;
        z-index:-1;
        background:rgba(225,120,27,1);
        transition:all 0.5s ease;
    }
    &:hover::after{
        transition: all  0.5s ease-in;
        transform:scaleX(1);
        opacity:1;
    } 
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        display:block;
        position:fixed;  
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        display:block;
        position:fixed;
    }   
`;