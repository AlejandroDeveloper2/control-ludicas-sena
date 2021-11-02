//funcion para validar si la contraseña tiene numeros
export const tieneNumeros=(contraseña)=>{
    var numeros="0123456789";
    for(var i=0;i<contraseña.length; i++){
        //validad si la contraseña tiene numeros
        if (numeros.indexOf(contraseña.charAt(i),0)!==-1){
            return 1;
        }
    }
    return 0;
}
//evaluar si la contraseña tiene letras
export const tieneLetras=(contraseña)=>{
    var letras="abcdefghijklmnopqrstuvwxyz";
    contraseña = contraseña.toLowerCase();
    for(var i=0;i<contraseña.length; i++){
        //validad si la contraseña tiene numeros
        if (letras.indexOf(contraseña.charAt(i),0)!==-1){
            return 1;
        }
    }
    return 0;
}
 
//evaluar si la contraseña tiene letras minusculas
export const tieneMinusculas=(contraseña)=>{
    var minusculas="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<contraseña.length; i++){
        //validad si la contraseña tiene minusculas
        if (minusculas.indexOf(contraseña.charAt(i),0)!==-1){
            return 1;
        }
    }
    return 0;
}
//evaluar si la contraseña tiene letras mayusculas
export const tieneMayusculas=(contraseña)=>{
    var mayusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i=0;i<contraseña.length; i++){
        //validad si la contraseña tiene mayusculas
        if (mayusculas.indexOf(contraseña.charAt(i),0)!==-1){
            return 1;
        }
    }
    return 0;
}
//evaluar si la contraseña tiene simbolos
export const tieneSimbolos=(contraseña)=>{
    var simbolos="!@#$%^&*()_-+={[}];:<,>.?/";
    for(var i=0;i<contraseña.length; i++){
        //validad si la contraseña tiene simbolos
        if (simbolos.indexOf(contraseña.charAt(i),0)!==-1){
            return 1;
        }
    }
    return 0;
}
//calcular el puntaje de seguridad de la contraseña ingresada
export const calcularSeguridadPass=(password)=>{
    let seguridadPuntaje=0;
    //validamos la seguridad de la password  
    if(password.length !== 0){
        if(tieneNumeros(password) &&  tieneLetras(password)){
            seguridadPuntaje+=20;             
        }         
        if(tieneMinusculas(password) &&  tieneMayusculas(password)){
            seguridadPuntaje+=20;
        }
        if(tieneSimbolos(password)){
           seguridadPuntaje+=20;
        }
        if(password.length <=5){
            seguridadPuntaje+=5;
        }else if(password.length > 5 && password.length <= 8 ){
            seguridadPuntaje+=20;
        }else if(password.length > 8 ){
            seguridadPuntaje+=40;
        }  
        return  seguridadPuntaje;
    }else{
        return 0;
    }
}
export const valoracionSeguridadPass=(puntajeSeguridad, setPropsMedidor)=>{
    if(puntajeSeguridad === 0){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='0%';
            newPropsMedidor.color='none';
            newPropsMedidor.valoracion='';
            newPropsMedidor.puntaje=0;
            return newPropsMedidor;
        });
    }
    else if(puntajeSeguridad>0 && puntajeSeguridad <= 30 ){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='25%';
            newPropsMedidor.color='#CE400F';
            newPropsMedidor.valoracion='Muy debil';
            newPropsMedidor.puntaje=puntajeSeguridad;
            return newPropsMedidor;
        });
    }else if(puntajeSeguridad > 30 && puntajeSeguridad < 50){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='40%';
            newPropsMedidor.color='#E1841B';
            newPropsMedidor.valoracion='Debil';
            newPropsMedidor.puntaje=puntajeSeguridad;
            return newPropsMedidor;
        });
    }else if(puntajeSeguridad >=50 && puntajeSeguridad <= 65){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='50%';
            newPropsMedidor.color='#1B8DE1';
            newPropsMedidor.valoracion='Normal';
            newPropsMedidor.puntaje=puntajeSeguridad;
            return newPropsMedidor;
        });
    }else if(puntajeSeguridad > 65 && puntajeSeguridad <= 80){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='75%';
            newPropsMedidor.color='#38B81F';
            newPropsMedidor.valoracion='Fuerte';
            newPropsMedidor.puntaje=puntajeSeguridad;
            return newPropsMedidor;
        });
    }else if(puntajeSeguridad > 80){
        setPropsMedidor((propsMedidor)=>{
            const newPropsMedidor={...propsMedidor};
            newPropsMedidor.carga='100%';
            newPropsMedidor.color='#24BDB3';
            newPropsMedidor.valoracion='Muy Fuerte';
            newPropsMedidor.puntaje=puntajeSeguridad;
            return newPropsMedidor;
        }); 
    }
}