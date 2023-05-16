// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const primerNombre = prompt("Ingrese su nombre")
const primeraEdad = parseInt(prompt("Ingrese su edad")) 


const segundoNombre = prompt("Ingrese su nombre")
const segundaEdad = parseInt(prompt("Ingrese su edad")) 


const tercerNombre = prompt("Ingrese su nombre")
const tercercaEdad = parseInt(prompt("Ingrese su edad")) 

const mayorEdad = Math.max(primeraEdad, segundaEdad, tercercaEdad)

if (mayorEdad == primeraEdad ) document.write("El/La mayor es: " + primerNombre)
if (mayorEdad == segundaEdad ) document.write("El/La mayor es: " + segundoNombre)
if (mayorEdad == tercercaEdad ) document.write("El/La mayor es: " + tercerNombre)
 