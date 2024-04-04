const submit = document.getElementById("submit"); // intecetto l'utente
submit.addEventListener("click", function () { //intercetto cliclk dell'utente
    userWord = document.getElementById("word").value // leggo la parola dell'utente
    if (userWord === "") {
        document.getElementById("result").innerHTML = `Non hai inserito nessuna parola`; // verifico che l'utente ha inserito una parola
    } else {
        if (palindroma(userWord)) {
            document.getElementById("result").innerHTML = `La parola "${userWord}" è palindroma` // se palindroma stampo risultato positivo
        } else {
            document.getElementById("result").innerHTML = `La parola "${userWord}" non è palindroma` // se palindroma stampo risultato negativo
        }

    }

    document.getElementById("word").value = ""; // resetto l'input
})