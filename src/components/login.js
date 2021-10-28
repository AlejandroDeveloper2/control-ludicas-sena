import React, {useState} from "react";
import styled from 'styled-components';
import FormRegistro from "./FormRegistro";
import FormRecuperar from "./FormRecuperarContraseña";
//componente login 
const Login=()=>{
    //hook para el modal de registro de usuarios
    const [show, setShow] = useState(false);
    //funciones para cambiar estado del modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //hook para el modal de registro de recuperacion de contraseña
    const [showR, setShowR] = useState(false);
    //funciones para cambiar estado del modal
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);
    return(
        <div style={{minHeight: 'calc(100vh - 200px)'}}>
            <Form>           
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                    </Col>
                    <Input type="text" placeholder="Digite su número de identificación" autocomplete={false}/>               
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </Col>
                    <Input type="password" placeholder="************" />
                </Fila>            
                <Boton title="Ingresar al sistema">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    Iniciar sesión
                </Boton>
                <FilaVariant>
                    <BotonRecuperar title="Restablecer contraseña olvidada" onClick={handleShowR}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        Recuperar contraseña
                    </BotonRecuperar>
                    <BotonRegistrar title="Registrate si aun no estas registrado" onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Crear cuenta nueva
                    </BotonRegistrar>
                </FilaVariant>
            </Form>
            <FormRegistro show={show} handleClose={handleClose}/>
            <FormRecuperar show={showR} handleClose={handleCloseR} />
        </div>
    );
}
//componentes con estilos
const Form= styled.div`
    width:60%;
    margin:70px auto;
    max-width:400px;
    text-align:center;
    background-color:rgba(255, 255, 255,0.7);
    padding:30px;
    box-shadow:10px 10px 10px rgba(0,0,0,0.5);
`;
export const Input=styled.input`
    width:100%;
    height:30px;
    border:none;
    border-bottom:1px solid #333;
    background:none;
    outline: none;
    position:relative;
    font-weight:bold;
    margin: 25px 25px 0px 0px;
    transition:all 0.5 ease-in-out;
    &:focus{
        transition:all 0.5 ease-in-out;
        border-bottom:2px solid #45CC1A;
    }
`;
export const Fila=styled.div`
    display:grid;
    grid-template-columns:0.1fr 1fr;
`;
export const FilaVariant=styled(Fila)`
    grid-template-columns:1fr 1fr;
`;
export const Col=styled.div`
    display:flex;
    justify-content:center;
    svg{
        margin-top:25px;
    }
`;
export const Boton=styled.button`
    color:#fff;
    width:100%;
    padding:10px;
    margin-top:20px;
    z-index:1;
    background:#000;
    position:relative;
    cursor:pointer;
    border:none;
    overflow:hidden;
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
        background:#EE7C12;
        transition:all 0.5s ease;
    }
    &:hover::after{
        left:0px;
        transition:all 0.5s ease;
    }
`;
export const BotonRecuperar=styled(Boton)`
    background:#7B2810;
    &::after{   
        background:#D42D19;
    }
`;
export const BotonRegistrar=styled(Boton)`
    margin-left:10px;
    width:95%;
    background:#2C8310;
`;
export default Login;