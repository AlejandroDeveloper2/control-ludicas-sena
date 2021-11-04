import React  from 'react';
import { Alert } from 'react-bootstrap';
import {AlertModify} from './AlertasError';
const AlertaSuccess=({message, showAlert, handleCloseAlert})=>{    
    if (showAlert) {
      return (
        <AlertModify variant="primary" onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Operación exitosa!</Alert.Heading>
          <p>
           {message}
          </p>
        </AlertModify>
      );
    }else{
        return(
            <div>

            </div>
        )
    }
}
export default AlertaSuccess;