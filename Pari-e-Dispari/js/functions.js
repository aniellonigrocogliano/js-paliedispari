/**
 * Description placeholder
 * @date 4/4/2024 - 16:18:29
 *
 * Genero un numero da 1 a 5
 * @returns {Number} Un numero da 1 a 5
 */
function random1a5() {
    let number = Math.floor(Math.random() * 5) + 1; // genero numero tra 1 e 5 e lo tronco ad intero
    return number; // restituisco il risultato
}

/**
 * Description placeholder
 * @date 4/4/2024 - 16:24:10
 * verifico se un numero è pari o dispari
 * @param {Number} num Numero da verificare
 * @returns {Boolean} Restituisce true se pari false se dispari
 */
function pariDispari(num) {
    let response= false; // imposto condizione su false
    if(num%2===0){ // se il numero è divisibile per 2 imposto condizione su true
        response= true; 
    }
    return response; // restituisco il risultato
}