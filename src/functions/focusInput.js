export const isFocused =(input, isFocus)=>{
    //console.log(input)
    if(isFocus){      
        input.current.focus();
        input.current.style.borderBottom='solid 2px red';       
    }   
}
export const focusOn=(isFocus)=>{
    isFocus=true;
}
export const focusOff=(isFocus)=>{
    isFocus=false;
}
//evaluar si los inputs del formulario de registro estan llenos para quitar el color rojo de error
export const isInputEmpty=(inputs, referenciasElementos, IdForm)=>{  
    switch(IdForm){
        case 'formCreacionCuenta':
            if(inputs.nombres!==''){
                referenciasElementos.nombres.current.style.borderBottom='solid 1px #000';
            }  
            if(inputs.apellidos!==''){
                referenciasElementos.apellido.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.numeroDocumento!==''){
                referenciasElementos.numDocumento.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.numeroDocumento!==''){
                referenciasElementos.numDocumento.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.tipoDocumento!=='0'){
                referenciasElementos.tipoDoc.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.tipoUsuario!=='0'){
                referenciasElementos.tipoUsu.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.lugarLudicas!=='0'){
                referenciasElementos.lugarLudicas.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.correoElectronico!==''){
                referenciasElementos.correo.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.contraseña!==''){
                referenciasElementos.clave.current.style.borderBottom='solid 1px #000';
            }

        break;
        case 'formRecuperarPassword':
            if(inputs!==''){                
                referenciasElementos.email.current.style.borderBottom='solid 1px #000';        
            }
        break;
        case 'loginForm':
            if(inputs.identificacion!==''){
                referenciasElementos.identificacionR.current.style.borderBottom='solid 1px #000';
            }
            if(inputs.contraseña!==''){
                referenciasElementos.pass.current.style.borderBottom='solid 1px #000';
            }
        break;
        //caso especial del input vericar password
        case 'inputVerificarPass':
            if(inputs.passVerify === inputs.pass){                
                referenciasElementos.verifyPass.current.style.borderBottom='solid 1px #000';        
            }
        break;
        default:         
            console.log('Error');
        break;

    }   
}