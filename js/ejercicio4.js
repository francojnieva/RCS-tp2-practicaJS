// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = ""
do {

    let numero = prompt("ingrese un número") 
    numero = Number(numero)

    if (isNaN(numero)) {
        alert("no es un número")
    } else {
        total += numero
        total = Number(total)
    }

} while (confirm("¿Continuar?"));

document.write(total)

