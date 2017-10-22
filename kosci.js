
 /*var imie = document.getElementById("name").value;*/  /*----czy to nie powinno być tu, u góry raz a dobrze?    */

function sprawdz(){
    var imie = document.getElementById("name").value;
    if (imie.length <=0){
        alert ("Wpisz imię");
    }
        else {
            return imie;
        }
    } 

function losowanie (){
    var imie = document.getElementById("name").value;  /* czy to trzeba przepisywać? */
    var gracz = "Janusz Gracz";
    var wylosowany;
    var losowana = Math.round(Math.random());
    if (losowana === 0) {
        wylosowany = imie;
    }
    else {
        wylosowany = gracz;
    }
    return wylosowany;
} 

function wypiszImie () {
   return document.getElementById("wynik").value;

}
