// Valor de mis cartas(a mejorar(picas,diamantes,treboles,corazones))

const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const valores = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
  'J': 10, 'Q': 10, 'K': 10, 'A': 11
};

// barajar cartas(funcion extraida de internet(me complico la vida))

function barajarCartas() {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
}

// Valor de la mano(calcua cuanto vale y mano si te sale un as y te pasas de 21 cuenta como 1 sino como 11)

function calcularValorMano(mano) {
  let valor = 0;
  let ases = 0;

  for (const carta of mano) {
    valor += valores[carta];
    if (carta === 'A') {
      ases++;
    }
  }

  while (ases > 0 && valor > 21) {
    valor -= 10;
    ases--;
  }

  return valor;
}

// Inicializar el juego((mitad de codigo investigado mientras lo creaba)se puede mejorar/optimizar?)

barajarCartas();
const jugadorMano = [cartas.pop(), cartas.pop()];
const crupierMano = [cartas.pop(), cartas.pop()];

console.log('Bienvenido a Blackjack!');
console.log('Tus cartas: ' + jugadorMano.join(' '));
console.log('Valor de tu mano: ' + calcularValorMano(jugadorMano));

// Comparacion/logica del juego(choclazo de verificaciones para q confirme todo bien(se puede mejorar?))

while (calcularValorMano(jugadorMano) < 21) {
  const continuar = confirm('¿Queres tomar otra carta?');
  if (continuar) {
    jugadorMano.push(cartas.pop());
    console.log('Tus cartas: ' + jugadorMano.join(' '));
    console.log('Valor de tu mano: ' + calcularValorMano(jugadorMano));
  } else {
    break;
  }
}

while (calcularValorMano(crupierMano) < 17) {
  crupierMano.push(cartas.pop());+ 1
}

console.log('Cartas del crupier: ' + crupierMano.join(' '));
console.log('Valor de la mano del crupier: ' + calcularValorMano(crupierMano));

if (calcularValorMano(jugadorMano) > 21) {
  console.log('Pediste. Tu valor es mayor que 21.');
} else if (calcularValorMano(crupierMano) > 21) {
  console.log('¡Ganaste! El crupier se pasó de 21.');
} else if (calcularValorMano(jugadorMano) > calcularValorMano(crupierMano)) {
  console.log('¡Ganaste! Tu valor es mayor que el del crupier.');
} else if (calcularValorMano(jugadorMano) < calcularValorMano(crupierMano)) {
  console.log('Perdiste. El crupier tiene un valor mayor.');
} else {
  console.log('Es un empate.');
}
