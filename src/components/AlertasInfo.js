import React  from 'react';
import { Alert } from 'react-bootstrap';
const AlertaInfo=({messageI, showAlertI, handleCloseAlertI})=>{    
    if (showAlertI) {
      return (
        <Alert variant="info" onClose={handleCloseAlertI} dismissible>
          <Alert.Heading>Información!</Alert.Heading>
          <p>
           {messageI}
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
export default AlertaInfo;