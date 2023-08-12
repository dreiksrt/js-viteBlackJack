import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta  Ejemplo:  ["C", "D", "H", "S"];
 * @param {array<string>} tiposEspeciales Ejemplo ["A", "J", "Q", "K"];
 * @returns  {array<string>} retorna un nuevo deck de cartas
 */

export const CrearDeck = (tiposDeCarta,tiposEspeciales) => {
  if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDecarta es obligatorio');
  if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio');
  let deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const item of tiposDeCarta) {
        deck.push(i + item);
      }
    }
    for (const tipo of tiposDeCarta) {
      for (const esp of tiposEspeciales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  };