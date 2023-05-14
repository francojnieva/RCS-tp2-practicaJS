// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let num = parseInt(prompt("Ingrese un numero entre 1 y 50"));

if (!isNaN(num)) {

    if (num >= 1 && num <= 50) {
        for ( i = 0; i <= num; i++) {
            for ( j = 1; j <= i; j++) {
                document.write(j);
            }
            document.write("<br>");
        }
    } else {
        alert("El número no es válido");
    }
} else {
    alert("Ingrese un número");
}


