import React, {useRef, useState}from 'react';
import { Modal, Container } from 'react-bootstrap';
import {Input, Fila, Col, FilaVariant, BotonRecuperar as BotonLimpiar, BotonRegistrar} from './login';
import {tieneNumeros, tieneLetras, tieneMinusculas, tieneMayusculas, tieneSimbolos} from '../functions/seguridadPassword';
import AlertaError from './AlertasError';
import AlertaSuccess from './AlertasSuccess';
import AlertaInfo from './AlertasInfo';
import MedidorSeguridad from './MedidorSeguridadClave';
import {marcarInputErroneo, focusOn,focusOff} from '../functions/focusInput';
//import {TransitionGroup } from "react-transition-group";
import styled from 'styled-components';
//componente formulario de registro
const FormRegistro=({show, handleClose})=> {
    //variable para identificar el formulario
    var IdForm='formCreacionCuenta';
    //declaramos una variable para guardar el puntaje de seguridad de la contraseña
    var seguridadPuntaje=0;
    //hook para controlar el estado del medidor
    const[propsMedidor, setPropsMedidor]=useState({
        carga:'0%', 
        color:'none', 
        valoracion:'',
        puntaje:seguridadPuntaje
    });
    // asignamos un valor a la barra medidora segun el puntaje de seguridad obtenido
    const resultMedidor=(puntajeSeguridad)=>{
        if(puntajeSeguridad === 0){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='0%';
                newPropsMedidor.color='none';
                newPropsMedidor.valoracion='';
                newPropsMedidor.puntaje=0;
                return newPropsMedidor;
            });
        }
        else if(puntajeSeguridad>0 && puntajeSeguridad <= 30 ){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='25%';
                newPropsMedidor.color='#CE400F';
                newPropsMedidor.valoracion='Muy debil';
                newPropsMedidor.puntaje=puntajeSeguridad;
                return newPropsMedidor;
            });
        }else if(puntajeSeguridad > 30 && puntajeSeguridad < 50){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='40%';
                newPropsMedidor.color='#E1841B';
                newPropsMedidor.valoracion='Debil';
                newPropsMedidor.puntaje=puntajeSeguridad;
                return newPropsMedidor;
            });
        }else if(puntajeSeguridad >=50 && puntajeSeguridad <= 65){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='50%';
                newPropsMedidor.color='#1B8DE1';
                newPropsMedidor.valoracion='Normal';
                newPropsMedidor.puntaje=puntajeSeguridad;
                return newPropsMedidor;
            });
        }else if(puntajeSeguridad > 65 && puntajeSeguridad <= 80){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='75%';
                newPropsMedidor.color='#38B81F';
                newPropsMedidor.valoracion='Fuerte';
                newPropsMedidor.puntaje=puntajeSeguridad;
                return newPropsMedidor;
            });
        }else if(puntajeSeguridad > 80){
            setPropsMedidor((propsMedidor)=>{
                const newPropsMedidor={...propsMedidor};
                newPropsMedidor.carga='100%';
                newPropsMedidor.color='#24BDB3';
                newPropsMedidor.valoracion='Muy Fuerte';
                newPropsMedidor.puntaje=puntajeSeguridad;
                return newPropsMedidor;
            }); 
        }
    }
    //hook para capturar el valor de los  inputs
    const [nuevoUsuario, setNuevoUsuario]=useState({
        nombres:'',
        apellidos:'',
        numeroDocumento:'',
        tipoDocumento:'0',
        tipoUsuario:'0',
        lugarLudicas:'0',
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
     //hook para las alertas de informacion 
    const[showAlertInfo, setShowAlertInfo]=useState(false);
    const[messageInfo, setMessageInfo]=useState('');
    const handleShowAlertI= () => setShowAlertInfo(true);
    const handleCloseAlertI = () => setShowAlertInfo(false);

    const [valorPasswordR, setValorPasswordR]=useState('');
  
    //hooks para crear una referencia a los input 
    const verify_pass_txt=useRef();
    const pass_txt=useRef();
    const nombre_txt=useRef();
    const apellido_txt=useRef(); 
    const numDoc_txt=useRef(); 
    const tipoDoc_txt=useRef(); 
    const tipoUsu_txt=useRef();
    const lugarLudicas_txt=useRef(); 
    const correo_txt=useRef();  
    
    const getVerifyPassword=(e)=>{
        const valorInput=e.target.value;
        setValorPasswordR(valorInput);
    }
    const onBlurr=()=>{
        const arrayElementos=[nombre_txt, apellido_txt, numDoc_txt, tipoDoc_txt, tipoUsu_txt, lugarLudicas_txt, correo_txt, pass_txt, verify_pass_txt];
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
            }else if(document.activeElement.name==='tipoUsuario'){
                focusOn(tipoUsu_txt);
            }else if(document.activeElement.name==='lugarLudicas'){
                focusOn(lugarLudicas_txt);
            }else if(document.activeElement.name==='correoElectronico'){
                focusOn(correo_txt);
            }
            else if(document.activeElement.name==='contraseña'){
                focusOn(pass_txt);
            }else if(document.activeElement.name==='verify_pass'){
                focusOn(verify_pass_txt);
            }
        }
    }
    //funcion que captura y evalua la password ingresada por el usuario
    const getDataUser=(e)=>{   
        const elementos={...nuevoUsuario, [e.target.name]: e.target.value};
        setNuevoUsuario(elementos)
        //console.log(elemento)  
        const clave = elementos.contraseña;     
        calcularSeguridadPass(clave);      
    }

    const calcularSeguridadPass=(password)=>{
        //validamos la seguridad de la password  
        if(password.length !== 0){
            if(tieneNumeros(password) &&  tieneLetras(password)){
                seguridadPuntaje+=20;             
            }         
            if(tieneMinusculas(password) &&  tieneMayusculas(password)){
                seguridadPuntaje+=20;
            }
            if(tieneSimbolos(password)){
               seguridadPuntaje+=20;
            }
            if(password.length <=5){
                seguridadPuntaje+=5;
            }else if(password.length > 5 && password.length <= 8 ){
                seguridadPuntaje+=20;
            }else if(password.length > 8 ){
                seguridadPuntaje+=40;
            }   
            resultMedidor(seguridadPuntaje);   
        }else{
            resultMedidor(0);
        }
    }
    
    const onSubmit=(e) => {
        IdForm='inputVerificarPass';
        e.preventDefault();
        //validaciones formulario
        if(nuevoUsuario.nombres ===""){         
            handleShowAlert();
            setMessageError('El campo nombre no puede ser vacio!');
            marcarInputErroneo(nombre_txt);    
        }else if(tieneNumeros(nuevoUsuario.nombres) || tieneSimbolos(nuevoUsuario.nombres)){
            handleShowAlert();
            setMessageError('El campo nombre solo puede contener letras!');
            marcarInputErroneo(nombre_txt); 
        }
        else if(nuevoUsuario.apellidos ===""){
            handleShowAlert();
            setMessageError('El campo apellidos no puede ser vacio!');        
            marcarInputErroneo(apellido_txt);                
        }
        else if(tieneNumeros(nuevoUsuario.apellidos) || tieneSimbolos(nuevoUsuario.apellidos)){
            handleShowAlert();
            setMessageError('El campo apellidos solo puede contener letras!');        
            marcarInputErroneo(apellido_txt); 
        }
        else if(nuevoUsuario.numeroDocumento ===""){
            handleShowAlert();
            setMessageError('El campo número documento no puede ser vacio!');
            marcarInputErroneo(numDoc_txt);           
        }
        else if(tieneLetras(nuevoUsuario.numeroDocumento) || tieneSimbolos(nuevoUsuario.numeroDocumento)){
            handleShowAlert();
            setMessageError('El campo número documento solo puede contener números!');
            marcarInputErroneo(numDoc_txt);
        }
        else if(tipoDoc_txt.current.value === "0"){
            handleShowAlert();
            setMessageError('Selecciona tu tipo de número documento!');  
            marcarInputErroneo(tipoDoc_txt);                      
        }
        else if(tipoUsu_txt.current.value === "0"){
            handleShowAlert();
            setMessageError('Selecciona tu tipo de usuario!');
            marcarInputErroneo(tipoUsu_txt);                          
        }
        else if(lugarLudicas_txt.current.value === "0"){
            handleShowAlert();
            setMessageError('Selecciona el lugar de actividades ludicas!');
            marcarInputErroneo(lugarLudicas_txt);                         
        }
        else if(nuevoUsuario.correoElectronico === ""){
            handleShowAlert();
            setMessageError('El campo correo no puede ser vacio!');
            marcarInputErroneo(correo_txt);           
        }
        else if(nuevoUsuario.contraseña ===""){
            handleShowAlert();
            setMessageError('El campo contraseña no puede ser vacio!');      
            marcarInputErroneo(pass_txt);                  
        }
        else if(nuevoUsuario.contraseña !== valorPasswordR){
            handleShowAlert();
            setMessageError('Las contraseñas no coinciden!');
            //la alerta se cierre en dos segundos
            setTimeout(()=>{handleCloseAlert()},2000)
            marcarInputErroneo(verify_pass_txt);             
        }else{          
            handleCloseAlert();
            handleShowAlertS();
            setMessageSuccess('Cuenta creada satisfactoriamente!')
            setTimeout(()=>{handleCloseAlertS()},2000)
            setMessageInfo('En unas horas a su correo electronico se le' +
            ' notifcara que se cuenta ha sido activada por el administrador '+
            'del sistema!');
            //muestra la alerta de informacion despues de un segundo
            setTimeout(()=>{handleShowAlertI()},2000)
            limpiarInputs();
            setTimeout(()=>{handleCloseAlertI()},5000)
             //el formulario se cierre en 5 segundos
            setTimeout(()=>{handleClose()},5000)
        }
        setTimeout(()=>{handleCloseAlert()},2000)  
    }
    const limpiarInputs=()=>{
        setNuevoUsuario((nuevoUsuario)=>{
            const newUser={...nuevoUsuario}
            newUser.nombres='';
            newUser.apellidos='';
            newUser.numeroDocumento='';
            newUser.tipoDocumento='0';
            newUser.tipoUsuario='0';
            newUser.lugarLudicas='0';
            newUser.correoElectronico='';
            newUser.contraseña='';
            return newUser;
        });
        setValorPasswordR(''); 
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='0%';
            newPropsMedidor.color='none';
            newPropsMedidor.valoracion='';
            newPropsMedidor.puntaje=0;
            return newPropsMedidor;
        });     
    }
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton style={{backgroundColor: 'rgb(33,37,41)', color: '#fff'}}>
                <Modal.Title>  
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                    Formulario de registro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={onSubmit}>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                            </svg>
                        </Col>
                        <Input type="text" name="nombres"  ref={nombre_txt} value={nuevoUsuario.nombres} placeholder="Ingrese sus nombres" autocomplete="off" onBlur={onBlurr} onFocus={onFocuss} onChange={getDataUser }/>
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
                                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                            </svg>
                        </Col>
                        <Input type="text" name="apellidos" ref={apellido_txt} value={nuevoUsuario.apellidos} placeholder="Ingrese sus apellidos" autocomplete="off" onBlur={onBlurr}  onFocus={onFocuss} onChange={getDataUser } />
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                        </Col>
                        <Input type="text" name="numeroDocumento"  ref={numDoc_txt} value={nuevoUsuario.numeroDocumento} onBlur={onBlurr} onFocus={onFocuss} placeholder="Número de documento" autocomplete="off" onChange={getDataUser }/>
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-rolodex" viewBox="0 0 16 16">
                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                            </svg>
                        </Col>
                        <Select  name="tipoDocumento"  value={nuevoUsuario.tipoDocumento} ref={tipoDoc_txt} onBlur={onBlurr}  onFocus={onFocuss} onChange={getDataUser}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </Col>
                        <Select name="tipoUsuario"  value={nuevoUsuario.tipoUsuario} ref={tipoUsu_txt} onBlur={onBlurr} onFocus={onFocuss} onChange={getDataUser}>
                            <option value="0" defaultValue>
                                Seleccione tipo de usuario
                            </option>
                            <option value="1" >
                                Aprendiz
                            </option>
                            <option value="2" >
                                Instructor
                            </option>
                        </Select>              
                    </Fila>
                    <Fila>  
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </Col>
                        <Select name="lugarLudicas"  value={nuevoUsuario.lugarLudicas} ref={lugarLudicas_txt} onChange={getDataUser} onBlur={onBlurr} onFocus={onFocuss}>
                            <option value="0" defaultValue>
                                Seleccione lugar para actividades ludicas
                            </option>
                            <option value="1" >
                                Gimnasio
                            </option>
                            <option value="2" >
                                Salon de musica
                            </option>
                        </Select>              
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                            </svg>
                        </Col>
                        <Input type="email" name="correoElectronico"  ref={correo_txt} onBlur={onBlurr}  onFocus={onFocuss} value={nuevoUsuario.correoElectronico} placeholder="Ingrese su correo electronico" autocomplete="off" onChange={getDataUser} />
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                        </Col>
                        <Input type="password" name="contraseña"  ref={pass_txt} onBlur={onBlurr}  onFocus={onFocuss} value={nuevoUsuario.contraseña} placeholder="Ingrese su contraseña" onChange={getDataUser} />
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-battery-half" viewBox="0 0 16 16">
                                <path d="M2 6h5v4H2V6z"/>
                                <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                            </svg>
                        </Col>                   
                        <MedidorSeguridad  propsMedidor={propsMedidor}/> 
                    </Fila>
                    <Fila>
                        <Col>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                        </Col>
                        <Input type="password"  name='verify_pass' ref={verify_pass_txt}  onBlur={onBlurr} onFocus={onFocuss} value={valorPasswordR} placeholder="Verifique su contraseña" onChange={getVerifyPassword } />
                    </Fila>
                    <FilaVariant>
                        <BotonLimpiar  type="button" onClick={limpiarInputs} title="Limpiar formulario">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                            Limpiar
                        </BotonLimpiar>
                        <BotonRegistrar   type="submit" onClick={handleShowAlert} title="Crear cuenta">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                            </svg>
                            Crear cuenta
                        </BotonRegistrar>
                    </FilaVariant>
                </form> 
            </Modal.Body>
            <Container>
                <AlertaError  message={messageError} showAlert={showAlertError} handleCloseAlert={handleCloseAlert}/>  
                <AlertaSuccess  message={messageSuccess} showAlert={showAlertSuccess} handleCloseAlert={handleCloseAlertS} /> 
                <AlertaInfo  messageI={messageInfo} showAlertI={showAlertInfo} handleCloseAlertI={handleCloseAlertI} /> 
            </Container>         
        </Modal>
    );
}
const Select=styled.select`
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
export default FormRegistro;