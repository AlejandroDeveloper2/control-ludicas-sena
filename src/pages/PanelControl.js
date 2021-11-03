import React, {useState} from 'react';
import Logo from '../images/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom"; 
import breakpoint from '../functions/Breakpoints';

const PanelAdmin=()=>{
    const[menu, setMenu]=useState({
        izquierda:'translateX(0px)'
    });
    const[botonMenu, setbotonMenu]=useState({
        posicion:'95px'
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
        transition:'all 0.5s ease'
    }
    const esconderMenu=()=>{
        if(menu.izquierda==='translateX(-120px)' && botonMenu.posicion==='0px'){
            setMenu((menu)=>{
                const newMenu={...menu};
                newMenu.izquierda='translateX(0px)';
                return newMenu;
            });
            setbotonMenu((botonMenu)=>{
                const newBotonMenu={...botonMenu};
                newBotonMenu.posicion='95px';
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
                newMenu.izquierda='translateX(-120px)';
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
    }

    window.addEventListener('resize', ajustarMenu);
    return(
        <ContenedorPagina>
            <ContenedorMenu style={ubicacionMenu} >
                <HeaderMenu>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <h5>Menú principal</h5>
                </HeaderMenu>
                <Ul>
                    <li>
                        <Link to="/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>   
                            <p>Gestión de usuarios</p>
                        </Link >   
                    </li> 
                    <li>                
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hourglass-top" viewBox="0 0 16 16">
                                <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"/>
                            </svg>
                            <p>Gestionar tope horas ludicas</p>
                        </Link>
                    </li>  
                    <li>                
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <p>Gestionar Lugares actividades</p>
                        </Link>
                    </li>
                    <li>                
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                            <p>Gestionar tipos de documento</p>
                        </Link>
                    </li>    
                    <li>                
                        <Link to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16">
                                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                            </svg>
                            <p>Gestionar reportes de usuarios</p>
                        </Link>
                    </li>                                
                </Ul>
                <ContenedorLogo>
                    <img src={Logo} alt="logo gestion ludicas" />
                    <p>Gestor de ludicas sena</p>
                </ContenedorLogo>
            </ContenedorMenu>
            <BotonEsconderMenu onClick={esconderMenu} style={ubicacionBoton} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={iconoBotonRotate}>
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </BotonEsconderMenu>
            <MenuHorizontal>

            </MenuHorizontal>
        </ContenedorPagina>
    );
}
export default PanelAdmin;
//estilos
const ContenedorMenu=styled.div`
    width:15%;
    height:100%;
    position:absolute;
    left:0;
    z-index:1;
    background-color:rgb(33,37,41);
    border-bottom-right-radius: 20px;
    transition: all 0.5s ease;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:26%;
        transform:translateX(-120px);
        transition: all 0.5s ease;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:15%;
        transform:translateX(-120px);
        transition: all 0.5s ease;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:22%;
        transition: all 0.5s ease;
    }
`;
const ContenedorPagina=styled.div`
    width:100%;
    height:780px;
    position:relative;
    background:rgba(255, 255, 255, 0.6);
   
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
        transition: all 0.5s ease;
        width:100%;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        float:left;
        transition: all 0.5s ease;
        width:100%;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:100%;
        transition: all 0.5s ease;
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
const Ul=styled.div`
    width:100%;
    display:block;
    font-weight:bold;
    cursor:pointer;
    li{
        border-bottom:1px solid #333;
        padding:15px;
        position:relative;
        list-style: none;  
        background:transparent;
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
    }
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
    justify-content:center;
    align-items:center;
    &::selected{
        color:#333741;
    }
    p{
        margin-left:10px;
        text-align:center;
        color:#fff;
        font-weight:bold;
        font-size:30px;
    }
    img{
        
        transition:all 0.5s ease;
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
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
`;
const BotonEsconderMenu=styled.button`
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
        position:absolute;  
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        display:block;
        position:absolute;
    }   
`;