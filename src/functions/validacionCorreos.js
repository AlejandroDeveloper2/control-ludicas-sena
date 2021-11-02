export const validarCorreo=(email)=>{
    //cadena regular para validar email
    // eslint-disable-next-line
    var re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    //funcion exec valida que el email ingresado contenga los caracteres que contiene la exprecion anterior ademas del orden.
	if(!re.exec(email)){
		return false;
	}
	else {
        return true;
	}
}
