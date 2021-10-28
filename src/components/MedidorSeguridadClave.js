import React from 'react';
import styled from 'styled-components';

const MedidorSeguridadClave=({propsMedidor})=>{

    return(
        <ContenedorMedidor>
            <Medidor style={{width:propsMedidor.carga, background:propsMedidor.color}}>
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
    span{
        line-height:20px;
        color:#fff;
        width:100%;
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
`;
export default MedidorSeguridadClave;