const chars = 
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+? ><:{}[]'"; // les caractères disponibles pour le mdp

function generatePassword(event){
    
event.preventDefault(); // Empecche le reefreche de la page 

const longueur = parseInt(document.querySelector("#length").value, 10); // récupère la valeur entrée par l'utilisateur pour la longueur du mdp
const errorMsg = document.getElementById("errorMsg"); // Affiche le messsage d'erreur 



//Vérifie si longueur est compris entre 12 et 128caractères
if(longueur < 12 || longueur > 128) {
    alert("Veuillez choisir une longueur entre 12 et 128 caractères.");
    return;
   // Si la longueur est incorrecte, affiche une alerte et arrête la fonction

} else{
    errorMsg.textContent = "";
}// Si la longueur est correcte, efface les messages d'erreu

let input = document.querySelector("#myPass"); //Sélectionne le champ où le mot de passe généré sera affiché
let motDePasse = '';// Initialise une variable pour stocker le mot de passe généré
for(let i = 0; i < longueur; i++){ 
    const indexC =  Math.floor(Math.random() * chars.length); // Choisit un index aléatoire dans la chaîne de caractères
    motDePasse += chars[indexC];
  // Ajoute le caractère correspondant à l'index au mot de passe
}
input.value = motDePasse  // Affiche le mot de passe généré dans le champ input
 
input.style.width = (input.scrollWidth + 10) + "px"; // Ajuste dynamiquement la largeur du champ input en fonction de la longueur du mot de passe
}



