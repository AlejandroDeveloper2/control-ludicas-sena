import React  from 'react';
import { Alert } from 'react-bootstrap';
const AlertaSuccess=({message, showAlert, handleCloseAlert})=>{    
    if (showAlert) {
      return (
        <Alert variant="primary" style={{width:'100%', minWidth:'400px', marginTop:'10px'}} onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Operación exitosa!</Alert.Heading>
          <p>
           {message}
          </p>
        </Alert>
      );
    }else{
        return(
            <div>

            </div>
        )
    }
}
export default AlertaSuccess;