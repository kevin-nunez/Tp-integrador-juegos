let jugador 
let pc

// funcion para guardar lo que va a elejir la computadora

function aleatoria(){
  return Math.ceil(Math.random()*3)
}

// eleccion del jugador / guardar dato de elecciones pc y jugador

jugador = prompt("Elije 1: Piedra, 2: Papel, 3: Tijera")
pc = aleatoria()
alert("Tu elección fue:" +eleccion(jugador))
alert("Pc eligió: "+ eleccion(pc))

// comprobacion entre eleccion de jugador y eleccion de pc para ver quien gana o si empatan

if (jugador==pc){
    alert("EMPATE")
}else if (jugador==1 && pc==3){
    alert("GANASTE")
}else if (jugador==2 && pc==1){
    alert("GANASTE")
}else if (jugador==3 && pc==2){
    alert("GANASTE")
}else{
    alert("PERDISTE")
}

// Funcion que convierte tu eleccion 1, 2 o 3 en piedra papel o tijera

function eleccion(jugada){
  let resultado = ""
  if (jugada == 1){
    resultado = "PIEDRA"
  }else if (jugada == 2){
    resultado = "PAPEL" 
  }else if (jugada == 3){
    resultado = "TIJERA"
  }else{
    resultado = "INGRESASTE UN VALOR/PALABRA INCORRECTA"
  } 
  return resultado
}