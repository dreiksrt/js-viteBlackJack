export const crearCarta = (turno,carta) =>{
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
}