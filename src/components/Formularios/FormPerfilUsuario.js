import React, {useRef, useState}from 'react';
import {Container } from 'react-bootstrap';
import {Fila, Col, FilaVariant} from './login';
import {tieneNumeros, tieneLetras, tieneSimbolos, calcularSeguridadPass, valoracionSeguridadPass} from '../../functions/seguridadPassword';
import AlertaError from '../Alertas/AlertasError';
import AlertaSuccess from '../Alertas/AlertasSuccess';
import MedidorSeguridad from '../MedidorSeguridadClave';
import {validarCorreo} from '../../functions/validacionCorreos';
import {marcarInputErroneo, focusOn,focusOff} from '../../functions/focusInput';
import {BotonRecuperar as BotonCancelar, BotonRegistrar as BotonEditar, BotonVerVariant} from '../Botones';
import {Input, Select} from '../Inputs';
import {FilaTextArea as FilaVariante} from './FormReporteProblema';

const FormPerfilUsuario=({handleClose})=>{
    let IdForm="FormPerfilUsuario";
    //hook para controlar el estado del medidor
    const[propsMedidor, setPropsMedidor]=useState({
        carga:'0%', 
        color:'none', 
        valoracion:'',
        puntaje:0
    });
    //hook para capturar el valor de los  inputs
    const [perfilUsuario, setPerfilUsuario]=useState({
        nombres:'',
        apellidos:'',
        numeroDocumento:'',
        tipoDocumento:'0',
        correoElectronico:'',
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
    //hooks para crear una referencia a los input 
    const nombre_txt=useRef();
    const apellido_txt=useRef(); 
    const numDoc_txt=useRef(); 
    const tipoDoc_txt=useRef(); 
    const correo_txt=useRef();  
    const pass_txt=useRef();

    const onBlurr=()=>{
        const arrayElementos=[nombre_txt, apellido_txt, numDoc_txt, tipoDoc_txt, correo_txt, pass_txt];
        focusOff(arrayElementos, IdForm);
    }
    const onFocuss=()=>{
        if(document.activeElement.name){
            if(document.activeElement.name==='nombres')
                focusOn(nombre_txt);
            else if(document.activeElement.name==='apellidos'){
                focusOn(apellido_txt);
            }else if(document.activeElement.name==='numeroDocumento'){
                focusOn(numDoc_txt);
            }else if(document.activeElement.name==='tipoDocumento'){
                focusOn(tipoDoc_txt);
            }else if(document.activeElement.name==='correoElectronico'){
                focusOn(correo_txt);
            }
            else if(document.activeElement.name==='contraseña'){
                focusOn(pass_txt);
            }
        }
    }

    const getDataPerfil=(e)=>{   
        const elementos={...perfilUsuario, [e.target.name]: e.target.value};
        setPerfilUsuario(elementos)
        //console.log(elementos)  
        const clave = elementos.contraseña;     
        let puntaje=calcularSeguridadPass(clave); 
        valoracionSeguridadPass(puntaje, setPropsMedidor);       
    }
    const onSubmit=(e) => {
        e.preventDefault();
        //validaciones formulario
        if(perfilUsuario.nombres ===""){         
            handleShowAlert();
            setMessageError('El campo nombre no puede ser vacio!');
            marcarInputErroneo(nombre_txt);    
        }else if(tieneNumeros(perfilUsuario.nombres) || tieneSimbolos(perfilUsuario.nombres)){
            handleShowAlert();
            setMessageError('El campo nombre solo puede contener letras!');
            marcarInputErroneo(nombre_txt); 
        }
        else if(perfilUsuario.apellidos ===""){
            handleShowAlert();
            setMessageError('El campo apellidos no puede ser vacio!');        
            marcarInputErroneo(apellido_txt);                
        }
        else if(tieneNumeros(perfilUsuario.apellidos) || tieneSimbolos(perfilUsuario.apellidos)){
            handleShowAlert();
            setMessageError('El campo apellidos solo puede contener letras!');        
            marcarInputErroneo(apellido_txt); 
        }
        else if(perfilUsuario.numeroDocumento ===""){
            handleShowAlert();
            setMessageError('El campo número documento no puede ser vacio!');
            marcarInputErroneo(numDoc_txt);           
        }
        else if(tieneLetras(perfilUsuario.numeroDocumento) || tieneSimbolos(perfilUsuario.numeroDocumento)){
            handleShowAlert();
            setMessageError('El campo número documento solo puede contener números!');
            marcarInputErroneo(numDoc_txt);
        }
        else if(tipoDoc_txt.current.value === "0"){
            handleShowAlert();
            setMessageError('Selecciona tu tipo de número documento!');  
            marcarInputErroneo(tipoDoc_txt);                      
        }
        else if(perfilUsuario.correoElectronico === ""){
            handleShowAlert();
            setMessageError('El campo correo no puede ser vacio!');
            marcarInputErroneo(correo_txt);           
        }
        else if(!validarCorreo(perfilUsuario.correoElectronico)){
            handleShowAlert();
            setMessageError('El correo ingresado no es valido!');
            marcarInputErroneo(correo_txt); 
        }
        else if(perfilUsuario.contraseña ===""){
            handleShowAlert();
            setMessageError('El campo contraseña no puede ser vacio!');      
            marcarInputErroneo(pass_txt);                  
        }else{          
            handleCloseAlert();
            handleShowAlertS();
            setMessageSuccess('Perfil actualizado satisfactoriamente!')
            setTimeout(()=>{handleCloseAlertS()},2000)
        }
        setTimeout(()=>{handleCloseAlert()},2000)  
    } 
    //hook para cambiar icono y titulo del boton e tipo del input password ver clave 
    const[propsBoton, setPropsBoton]=useState({
        titulo:'Ver contraseña',
        claseIcono:'bi bi-eye-fill',
        pathIcono1:'M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z',
        pathIcono2:'M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
        tipoInput:'password'
    });
    //funciones para mostrar u ocultar contraseña
    const mostrarClave=()=>{
        setPropsBoton((propsBoton)=>{
            const newPropsBoton={...propsBoton};
            newPropsBoton.titulo="Ocultar contraseña";
            newPropsBoton.claseIcono="bi bi-eye-slash-fill";
            newPropsBoton.pathIcono1="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z";
            newPropsBoton.pathIcono2="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z";
            newPropsBoton.tipoInput="text";
            return newPropsBoton;
        });
        if(propsBoton.titulo==="Ocultar contraseña"){
            setPropsBoton((propsBoton)=>{
                const newPropsBoton={...propsBoton};
                newPropsBoton.titulo="Ver contraseña";
                newPropsBoton.claseIcono="bi bi-eye-fill";
                newPropsBoton.pathIcono1="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z";
                newPropsBoton.pathIcono2="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z";
                newPropsBoton.tipoInput="password";
                return newPropsBoton;
            });
        }
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="nombres"  ref={nombre_txt} placeholder="Ingrese sus nombres" autocomplete="off" value={perfilUsuario.nombres} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}/>
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="apellidos" ref={apellido_txt} placeholder="Ingrese sus apellidos" autocomplete="off" value={perfilUsuario.apellidos} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}/>
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="numeroDocumento" ref={numDoc_txt} placeholder="Número de documento" autocomplete="off" value={perfilUsuario.numeroDocumento} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}/>
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-rolodex" viewBox="0 0 16 16">
                            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                        </svg>
                    </Col>
                    <Select  name="tipoDocumento" ref={tipoDoc_txt} value={perfilUsuario.tipoDocumento} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}>
                        <option value="0" defaultValue>
                            Seleccione su tipo de documento
                        </option>
                        <option value="1" >
                            Cedula de ciudadania
                        </option>
                        <option value="2" >
                            Tarjeta de identidad
                        </option>
                    </Select>
                </Fila>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="correoElectronico" ref={correo_txt}  placeholder="Ingrese su correo electronico" autocomplete="off"  value={perfilUsuario.correoElectronico} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}/>
                </Fila>
                <FilaVariante>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </Col>
                    <Input type={propsBoton.tipoInput} name="contraseña"  ref={pass_txt} placeholder="Ingrese su contraseña"  value={perfilUsuario.contraseña} onChange={getDataPerfil} onFocus={onFocuss} onBlur={onBlurr}/>
                    <BotonVerVariant type="button" title={propsBoton.titulo} onClick={mostrarClave}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={propsBoton.claseIcono} viewBox="0 0 16 16">
                            <path d={propsBoton.pathIcono1}/>
                            <path d={propsBoton.pathIcono2}/>
                        </svg>  
                    </BotonVerVariant>
                </FilaVariante>
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-battery-half" viewBox="0 0 16 16">
                            <path d="M2 6h5v4H2V6z"/>
                            <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                        </svg>
                    </Col>                   
                    <MedidorSeguridad  propsMedidor={propsMedidor}/> 
                </Fila>
                <FilaVariant>      
                    <BotonEditar   type="submit"  title="Editar perfil">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        Editar
                    </BotonEditar>
                    <BotonCancelar type="button" onClick={handleClose} title="Cancelar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        Cancelar
                    </BotonCancelar>
                </FilaVariant>
            </form>
            <Container className="d-flex justify-content-center" >
                <AlertaError  message={messageError} showAlert={showAlertError} handleCloseAlert={handleCloseAlert}/>  
                <AlertaSuccess  message={messageSuccess} showAlert={showAlertSuccess} handleCloseAlert={handleCloseAlertS} /> 
            </Container> 
        </div>
    );
}
export default FormPerfilUsuario;