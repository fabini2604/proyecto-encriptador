
const textArea= document.querySelector(".textoencriptar")
const mensaje=document.querySelector(".mensaje")

function btn(){
    const textoencriptado=encriptar(textArea.value)
    mensaje.value=textoencriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function encriptar(stringEncriptada){
    let matrizcod=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0;i<matrizcod.length;i++){
        if(stringEncriptada.includes(matrizcod[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizcod[i][0],matrizcod[i][1])
        }
    }
    return stringEncriptada
}

function btnn(){
    const textoencriptado=desencriptar(textArea.value)
    mensaje.value=textoencriptado
    textArea.value="";
}

function desencriptar(stringDesencriptada){
    let matrizcod=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i=0;i<matrizcod.length;i++){
        if(stringDesencriptada.includes(matrizcod[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizcod[i][1],matrizcod[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    var contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand('copy');
    contenido.value = '';
}
