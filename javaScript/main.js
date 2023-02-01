//utiliser cette commande pour que si on a une erreur pour qui le nous previen et s'arrete
"use strict";

// alert("bonjour le monde ");
let nom="reda";

// commande pour afficher comme le cout en C++ ou sysout en Java
console.log("salut "," le ",nom);
// recuper le <h1> le titre de la page html
const tittrePrincipal= document.querySelector("h1");

// mettre le titre html en jaune

tittrePrincipal.style.color="yellow";

/**functiom pour style
 * ajout du style a tous les li de notre documents
 */
function styleLi(){
    // récupère tous les <li> et les mets sur un tableau
    const elementDeListe =document.querySelectorAll("li");
    console.log(elementDeListe);

// mettre le 2 em liste de notre html en rouge en utilisant l'indice du tableau
    elementDeListe[1].style.color="red";

//boucle pour parcourir un tableau et met un fond jaune à tous les éléments

    for (let i = 0;i<elementDeListe.length;i++){
        elementDeListe[i].style.backgroundColor = "yellow";
    }

// meme chose avec foreach "forof" en javascript mettre tous les li en gras

    for (let element of elementDeListe) {
        element.style.fontWeight="bold";
    }



}
// appeler la function
// styleLi();

//Ecouter l'événement clic sur le titre H1 et apllique le style une fois que on cliquer sur le titre

tittrePrincipal.addEventListener("click",styleLi);


//recupere le formulare qui est dans notre document html

const form =document.querySelector("form");
// recupere ol du formulaire grace a la classe commentaires

const olCommentaires=document.querySelector(".commentaires");

//recuper l'input de notre formulaire  cest a dire tous ce que on a ecrit sur le champ e saisie

const inputCommentaire=document.querySelector("#Commentaire");

// Ecouter l'envoi du formulaire on va mettre une fonction dans
// les parametres c'est une particularité dans le javascript
form.addEventListener("submit",function ajouterCommentaire(event){
    //quand je envoi le formulaire il va stopper le rafraichisment de la page
   event.preventDefault();
    // Si le champ de saisie commentaire vide, avertir utilisateur
    if (inputCommentaire.value === "") {
        alert("Commentaire vide !");
        return; // Stoppe l'événement
    }


   //on ajouter des truc sur notre ol de notre documennt on utilise innerHTML
   // si on met comme ca il va modifier la 1er ligne en toto
   // olCommentaires.innerHTML ="toto";
   //si on met comme ca il va l'ajouer en dernier
    olCommentaires.innerHTML +="<li>toto</li>";
    //ici on lui dit de prendre la valeur ecrit sur le champ saisie et de l'ajouter sur notre liste

    olCommentaires.innerHTML +="<li>"+inputCommentaire.value+"</li>";

    // vider le champ de saisie ou initialiser les champ
    inputCommentaire.value="";

    //me redonne le focus du champ de saisie
    inputCommentaire.focus();

});






