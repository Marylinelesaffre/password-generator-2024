const chars = 
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+? ><:{}[]'";

function generatePassword(event){
    
event.preventDefault();

const longueur = parseInt(document.querySelector("#length").value, 10);


if(longueur < 12 || longueur > 128) {
    alert("Veuillez choisir une longueur entre 12 et 128 caractères.");
    return;
}

let input = document.querySelector("#myPass");
let motDePasse = '';
for(let i = 0; i < longueur; i++){ 
    const indexC =  Math.floor(Math.random() * chars.length);
    motDePasse += chars[indexC];

}
input.value = motDePasse
 
input.style.width = (input.scrollWidth + 10) + "px";
}



