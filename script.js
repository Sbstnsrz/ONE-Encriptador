//Variables globales:
var sinCodigo = ["e","i","a","o","u"];
var conCodigo = ["enter","imes","ai","ober","ufat"];
const encriptar = true;
const desencriptar = false;
var valido = true;
//Realiza la encriptacion/Desencriptacion:
function procesar(mensaje, encr){
    //encr, si true encripta, si false desencripta.
    var resultado = mensaje;
    var cont=0;
    for(cont=0; cont<resultado.length;cont++){
        valido = true;
        //Busca mayusculas:
        for(var i = 65; i<=90; i++){
            if(resultado.charCodeAt(cont) == i ){
                valido = false;
            }
        }
        //Busca acentos:
        for(var i = 192; i<=255; i++){
            if(resultado.charCodeAt(cont) == i ){
                valido = false;
            }
        }
        //Alerta que se uso minuscula o acento:
        if(!valido){break;}
    }
    if(valido){
        for(var cont=0; cont<sinCodigo.length; cont++){
            //seleccion de modo:
            if(encr){var pos1 = sinCodigo[cont];	var pos2 = conCodigo[cont];}
                else{var pos2 = sinCodigo[cont];	var pos1 = conCodigo[cont];}
            //Procesado:
            resultado = resultado.replaceAll(pos1,pos2);
        }
        sinImagenConBtnCopiar(true);
        return resultado;
    }
    else{
        sinImagenConBtnCopiar(false);
        alert("Ingreso \""+resultado[cont]+"\" !!");
        return "";
    }
}

function sinImagenConBtnCopiar(valor) {
    if(valor){
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".copiar").style.display = "block";
    }
    else{
    document.querySelector(".imagen").style.display = "block";
    document.querySelector(".copiar").style.display = "none";
    }
}

function validarEncriptacion(){
        var mensaje = procesar(entrada.value, encriptar);
        salida.value = mensaje;
}

function validarDesencriptacion(){
        var mensaje = procesar(entrada.value, desencriptar);
        salida.value = mensaje;
}

function copiarTexto(){
    var texto = document.querySelector(".output");
    texto.select();
    navigator.clipboard.writeText(texto.value);
    texto = document.querySelector(".input");
    texto.select();
}

var entrada =document.querySelector(".input");

var salida = document.querySelector(".output");

var botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.onclick = validarEncriptacion;

var botonDesencriptar = document.querySelector(".desencriptar");
botonDesencriptar.onclick = validarDesencriptacion;

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiarTexto;