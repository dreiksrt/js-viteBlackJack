export const determinarGanador = (puntosJugadores) =>{
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