import React  from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
const AlertaError=({message, showAlert, handleCloseAlert})=>{    
    if (showAlert) {
      return (
        <AlertModify variant="danger"  onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Error!</Alert.Heading>
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
export default AlertaError;
export const AlertModify=styled(Alert)`
  width:100%;
  min-width:300px;
  margin-top:10px;
`;