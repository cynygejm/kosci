const addName= document.querySelector("#name");
const okButton= document.querySelector(".okbutton");
okButton.addEventListener("click", function check(){
    let name = document.querySelector("#name").value;
    if (name.length <=0){
          alert ("Wpisz imię");
        }
    else{console.log(name);}
    });
const randomButton=document.querySelector("#random");
randomButton.addEventListener("click", function random(){
    let name = document.querySelector("#name").value;
    let randomNr = Math.round(Math.random());

    if (randomNr !== 0){
        write.innerHTML= name;
    }
    else{
      write.innerHTML= "Janusz Gracz";
    }
});

const startButton=document.querySelector("#start");
const container =document.querySelector(".container");
startButton.addEventListener("click", function changeContainer (){
//    co dalej? jak zmienić "planszę?""
})
