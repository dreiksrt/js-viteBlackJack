import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';
import { determinarGanador } from './determinar-ganador';

/**
 * 
 * @param {number} puntosMinimos  Los puntosJugadores[0]
 * @param {string<Array>} deck Un array de deck
 */

export const turnoComputadora = (puntosMinimos,deck,puntosJugadores) => {
    let puntosComputadora = 0;
    const puntosHTML = document.querySelectorAll("small");
    do {
    const carta = pedirCarta(deck);
    puntosComputadora += acumularPuntos(carta);
    crearCarta(1,carta);
    puntosHTML[puntosJugadores.length-1].innerText = puntosComputadora;
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    determinarGanador(puntosJugadores);
  }