import React  from 'react';
import { Alert } from 'react-bootstrap';
const AlertaError=({message, showAlert, handleCloseAlert})=>{    
    if (showAlert) {
      return (
        <Alert variant="danger" onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Error!</Alert.Heading>
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
export default AlertaError;