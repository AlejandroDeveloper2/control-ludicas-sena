import React, {useState} from 'react';
import Logo from '../images/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom"; 
import {BotonCerrarSesion, BotonPerfil, BotonEsconderMenu} from '../components/Botones';
import breakpoint from '../functions/Breakpoints';
import Barra from '../components/barraSecundariaMenu';

const PanelAdmin=()=>{
    const[menu, setMenu]=useState({
        izquierda:'translateX(0px)'
    });
    const[botonMenu, setbotonMenu]=useState({
        posicion:'0'
    });
    const[iconoBoton, setIconoBoton]=useState({
        transformar:'rotate(0deg)'
    });
    //estilos en linea de menu, boton para mostrar y esconder menu, icono
    const ubicacionMenu={
        transform:menu.izquierda
    }
    const ubicacionBoton={
        marginLeft:botonMenu.posicion
    }
    const iconoBotonRotate={
        transform:iconoBoton.transformar,
        transition:'all 0.6s ease'
    }   
    
    const esconderMenu=()=>{
        //obtenemos el ancho pantalla 
        let ancho=window.screen.width;
        if(menu.izquierda==='translateX(-140px)' && botonMenu.posicion==='0px'){
            setMenu((menu)=>{
                const newMenu={...menu};
                newMenu.izquierda='translateX(0px)';
                return newMenu;
            });
            setbotonMenu((botonMenu)=>{
                const newBotonMenu={...botonMenu};
                if(ancho < 500){
                    newBotonMenu.posicion='26%';
                }else if(ancho > 500 && ancho < 1024){
                    newBotonMenu.posicion='15%';
                }else if(ancho >=1024){
                    newBotonMenu.posicion='25%';
                }
                return newBotonMenu;
            });
            setIconoBoton((iconoBoton)=>{
                const newIcono={...iconoBoton};
                newIcono.transformar='rotate(-180deg)';
                return newIcono;
            });
        }else{
            setMenu((menu)=>{
                const newMenu={...menu};
                newMenu.izquierda='translateX(-140px)';
                return newMenu;
            });
            setbotonMenu((botonMenu)=>{
                const newBotonMenu={...botonMenu};
                newBotonMenu.posicion='0px';
                return newBotonMenu;
            });
            setIconoBoton((iconoBoton)=>{
                const newIcono={...iconoBoton};
                newIcono.transformar='rotate(0deg)';
                return newIcono;
            });
        }
    }
    const ajustarMenu=()=>{
       setMenu(ubicacionMenu.transform='translateX(0)');   
       setbotonMenu(ubicacionBoton.marginLeft='0');   
    }
    //hook para activar o desactivar los links
    const[activo, setActivo]=useState({
        linkInicio:true,
        linkGestionUsuarios:false,
        linkTope:false,
        linkLugares:false,
        linkTipoDoc:false,
        linkReportes:false
    });
    //funciones para modificar el estado de cada link
    const setActivoInicio=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=true;
            newActivo.linkGestionUsuarios=false;
            newActivo.linkTope=false;
            newActivo.linkLugares=false;
            newActivo.linkTipoDoc=false;
            newActivo.linkReportes=false;
            return newActivo;
        });
    }
    const setActivoGU=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=false;
            newActivo.linkGestionUsuarios=true;
            newActivo.linkTope=false;
            newActivo.linkLugares=false;
            newActivo.linkTipoDoc=false;
            newActivo.linkReportes=false;
            return newActivo;
        });
    }
    const setActivoTope=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=false;
            newActivo.linkGestionUsuarios=false;
            newActivo.linkTope=true;
            newActivo.linkLugares=false;
            newActivo.linkTipoDoc=false;
            newActivo.linkReportes=false;
            return newActivo;
        });
    }
    const setActivoLugares=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=false;
            newActivo.linkGestionUsuarios=false;
            newActivo.linkTope=false;
            newActivo.linkLugares=true;
            newActivo.linkTipoDoc=false;
            newActivo.linkReportes=false;
            return newActivo;
        });
    }
    const setActivoDoc=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=false;
            newActivo.linkGestionUsuarios=false;
            newActivo.linkTope=false;
            newActivo.linkLugares=false;
            newActivo.linkTipoDoc=true;
            newActivo.linkReportes=false;
            return newActivo;
        });
    }
    const setActivoRe=()=>{
        setActivo((activo)=>{
            const newActivo={...activo};
            newActivo.linkInicio=false;
            newActivo.linkGestionUsuarios=false;
            newActivo.linkTope=false;
            newActivo.linkLugares=false;
            newActivo.linkTipoDoc=false;
            newActivo.linkReportes=true;
            return newActivo;
        });
    }
    window.addEventListener('resize', ajustarMenu);
    return(
        <div>
            <ContenedorMenu style={ubicacionMenu} >
                <HeaderMenu>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <h5>Menú principal</h5>
                </HeaderMenu>
                <Ul >
                    <Li active={activo.linkInicio} onClick={setActivoInicio}>
                        <Link to="/MenuPrincipal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg> 
                            <p>Inicio</p>
                        </Link >   
                    </Li> 
                    <Li active={activo.linkGestionUsuarios} onClick={setActivoGU} >
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>   
                            <p>Gestión de usuarios</p>
                        </Link >   
                    </Li> 
                    <Li active={activo.linkTope} onClick={setActivoTope} >                
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hourglass-top" viewBox="0 0 16 16">
                                <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"/>
                            </svg>
                            <p>Gestionar tope horas ludicas</p>
                        </Link>
                    </Li>  
                    <Li active={activo.linkLugares} onClick={setActivoLugares}>                
                        <Link to="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <p>Gestionar Lugares actividades</p>
                        </Link>
                    </Li>
                    <Li active={activo.linkTipoDoc} onClick={setActivoDoc} >                
                        <Link to="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                            <p>Gestionar tipos de documento</p>
                        </Link>
                    </Li>    
                    <Li active={activo.linkReportes} onClick={setActivoRe} >                
                        <Link to="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16">
                                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                            </svg>
                            <p>Gestionar reportes de usuarios</p>
                        </Link>
                    </Li>                                
                </Ul>
                <ContenedorLogo>
                    <img src={Logo} alt="logo gestion ludicas" />
                    <p>Gestor de ludicas sena</p>
                </ContenedorLogo>
            </ContenedorMenu>
            <BotonEsconderMenu onClick={esconderMenu} style={ubicacionBoton} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" style={iconoBotonRotate}>
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </BotonEsconderMenu>
            <MenuHorizontal>
                <InfoUser>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <span>Bienvenido: Diego Alejandro Diaz Bonilla</span>
                    <BotonPerfil title="Configurar perfil de usuario">                         
                        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </Svg>
                        <svg style={{
                            width:'100%', 
                            height:'100%', 
                            position:'absolute',
                            left:'0', 
                            top:'0', 
                            fill:'none'}}>
                            <rect x="0" y="0" fill="none"></rect>
                        </svg>
                    </BotonPerfil>
                    <BotonCerrarSesion title="Cerrar sesión">
                        <Svg1 xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </Svg1>
                    </BotonCerrarSesion>
                </InfoUser>
            </MenuHorizontal>
            <Barra></Barra>
        </div>
    );
}
export default PanelAdmin;
//estilos
export const Svg=styled.svg`
    transition:all 0.9s ease;
`;
export const Svg1=styled.svg`
    transition:all 0.6s ease;
`;
const InfoUser=styled.div`
    width:30%;
    height:100%;
    right:0;
    position:absolute;
    background:transparent;
    border-left:solid 1px rgba(225,120,27,0.9);
    display:flex;
    justify-content:end;
    color:#fff;
    align-items:center;
    overflow:hidden;
    transition: all 0.5s ease;
    span{
        margin:0 20px;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:100%;    
        padding-left:10px;
        span{
            margin:0 10px;
        }
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        padding-left:10px;
        width:85%;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:75%;
    }
`;
const ContenedorMenu=styled.div`
    width:15%;
    height:83%;
    position:absolute;
    left:0;
    z-index:1;
    background-color:rgb(33,37,41);
    border-bottom-right-radius: 20px;
    transition: all 0.5s ease;
    overflow:hidden;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:26%;
        height:auto;
        position:fixed;
        border-top-right-radius: 20px;
        transform:translateX(-120px);
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:15%;
        height:auto;
        transform:translateX(-120px);
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:25%;
        height:auto;
    }
`;
const MenuHorizontal=styled.div`
    width:85%;
    height:8%;
    position:absolute;
    top:0;
    right:0;
    background-color:rgba(225,120,27,0.7);
    transition: all 0.5s ease;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        float:left;
        position:fixed;
        transition: all 0.5s ease;
        width:100%;
        height:80px;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        float:left;
        transition: all 0.5s ease;
        width:100%;
        height:80px;

    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:100%;
        transition: all 0.5s ease;
        height:80px;
    }
`;
const HeaderMenu=styled.div`
    width:100%;
    height:65px;
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-weight:bold;
    svg{
        margin-right:10px;
    }
    h5{
        margin:0;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        h5{
            display:none;
        }
        
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        h5{
            display:none;
        }
        
    }

`;
const Li=styled.li`
    border-bottom:1px solid #333;
    padding:15px;
    position:relative;
    list-style: none;  
    background:${props=>props.active ? 'rgba(225,120,27,1)': 'transparent'};
    transition: all 0.5s ease-in-out;
    z-index:1;
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
    a{
        text-decoration:none;
        color:#fff;
        display:flex;
        align-items:center;
        p{
            margin:0;
        }
    }
    svg{
        margin-right:10px;
    }          
`;
const Ul=styled.div`
    width:100%;
    display:block;
    cursor:pointer;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        p{
            display:none;
        }               
        a{
            justify-content:center;  
        }           
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        p{
            display:none;
        }               
        a{
            justify-content:center;  
        }            
    }
`;
const ContenedorLogo=styled.div`
    width:100%;
    height:auto;
    margin-top:50px;
    transform:scale(0.6);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:15px;
    &::selected{
        color:#333741;
    }
    p{
        margin-left:0;
        text-align:center;
        color:#fff;
        font-weight:bold;
        font-size:30px;
    }
    img{
        
        transition:all 0.5s ease;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        margin-top:0;
        img{
            transition:all 0.5s ease;
            transform:scale(0.5);
        }
        p{
            display:none;
        }
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        img{
            transition:all 0.5s ease;
            transform:scale(0.5);
        }
        p{
            display:none;
        }
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
       
    }
`;