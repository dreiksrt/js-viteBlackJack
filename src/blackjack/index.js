import _ from 'underscore'
import {CrearDeck,pedirCarta,valorCarta, turnoComputadora,acumularPuntos} from './usecases/index'

  let deck = [];
  let carta = '';
  const tiposCarta = ["C", "D", "H", "S"];
  const cartasEspeciales = ["A", "J", "Q", "K"];

  let puntosJugador = 0,
    puntosComputadora = 0,
    puntosJugadores = [];

  //refs
  const btndPedir = document.querySelector("#btnPedirCarta"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevoJuego = document.querySelector("#btnNuevoJuego"),
    puntosHTML = document.querySelectorAll("small"),
    divCartasJugadores = document.querySelectorAll('.divCartas');

  const inicializarJuego = (numJugadores = 2) => {
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
    deck = CrearDeck(tiposCarta,cartasEspeciales);
    puntosJugadores = [];
    for (let index = 0; index < numJugadores; index++) {
        puntosJugadores.push(index);
    }
    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerText = '');
  };


const crearCarta = (turno,carta) =>{
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasJugadores[turno].append(imgCarta);
}

const determinarGanador = () =>{
    const [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
          alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
          alert("cpu won");
        } else if (puntosComputadora > 21) {
          alert("Jugador 1 gana");
        } else {
          alert("Computadora gana");
        }
      }, 10);
}

  //Eventos
  btnPedirCarta.addEventListener("click", () => {
    carta = pedirCarta(deck);
    let puntosRes = acumularPuntos(carta);
    puntosJugadores[0] += puntosRes;
    puntosHTML[0].innerText = puntosJugadores[0];

    crearCarta(0,carta);

    if (puntosJugadores[0] > 21) {
      btnPedirCarta.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores);
    } else if (puntosJugadores[0] === 21) {
      btnPedirCarta.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores);
    }
  });

  btnDetener.addEventListener("click", () => {
    if (divCartasJugadores[0].innerHTML === "") {
      alert("Debes escoger al menos una carta");
    } else {
      btnPedirCarta.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores);
    }
  });

  btnNuevoJuego.addEventListener("click", () => {
    inicializarJuego();
  });
