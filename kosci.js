function sprawdz(){            //sprawdza czy wpisano cos w okienko
    var imie = document.getElementById("name").value;
    if (imie.length <=0){
        alert ("Wpisz imię");
    }
        else {
            return imie;
        }
    } 

var wypisz = document.getElementById("wypisz");
function losowanie(){ 
    var imie = document.getElementById("name").value; 
 
    var losowana = Math.round(Math.random());
    if (losowana===0){
  wypisz.textContent= imie;
} 
else{
  wypisz.textContent="Janusz Gracz";
    
    return losowana;
} 
}
 
document.getElementById("wypisz").innerHTML=losowana;
 // to miało wypisać wynik losowania



