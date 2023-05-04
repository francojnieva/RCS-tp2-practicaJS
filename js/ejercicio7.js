// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero = parseInt(prompt("Por favor ingrese un número entre 1 y 50"))

if (numero < 1 || numero > 50) {
    alert("Ingrese un número entre 1 y 50") 
} else if (isNaN(numero)) {
    alert("No es válido")
} else {
    for (i = numero; i >= 1; i--) {
        for (j = i; j >= 1; j--) {
            document.write(i)
        }
        document.write("<br>")
    }
}



