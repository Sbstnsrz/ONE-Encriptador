var entrada = document.querySelector(".input");
var salida = document.querySelector(".output");


var botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.onclick = validarEncriptacion;

var botonDesencriptar = document.querySelector(".desencriptar");
botonDesencriptar.onclick = validarDesencriptacion;

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiarTexto;



//Realiza la encriptacion/Desencriptacion:
function procesar(mensaje, encr){
    var sinCodigo = ["e","i","a","o","u"];
    var conCodigo = ["enter","imes","ai","ober","ufat"];
    var resultado = mensaje;
    //Devuelve el largo total de la frase, o el index del primer error:
    var prhaseLength = phraseCorrect(mensaje);
 
    if(prhaseLength===mensaje.length){
        for(var cont=0; cont<sinCodigo.length; cont++){
            //seleccion de modo:
            if(encr){
                var pos1 = sinCodigo[cont];
                var pos2 = conCodigo[cont];
            }else{
                var pos2 = sinCodigo[cont];
                var pos1 = conCodigo[cont];
            }
            //Procesado:
            resultado = resultado.replaceAll(pos1,pos2);
        }
        sinImagenConBtnCopiar(true);
        return resultado;
    }
    else{
        sinImagenConBtnCopiar(false);
        alert("Ingreso \""+resultado[prhaseLength]+"\" !!");
        return "";
    }
}

function phraseCorrect(str){
    for(var cont=0; cont<str.length;cont++){
        //Busca mayusculas y acentos:
        if(findUpperCase(str, cont) || !charsAtoZ(str, cont)){
            return cont;
        }
    }
    return cont;   
}

function findUpperCase(str, cont){
    for(var i = 65; i<=90; i++){
        if(str.charCodeAt(cont) == i ){
            return true;
        }
    }
    return false;
}

function charsAtoZ(str, cont){
    for(var i = 192; i<=255; i++){
        if(str.charCodeAt(cont) == i ){
            return false;
        }
    }
    return true;
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
        var mensaje = procesar(entrada.value, true);
        salida.value = mensaje;
}

function validarDesencriptacion(){
        var mensaje = procesar(entrada.value, false);
        salida.value = mensaje;
}

function copiarTexto(){
    salida.select();
    navigator.clipboard.writeText(salida.value);
    entrada.select();
}