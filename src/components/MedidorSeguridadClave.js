import React from 'react';
import styled from 'styled-components';
import breakpoint from '../functions/Breakpoints';
const MedidorSeguridadClave=({propsMedidor})=>{

    return(
        <ContenedorMedidor>
            <Medidor load={propsMedidor.carga} colorFondo={propsMedidor.color}>
                <span> 
                    {propsMedidor.valoracion+' : '+ propsMedidor.puntaje}
                </span>
            </Medidor>                                                         
        </ContenedorMedidor>    
    )
}
const Medidor=styled.div`
    height:20px;
    display: flex;
    align-items:center;
    transition:all  0.6s ease-in-out;
    width:${props=>props.load};
    background:${props=>props.colorFondo};
    span{
        transition:all 0.3s ease-in;
        transition-delay:${props=>props.load==='0%' ? '0.1s':'0.5s'};
        line-height:20px;
        color:#fff;
        width:100%;
        opacity:${props=>props.load==='0%' ? '0':'1'};
        text-align:center;
    }
`;
const ContenedorMedidor=styled.div`
    width:100%;
    height:20px;
    border:solid 1px #333;
    border-radius:5px;
    background:none;
    margin-top:25px;
    overflow:hidden;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        span{
            font-size:12px;
        }
    }
`;
export default MedidorSeguridadClave;