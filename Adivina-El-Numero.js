let num1
let num2
let contador = 1
num1 = Number(prompt("escriba un numero entre el 1 y 100"))
num2 = Math.round(Math.random()*100)

// comparacion entre numero escrito con numero a adivinar

while(num1 != num2){
  if (num1 < num2){
    alert("el numero pensado es mas alto")
  } else{
    alert("el numero pensado es mas bajo")
  }
  num1 = Number(prompt("escriba otro numero"))
  contador++
}
alert ("FELICITACIONES!! El numero pensado era " +num2+ "\n lo resolviste en "+contador+ " intentos")