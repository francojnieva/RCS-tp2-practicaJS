// Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingrese un texto").toLowerCase()

let contVocales = 0

for (i = 0; i < texto.length; i++) {
    const caracter = texto[i]
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        contVocales++
    }
}
    
document.write(`Hay ${contVocales} vocales en el texto`)
