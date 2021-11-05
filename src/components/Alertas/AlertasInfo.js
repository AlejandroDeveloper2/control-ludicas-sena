import React  from 'react';
import { Alert } from 'react-bootstrap';
import {AlertModify} from './AlertasError';
const AlertaInfo=({messageI, showAlertI, handleCloseAlertI})=>{    
    if (showAlertI) {
      return (
        <AlertModify variant="info"  onClose={handleCloseAlertI} dismissible>
          <Alert.Heading>Información!</Alert.Heading>
          <p>
           {messageI}
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
export default AlertaInfo;