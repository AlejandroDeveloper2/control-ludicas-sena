import React, {useState} from 'react';
import styled from 'styled-components';
import breakpoint from '../functions/Breakpoints';

const BarraSecundariaMenu=()=>{
    var horaActual=new Date();
    const [hora, setHora]=useState(null);
    //reloj
    setTimeout(()=>{ 
        var horas=horaActual.getHours();
        var minutos=horaActual.getMinutes();
        var segundos= horaActual.getSeconds();
        var horaHoy=horas+' : '+ minutos +' : '+segundos; setHora(horaHoy)}, 1000);
        var ampm= horaActual.getHours();
        
    return(
        <Barra>
            <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                </svg>
                Administrador del sistema
            </h5>
            <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dpad-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3Zm1.288 2.34-.799 1.278A.25.25 0 0 0 7.201 4H8.8a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
                </svg>
                Panel de control
            </h5>
            <h5 >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-smartwatch" viewBox="0 0 16 16">
                    <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
                    <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
                </svg>
                Reloj: {ampm > 12 ? hora + ' Pm' : hora +' Am' }
            </h5>
        </Barra>
    );
}
export default BarraSecundariaMenu;
const Barra=styled.div`
    width:85%;
    height:50px;
    background-color:rgba(0,0,0,0.6);
    position:absolute;
    right:0;
    top:8%;
    color:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
    h5{
        font-weight:bold;

        svg{
            margin-right:10px;
        }
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:100%; 
        top:80px;
        position:fixed;
        flex-wrap: wrap;
        padding:10px;
        box-sizing: border-box;
        height:auto;
        h5{
            font-size:15px;
        }
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:100%;
        top:80px;
        h5{
            font-size:16px;
        }
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:75%;
        top:80px;
        h5{
            font-size:18px;
        }
    }
`;
