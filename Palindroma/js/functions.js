/**
 * Controllare se la parola è palindroma
 * @date 4/4/2024 - 14:20:32
 * @param {array} stringPal inserita dall'utente
 * @return {boolean} True se la parola è palindroma altrimenti false
 */
function palindroma(stringPal) {
    let check = true; // imposto check su true
    stringPal = stringPal.toUpperCase() // rendo tutto minuscolo per il confronto
    for (let i = 0; i <= (stringPal.length/2); i++) { // imposto il ciclo come lunghezza a metà della stringa
        if(stringPal[i] != stringPal[stringPal.length-i-1]){ // confronto il primo carattere con l'ultimo, il secondo col penultimo e via dicendo appena due caratteri sono diversi impostiamo  check su false
            check= false;
            break; // blocchiamo il ciclo in caso due caratteri non sono uguali
        };
       
        
    }
    return check; //restituisco il risultato
}