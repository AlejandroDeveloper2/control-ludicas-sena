export const marcarInputErroneo =(input)=>{
    //console.log(input)       
    input.current.focus();
    input.current.style.borderBottom='solid 2px red';
}

export const focusOff =(inputs, IdForm)=>{
    switch(IdForm){
        case 'formRecuperarPassword':           
            inputs.current.style.borderBottom='solid 1px #000';                   
        break;
        case 'loginForm': 
            inputs.forEach(input=>{input.current.style.borderBottom='solid 1px #000';})                       
        break;
        case 'formCreacionCuenta':
            inputs.forEach(input=>{input.current.style.borderBottom='solid 1px #000';})
        break;
        case 'formReporteProblema':
            inputs.forEach(input=>{input.current.style.borderBottom='solid 1px #000';})
        break;
        case 'FormPerfilUsuario':
            inputs.forEach(input=>{input.current.style.borderBottom='solid 1px #000';})
        break;
        default:         
            console.log('Error');
        break;
    }   
}
export const focusOn =(input)=>{  
    input.current.style.borderBottom='solid 2px #45CC1A';                                        
}