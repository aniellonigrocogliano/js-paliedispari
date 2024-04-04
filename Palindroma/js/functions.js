/**
 * Controllare se la parola è palindroma
 * @date 4/4/2024 - 14:20:32
 * @param {array} stringPal inserita dall'utente
 * @return {boolean} True se la parola è palindroma altrimenti false
 */
function palindroma(stringPal) {
    let check = true;
    for (let i = 0; i <= (stringPal.length/2); i++) {
        if(stringPal[i] != stringPal[stringPal.length-i-1]){
            check= false;
        };
       
        
    }
    return check;
}