// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt("Ingrese un texto")

let caracter = ""
let textoAlReves = ""

for ( i = 0; i < texto.length; i++) {
    caracter = texto[i]   
    textoAlReves = caracter + textoAlReves
}

document.write(textoAlReves)