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