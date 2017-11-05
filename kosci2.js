var addName= document.querySelector("#name");
var okButton= document.querySelector(".okbutton");
okButton.addEventListener("click", function sprawdz(){
    var name = document.querySelector("#name").value;
    if (name.length <=0){
          alert ("Wpisz imię");
        }
    else{console.log(name);}
    });
var randomButton=document.querySelector("#random");
randomButton.addEventListener("click", function random(){    
    var name = document.querySelector("#name").value;
    var randomNr = Math.round(Math.random());
    
    if (randomNr === 0){
        write.innerHTML= name;
    } 
    else{
      write.innerHTML= "Janusz Gracz";
    } 
});

var startButton=document.querySelector("#start");
var container =document.querySelector(".container");
startButton.addEventListener("click", function changeContainer (){
  
})
