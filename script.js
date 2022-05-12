//Genero un número aleatorio del 1 al 10
numRta = Math.floor(Math.random() * 10) + 1
intento = 1
sigo = true

// Compara el input con el generado mientras no haya hecho más de tres intentos (var 'intento') o no haya acertado (var 'sigo')
// Si le erra se suma un intento, si le acierta 'sigo' es false
do {
    numUsuario = prompt("¡Tiene TRES intentos para tratar de adivinar un número aleatorio entre 1 y 10 y participar por el sorteo de un iPhone 13 Pro!\r\n\r\n Intento número " + intento + ":")
    if (numUsuario == numRta)
        sigo = false
    intento++
} while (intento < 4 && sigo)

// Si 'sigo' es true, no acertó. Caso contrario, acertó.
if (sigo)
    alert("¡Te quedaste sin intentos! el número correcto era " + numRta + ". ¡Mejor suerte la próxima!")
else
    alert("¡Correcto! el número era " + numRta + ". Ya estás participando del sorteo, un agente se estará contactando si resultás ganador.")