
 /*var imie = document.getElementById("name").value;*/  /*----czy to nie powinno być tu, u góry?    */
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
    var gracz = 0;
    var wylosowany=1;
    if (wylosowany) {
        wylosowany = imie;
    }
    else {
        wylosowany = gracz;
    }
    return wylosowany;
} 


