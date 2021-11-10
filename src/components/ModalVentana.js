import React from 'react';
import { Modal } from 'react-bootstrap';

const VentModal=({children, show, handleClose, titulo})=>{
    return(
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton style={{backgroundColor: 'rgb(33,37,41)', color: '#fff'}}>
                <Modal.Title>  
                    {titulo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );

}
export default VentModal;