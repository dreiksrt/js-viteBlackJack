
/**
 * 
 * @param {array<string>} deck  Ejemplo:  ["2C", "3D", "4H", "2S"];
 * @returns {string} Retorna una carta aleatoriamente del mazo de cartas: 'A2', 'H3' etc...
 */

export  const pedirCarta = (deck) => {
    let carta;
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    } else {
      let cartaIndex = Math.floor(Math.random() * deck.length);
      carta = deck[cartaIndex];
      deck.splice(cartaIndex, 1);
    }
    return carta;
  };