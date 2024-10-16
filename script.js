const chars = 
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+? ><:{}[]'";
const longueur = 12
function generatePassword(event){
    
event.preventDefault();
let input = document.querySelector("#myPass");
let motDePasse = '';
for(let i = 0; i < longueur; i++){ 
    const indexC =  Math.floor(Math.random() * chars.length);
    motDePasse += chars[indexC];

}
input.value = motDePasse
console.log(motDePasse)
}