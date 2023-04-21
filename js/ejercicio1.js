// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Por favor, ingrese su edad")

edad = parseInt(edad)

if (edad === Number(edad)) {
    
    edad >= 18 ? document.write("Puedes conducir") : document.write("No puedes conducir, eres menor de edad")

} else document.write("Por favor ingrese un número")