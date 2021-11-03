import React from 'react';
import { Modal } from 'react-bootstrap';
import FormRecuperar from './FormRecuperarContraseña';
import FormCreacionCuenta from './FormRegistro';

const VentModal=({show, handleClose, f})=>{
    if(f==='1'){
        return(
            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton style={{backgroundColor: 'rgb(33,37,41)', color: '#fff'}}>
                    <Modal.Title>  
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        Recuperación de contraseña
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRecuperar/>
                </Modal.Body>
            </Modal>
        );
    }else if(f==='2'){
        return(
            <Modal show={show} onHide={handleClose}  >
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
                    <FormCreacionCuenta/>
                </Modal.Body>
            </Modal>
        );
    }
}
export default VentModal;