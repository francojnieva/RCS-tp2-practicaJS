// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt("Introduce un texto:").toLowerCase()

function esVocal(caracter) {
  const vocales = ["a", "e", "i", "o", "u"]
  return vocales.includes(caracter)
}

function encontrarPrimeraVocal(texto) {
  for ( i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
      return i + 1
    }
  }
  return -1
}

const posicion = encontrarPrimeraVocal(texto)
if (posicion !== -1) {
  document.write("La primera vocal se encuentra en la posición: " + posicion)
} else {
    document.write("No hay vocales")
}



