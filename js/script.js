const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
const player = buttons[i].innerHTML;
const computer = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
let result = "";
//Si le joueur ou l'ordinateur choissisent la meme chose alors il y a egalité
if (player === computer) {
    result = "Egalité";
}
//Ici avec else if on crée la condition pour que le joueur gagne
else if ((player === "Pierre" && computer === "Ciseau") || (player === "Feuille" && computer === "Pierre") || 
        (player === "Ciseau" && computer === "Feuille")){
        result = "Gagné";
//Si les conditions sont pas reunies alors c'est l'ordinateur qui gagne
} else {
    result = "Perdu";
}
document.querySelector(".resultat").innerHTML= `Joueur : ${player} </br> Ordinateur : ${computer} </br> ${result}`;

    });
}
