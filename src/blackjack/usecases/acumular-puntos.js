import { valorCarta } from './valor-carta';

//turno 0 = primer jugadoe y el ultimo sera la pc
export const acumularPuntos = (carta)=>{
    let puntosCarta = valorCarta(carta);
    return puntosCarta;
}