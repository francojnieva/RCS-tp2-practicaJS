// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let mensaje = ""
do {
    let str = prompt("ingrese un mensaje")
    
    if(mensaje == "") {
        mensaje = str 
    } else {
        mensaje += "-" + str
    }  


} while (confirm("¿Desea continuar?"));

document.write(mensaje)
