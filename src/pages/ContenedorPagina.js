import styled from 'styled-components';
import breakpoint from '../functions/Breakpoints';
export const ContenedorPagina=styled.div`
    width:85%;
    float:right;
    height:780px;
    min-height:780px;
    position:relative;
    background:rgba(255, 255, 255, 0.6); 
    z-index:-1;
    display:flex;
    flex-wrap: wrap;
    padding:20px;
    justify-content:center;     
    align-items:center;
    flex-direction:row;
    border-bottom-left-radius: 20px;
    transition: all 0.5s ease;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:100%;
|       display:block;
        padding-top:42%;
        height:auto;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:100%;
        padding-top:20%;
        height:auto;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:100%;
        padding-top:15%;
        justify-content:flex-end;   
        height:auto;
    }
`;
