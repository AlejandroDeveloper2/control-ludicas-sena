import React, {useState, useRef}from 'react';
import styled from 'styled-components';
import {Container } from 'react-bootstrap';
import {marcarInputErroneo, focusOn, focusOff} from '../../functions/focusInput';
import {Form, Fila, Col, FilaVariant} from './login';
import {tieneNumeros, tieneSimbolos} from '../../functions/seguridadPassword';
import {validarCorreo} from '../../functions/validacionCorreos';
import breakpoint from '../../functions/Breakpoints';
import AlertaError from '../Alertas/AlertasError';
import AlertaSuccess from '../Alertas/AlertasSuccess';
import AlertaInfo from '../Alertas/AlertasInfo';
import Navegacion from '../MenuNavegacionExterna';
import {BotonRecuperar as BotonLimpiar, BotonRegistrar as BotonEnviar} from '../Botones';
import {Input} from '../Inputs';
//variable global para el color del input al hacer focus 
var color='#45CC1A';
const FormReportar=()=>{
    var IdForm='formReporteProblema';
    const correo_txt=useRef();
    const asunto_txt=useRef();
    const mensaje_txt=useRef();

    const[mensajeUsuario, setMensajeUsuario]=useState({
        correo:'',
        asunto:'',
        mensaje:''
    });
    const onFocuss=()=>{
        if(document.activeElement.name){
            if(document.activeElement.name==='correo'){
                focusOn(correo_txt);
            }else if(document.activeElement.name==='asunto'){
                focusOn(asunto_txt);
            }else if(document.activeElement.name==='mensaje'){
                focusOn(mensaje_txt);
            }
        }
    }
    const onBlurr=()=>{
        const arrayElementos=[correo_txt, asunto_txt, mensaje_txt];
        focusOff(arrayElementos, IdForm);
    }
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
   
    const getMensajeUsuario=(e)=>{
        const datos={...mensajeUsuario, [e.target.name]: e.target.value};
        setMensajeUsuario(datos);
        //arreglo que contiene las palabras del ingresadas text area
        const arrayPalabras= datos.mensaje.split(' ');
        contarPalabras(arrayPalabras);
    }
    //hooks para el contador de palabras del text area
    const[numeroPalabras, setNumeroPalabras]=useState(0);
    const[numeroLetras, setNumeroLetras]=useState(0);
    //funcion para contar el numero de palabras del textarea para
    const contarPalabras=(arrayPalabras)=>{     
        let p=0, l=0; 
        for(let i=0; i<arrayPalabras.length; i++){
            //console.log(caracteres);
            if(arrayPalabras[i]!==''){
                l+=arrayPalabras[i].length;
                p+=1;
                setNumeroPalabras(p);
                setNumeroLetras(l)
                if(arrayPalabras.length > 300){
                    mensaje_txt.current.maxLength=numeroLetras;
                    setNumeroPalabras(arrayPalabras.length-1);
                    setNumeroLetras(l)
                    break;                             
                }     
                mensaje_txt.current.maxLength=10000;                         
            }  
            setNumeroPalabras(p);                               
        } 
    }  
    const limpiarInputs =()=>{
        setMensajeUsuario((mensajeUsuario)=>{
            const newMensajeUsuario={...mensajeUsuario};
            newMensajeUsuario.correo='';
            newMensajeUsuario.asunto='';
            newMensajeUsuario.mensaje='';   
            return newMensajeUsuario;
        });
        setNumeroPalabras(0);
        setNumeroLetras(0); 
    }
    const validacionForm=()=>{
        //validacion 
        if(mensajeUsuario.correo===''){
            handleShowAlert();
            setMessageError('El campo correo no puede estar vacio!');
            marcarInputErroneo(correo_txt);
        }else if(!validarCorreo(mensajeUsuario.correo)){
            handleShowAlert();
            setMessageError('El correo ingresado no es valido!');
            marcarInputErroneo(correo_txt); 
        }
        else if(mensajeUsuario.asunto===''){
            handleShowAlert();
            setMessageError('El campo asunto no puede estar vacio!');
            marcarInputErroneo(asunto_txt);
        }else if(tieneNumeros(mensajeUsuario.asunto ) || tieneSimbolos(mensajeUsuario.asunto)){
            handleShowAlert();
            setMessageError('El campo asunto solo puede contener letras!');
            marcarInputErroneo(asunto_txt);
        }else if(mensajeUsuario.mensaje===''){
            handleShowAlert();
            setMessageError('El campo mensaje no puede estar vacio!');
            marcarInputErroneo(mensaje_txt);
        }else if(tieneSimbolos(mensajeUsuario.mensaje)){
            handleShowAlert();
            setMessageError('El campo mensaje solo puede contener letras y numeros!');
            marcarInputErroneo(mensaje_txt);
        }else{
            limpiarInputs();
            handleCloseAlert();
            handleShowAlertS();
            setMessageSuccess('Mensaje enviado!');
            setTimeout(()=>{handleCloseAlertS()},2000);
            setMessageInfo('Este pendiente de su correo electronico se le' +
            ' dara una respuesta a su problema tan pronto como sea posible!');
            //muestra la alerta de informacion despues de un segundo
            setTimeout(()=>{handleShowAlertI()},2000);
            setTimeout(()=>{handleCloseAlertI()},7000);
        }
        setTimeout(()=>{handleCloseAlert()},2000);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        validacionForm();
    }

    return(
        <div>
            <Navegacion/>
            <Form onSubmit={onSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="correo"  value={mensajeUsuario.correo} ref={correo_txt} onBlur={onBlurr} onFocus={onFocuss} placeholder="Digite su correo electronico" autoComplete="off" onChange={getMensajeUsuario} /> 
                </Fila> 
                <Fila> 
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="asunto" value={mensajeUsuario.asunto} ref={asunto_txt} onBlur={onBlurr} onFocus={onFocuss} placeholder="Digite el asunto" autoComplete="off" onChange={getMensajeUsuario} />
                </Fila> 
                <FilaTextArea> 
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </Col>
                    <TextArea  name="mensaje" ref={mensaje_txt}  value={mensajeUsuario.mensaje} onBlur={onBlurr} onFocus={onFocuss} placeholder="Escriba su mensaje" autoComplete="off" onChange={getMensajeUsuario}   />    
                    <span>{numeroPalabras}/300</span>         
                </FilaTextArea>
                <FilaVariant>
                        <BotonLimpiar title="Limpiar formulario"  type="button" onClick={limpiarInputs}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            Limpiar
                        </BotonLimpiar>
                        <BotonEnviar title="Enviar mensaje al admin del sistema"  type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                            </svg>
                            Enviar
                        </BotonEnviar>
                </FilaVariant>
            </Form>
            <ContainerM className="d-flex justify-content-center" >
                <AlertaError  message={messageError} showAlert={showAlertError} handleCloseAlert={handleCloseAlert}/>  
                <AlertaSuccess  message={messageSuccess} showAlert={showAlertSuccess} handleCloseAlert={handleCloseAlertS} /> 
                <AlertaInfo  messageI={messageInfo} showAlertI={showAlertInfo} handleCloseAlertI={handleCloseAlertI} /> 
            </ContainerM> 
        </div>
    );  
}

export default FormReportar;
const ContainerM=styled(Container)`
    width:20%;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:100%;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:100%;
    }
`;
const TextArea=styled.textarea`
    width:100%;
    height:80px;
    border:none;
    border-bottom:1px solid #333;
    background:rgba(255,255, 255, 0.4);
    padding:10px;
    outline: none;
    position:relative;
    font-weight:bold;
    margin: 25px 25px 0px 0px;
    transition:all 0.3s ease;
    &:focus{
        transition:all 0.3s ease;
        border-bottom:2px solid ${color};
    }
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        height:40px;
    }
`;
const FilaTextArea=styled.div`
    display:grid;
    width:100%;
    grid-template-columns:0.1fr 1fr 0.2fr;
    span{
        margin-top:20px;
    }
`;