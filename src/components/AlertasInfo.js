import React  from 'react';
import { Alert } from 'react-bootstrap';
const AlertaInfo=({messageI, showAlertI, handleCloseAlertI})=>{    
    if (showAlertI) {
      return (
        <Alert variant="info" style={{width:'100%', minWidth:'400px'}} onClose={handleCloseAlertI} dismissible>
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