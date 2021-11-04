import React, {useState, useRef} from "react";
import styled from 'styled-components';
import {Container } from 'react-bootstrap';
import AlertaError from './AlertasError';
import AlertaSuccess from './AlertasSuccess';
import AlertaInfo from './AlertasInfo';
import {tieneLetras, tieneSimbolos} from '../functions/seguridadPassword';
import {marcarInputErroneo, focusOff, focusOn} from '../functions/focusInput';
import breakpoint from '../functions/Breakpoints';
import Navegacion from './MenuNavegacionExterna';
import VentanaModal from './ModalVentana';
import FormRecuperar from './FormRecuperarContraseña';
import FormCreacionCuenta from './FormRegistro';
import {BotonRecuperar, BotonRegistrar, Boton} from './Botones';

//variable global para el color del input al hacer focus 
var color='#45CC1A';
//componente login 
const Login=()=>{   
    var IdForm='loginForm';
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
    //referencia a los input
    const identificacion_txt=useRef();
    const pass_txt=useRef();
    //hook para capturar la informacion digitada por el usuario
    const [loginDataUser, setDataLogin]=useState({
        identificacion:'',
        contraseña:''
    });
    //hook para las alertas de error 
    const[showAlertError, setShowAlertError]=useState(false);
    const[messageError, setMessageError]=useState('');
    const handleShowAlert = () => setShowAlertError(true);
    const handleCloseAlert = () => setShowAlertError(false);
    //hook para las alertas de exito 
    const[showAlertSuccess, setShowAlertSuccess]=useState(false);
    const[messageSuccess, setMessageSuccess]=useState('');
    const handleShowAlertS = () => setShowAlertSuccess(true);
    const handleCloseAlertS = () => setShowAlertSuccess(false);
     //hook para las alertas de informacion 
    const[showAlertInfo, setShowAlertInfo]=useState(false);
    const[messageInfo, setMessageInfo]=useState('');
    const handleShowAlertI= () => setShowAlertInfo(true);
    const handleCloseAlertI = () => setShowAlertInfo(false);
    //funcion para capturar y modificar el estado de los inputs
    const getDataUserLogin=(e) => {
        const data={...loginDataUser, [e.target.name]: e.target.value};
        setDataLogin(data);   

    }
    const onBlurr =()=>{   
        const arrayElementos=[identificacion_txt, pass_txt];    
        focusOff(arrayElementos, IdForm);
    }
    const onFocuss=()=>{
        if(document.activeElement.name){
            if(document.activeElement.name==='identificacion')
                focusOn(identificacion_txt);
            else{
                focusOn(pass_txt);
            }
        }     
    }
    const limpiarInputs=()=>{
        setDataLogin((loginDataUser)=>{
            const newDataUserLogin={...loginDataUser};
            newDataUserLogin.identificacion='';
            newDataUserLogin.contraseña='';
            return newDataUserLogin
        });
        
    }
    const validacionForm=()=>{
        //validacion del form 
        if(loginDataUser.identificacion===''){
            setMessageError('El campo identificación no puede estar vacio!');
            handleShowAlert();
            marcarInputErroneo(identificacion_txt);      
        }else if(tieneLetras(loginDataUser.identificacion) || tieneSimbolos(loginDataUser.identificacion)){
            setMessageError('El campo identificación solo puede contener números!');
            handleShowAlert();
            marcarInputErroneo(identificacion_txt);          
        }
        else if(loginDataUser.contraseña===''){
            setMessageError('El campo contraseña no puede estar vacio!');
            handleShowAlert();
            marcarInputErroneo(pass_txt);        
        }else{
            limpiarInputs();
            setMessageSuccess('Login correcto!');
            handleShowAlertS();
            setMessageInfo('Su usuario esta inactivo por favor ' +
            ' comuniquese con el adminstrador del sistema dirigiendose a la' +
            ' seccción "reporte de problemas" y envie un mensaje atravez '+
            'del formulario para que le'+
            ' de acceso!');
            //muestra la alerta de informacion despues de dos segundos
            setTimeout(()=>{handleShowAlertI()},2000)
            //cierra la alerta de informacion despues de 5 segundos
            setTimeout(()=>{handleCloseAlertI()},10000)
            setTimeout(()=>{handleCloseAlertS()}, 2000);
        }
        setTimeout(()=>{handleCloseAlert()}, 2000);
    }  
    const onSubmit=(e) => {
        e.preventDefault();
        validacionForm();
    }
    return(
        <div >
            <Navegacion/>
            <Form onSubmit={onSubmit}>           
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
                    <Input type="text" name="identificacion"  onBlur={onBlurr}  onFocus={onFocuss} value={loginDataUser.identificacion} ref={identificacion_txt} placeholder="Digite su número de identificación"  autocomplete="off" onChange={getDataUserLogin}/>               
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </Col>
                    <Input type="password" name="contraseña"  onBlur={onBlurr}  onFocus={onFocuss} value={loginDataUser.contraseña} ref={pass_txt}  placeholder="************" onChange={getDataUserLogin}/>
                </Fila>            
                <Boton title="Ingresar al sistema" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    Iniciar sesión                  
                </Boton>
                <FilaVariant className="fila_variant">
                    <BotonRecuperar title="Restablecer contraseña olvidada" onClick={handleShowR} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        <p> Recuperar contraseña</p>                
                    </BotonRecuperar>
                    <BotonRegistrar title="Registrate si aun no estas registrado" onClick={handleShow} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        <p>Crear cuenta nueva</p>    
                    </BotonRegistrar>
                </FilaVariant>
            </Form>
            <Container className="d-flex justify-content-center" style={{width:'30%'}}>
                <AlertaError  message={messageError} showAlert={showAlertError} handleCloseAlert={handleCloseAlert}/>  
                <AlertaSuccess  message={messageSuccess} showAlert={showAlertSuccess} handleCloseAlert={handleCloseAlertS} /> 
                <AlertaInfo  messageI={messageInfo} showAlertI={showAlertInfo} handleCloseAlertI={handleCloseAlertI} /> 
            </Container>
            <VentanaModal show={show} handleClose={handleClose} titulo='Formulario de registro'>           
                <FormCreacionCuenta />
            </VentanaModal>

            <VentanaModal show={showR} handleClose={handleCloseR} titulo='Recuperación de contraseña' >
                <FormRecuperar/>
            </VentanaModal>
        </div>
    );
}
//componentes con estilos
export const Form= styled.form`
    width:60%;
    margin:100px auto;
    min-width:300px;
    max-width:400px;
    text-align:center;
    background-color:rgba(255, 255, 255,0.7);
    padding:30px;
    box-shadow:10px 10px 10px rgba(0,0,0,0.5);
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        margin-top:75px;
    }
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
    &:focus{
        border-bottom:2px solid ${color};
    }
`;
export const Fila=styled.div`
    display:grid;
    width:100%;
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
export default Login;