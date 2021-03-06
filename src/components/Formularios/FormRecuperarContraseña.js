import React, {useRef, useState} from 'react';
import {Container } from 'react-bootstrap';
import {Fila, Col, FilaVariant} from './login';
import {marcarInputErroneo, focusOff, focusOn} from '../../functions/focusInput';
import {validarCorreo} from '../../functions/validacionCorreos';
import AlertaError from '../Alertas/AlertasError';
import AlertaSuccess from '../Alertas/AlertasSuccess';
import AlertaInfo from '../Alertas/AlertasInfo';
import {BotonRecuperar as BotonLimpiar, BotonRegistrar as BotonVerificar} from '../Botones';
import {Input} from '../Inputs';

const FormRecuperarClave=()=>{
    var IdForm='formRecuperarPassword';
    const [valorEmail, setValorEmail]=useState('');
    //referencia al input email
    const correo_txt=useRef();
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

    const getValueEmail=(e)=>{
        const valorInput=e.target.value;
        setValorEmail(valorInput);
    }   
    const onBlurr =()=>{
        focusOff(correo_txt, IdForm);
    }
    const onFocuss=()=>{
        focusOn(correo_txt);        
    }
    const limpiarInputs=() => {
        setValorEmail('');
    }
    const validacionForm=() => {
        //validacion del form 
        if(valorEmail ===""){
            setMessageError('El campo correo electronico no puede ser vacio!');
            handleShowAlert();
            marcarInputErroneo(correo_txt);
        }else if(!validarCorreo(valorEmail)){
            setMessageError('El correo ingresado no es valido!');
            handleShowAlert();
            marcarInputErroneo(correo_txt);
        }else{
            handleCloseAlert();
            setMessageSuccess('Correo electronico verificado!');
            handleShowAlertS();
            setTimeout(()=>{handleCloseAlertS()},2000)
            setMessageInfo('En unos minutos se le enviar?? a su correo electronico' +
            ' un link a un formulario para que cambie su contrase??a '+
            'de acceso!');
            //muestra la alerta de informacion despues de un segundo
            setTimeout(()=>{handleShowAlertI()},2000)
            limpiarInputs();
            setTimeout(()=>{handleCloseAlertI()},5000)
            //  //el formulario se cierre en 5 segundos
            // setTimeout(()=>{handleClose()},5000)
        }
        setTimeout(()=>{handleCloseAlert()}, 2000);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        validacionForm();
    }
    return(
        <div>
            <form onSubmit={onSubmit} id="form">
                <Fila>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                        </svg>
                    </Col>
                    <Input type="text" name="correoElectronico" onBlur={onBlurr} onFocus={onFocuss} value={valorEmail} ref={correo_txt} placeholder="Ingrese su correo electronico" autocomplete="off" onChange={getValueEmail} />
                </Fila>
                <FilaVariant>
                    <BotonLimpiar  type="button"  title="Limpiar formulario" onClick={limpiarInputs}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                        Limpiar
                    </BotonLimpiar>
                    <BotonVerificar   type="submit"  title="Verificar correo digitado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        Verificar
                    </BotonVerificar>
                </FilaVariant>          
            </form>
            <Container className="d-flex justify-content-center">
                <AlertaError  message={messageError} showAlert={showAlertError} handleCloseAlert={handleCloseAlert}/>  
                <AlertaSuccess  message={messageSuccess} showAlert={showAlertSuccess} handleCloseAlert={handleCloseAlertS} /> 
                <AlertaInfo  messageI={messageInfo} showAlertI={showAlertInfo} handleCloseAlertI={handleCloseAlertI} /> 
            </Container>
        </div>
    );
}
export default FormRecuperarClave;