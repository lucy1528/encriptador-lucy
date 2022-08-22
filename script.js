const texto = document.getElementById('text')
const mensaje = document.getElementById('mensaje')
const buscar = document.getElementById('buscar')


function botonEncriptar() {
    const textoEncriptado = encriptar(text.value)
    mensaje.value = textoEncriptado
    buscar.style.display = "none" 
    text.value = " "
}



function encriptar(textoAencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoAencriptar.includes(matrizCodigo[i][0])) {
            textoAencriptar = textoAencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoAencriptar
}
function botonDesencriptar() {
    const textoEncriptado = desencriptar(mensaje.value)
    text.value = textoEncriptado
    buscar.style.display = "block"
    mensaje.value = " "
}

function desencriptar(textoAdesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAdesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoAdesencriptar.includes(matrizCodigo[i][1])) {
            textoAdesencriptar = textoAdesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoAdesencriptar
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado");
    mensaje.value = "";
}