const submit = document.getElementById("submit"); // intecetto l'utente
submit.addEventListener("click", function () { //intercetto cliclk dell'utente
    let pod = document.getElementById("pod").value // leggo la scelta di pari o dispari
    let numberUser = document.getElementById("number").value // leggo il numero scelto
    numberUser = parseInt(numberUser); // trasformo la stringa in numero
    let numberPc = random1a5(); // genero un numero random
    let flag = "perso"; // imposto la condizione di perso
    let sum = numberUser + numberPc; //effettuo la somma
   if(pod === "Pari" && pariDispari(sum)){ // se scelto pari e la somma è pari imposto la condizione su vinto
    flag = "vinto";
   }
   if(pod === "Dispari" && !pariDispari(sum)){ // se scelto dispari e la somma è dispari imposto la condizione su vinto
    flag = "vinto";
   }
   document.getElementById("result").innerHTML = `Tu hai scelto il numero ${numberUser} e il Pc ha scelto il numero ${numberPc} la cui somma è ${sum}. <br> Hai ${flag}!!!`; //stampo il risultato
})
