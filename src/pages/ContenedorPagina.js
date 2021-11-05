import styled from 'styled-components';
import breakpoint from '../functions/Breakpoints';
export const ContenedorPagina=styled.div`
    width:100%;
    height:780px;
    position:relative;
    background:rgba(255, 255, 255, 0.6); 
    z-index:-1;
    display:flex;
    flex-wrap: wrap;
    padding:20px;
    justify-content:center;     
    align-items:center;
    flex-direction:row;
    transition: all 0.5s ease;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
|       display:block;
        padding-top:30%;
        height:auto;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        display:block;
        padding-top:20%;
        height:auto;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        padding-top:10%;
        justify-content:flex-end;   
        height:auto;
    }
`;
