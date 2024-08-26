function verificadorDeCondiciones(){
    let mensaje=document.getElementById("mensaje").value;
    let textoEnMinuscula=mensaje.toLowerCase();
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if (mensaje!==textoEnMinuscula||mensaje.match(caracteres)){
        alert("El mensaje debe estar escrito en minusculas y no debe contener caracteres especiales");
        document.getElementById('contenido_der_noeditable').setAttribute('style','display:flex');
        document.getElementById('boton_copiar').setAttribute('style','visibility: hidden');
        document.getElementById("mensajeEncriptado").value = "";
        return false;
    } else{
        document.getElementById('contenido_der_noeditable').setAttribute('style','display:none');
        document.getElementById('boton_copiar').setAttribute('style','visibility: visible');
        return true;
    }
}
function encriptar() {
    if (verificadorDeCondiciones()==true){
        let texto = "";
        let caracter = [];
        let contador = 0;
        let textoEncriptado = "";
        texto = document.getElementById("mensaje").value;
        while (contador < texto.length) {
            caracter[contador] = texto[contador];
            switch (caracter[contador]) {
                case "a":
                    caracter[contador] = "ai";
                    break;
                case "e":
                    caracter[contador] = "enter";
                    break;
                case "i":
                    caracter[contador] = "imes";
                    break;
                case "o":
                    caracter[contador] = "ober";
                    break;
                case "u":
                    caracter[contador] = "ufat";
                    break;
            }
            textoEncriptado = textoEncriptado + caracter[contador];
            contador++;
        }
        document.getElementById("mensajeEncriptado").value = textoEncriptado;
        return;  
    }
}
function desencriptar() {
    if (verificadorDeCondiciones()==true){
        let texto = "";
        let caracter = [];
        let contador = 0;
        let textoDesencriptado = "";
        let palabra = "";
        texto = document.getElementById("mensaje").value;
        while (contador < texto.length) {
            caracter[contador] = texto[contador];
            if (caracter[contador - 1] + caracter[contador] == "ai") {
                caracter.splice(contador, 1);
            }
            if (caracter[contador - 4] + caracter[contador - 3] + caracter[contador - 2] + caracter[contador - 1] + caracter[contador] == "enter") {
                caracter.splice(contador - 3, 4);
            }
            if (caracter[contador - 3] + caracter[contador - 2] + caracter[contador - 1] + caracter[contador] == "imes") {
                caracter.splice(contador - 2, 3);
            }
            if (caracter[contador - 3] + caracter[contador - 2] + caracter[contador - 1] + caracter[contador] == "ober") {
                caracter.splice(contador - 2, 3);
            }
            if (caracter[contador - 3] + caracter[contador - 2] + caracter[contador - 1] + caracter[contador] == "ufat") {
                caracter.splice(contador - 2, 3);
            }
            palabra = caracter.filter(letra => letra != null);
            contador++;
        }
        contador=0;
        while(contador<palabra.length){
            textoDesencriptado=textoDesencriptado+palabra[contador];
            contador++;
        }
        document.getElementById("mensajeEncriptado").value = textoDesencriptado;
        return;
    }
}
function copiar(){
    let texto = document.getElementById("mensajeEncriptado").value;
    navigator.clipboard.writeText(texto);
}
