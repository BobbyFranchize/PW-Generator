const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const password3 = document.getElementById("password3")
const password4 = document.getElementById("password4")
const characterAmount = document.getElementById("chacters-amount")
const generateBtn = document.getElementById("generate-passwords-btn")

const possibleCharacters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
  "c","d","e","f","g","h","i","j","k","l","m","n","o","q",
  "r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,
  "!","@","#","$","%","^","&","*","(",")","_", "-", "=",
  "+","<",">",

]

generateBtn.addEventListener("click", function(){

password1.textContent = ""
password2.textContent = ""
password3.textContent = ""
password4.textContent = ""

for (let i = 0; i < characterAmount.value; i++){
  let randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    password1.textContent += possibleCharacters[randomNumber]
}

for (let j = 0; j < characterAmount.value; j++){
  let randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    password2.textContent += possibleCharacters[randomNumber]
}

for (let k = 0; k < characterAmount.value; k++){
  let randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    password3.textContent += possibleCharacters[randomNumber]
}

for (let l = 0; l < characterAmount.value; l++){
  let randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    password4.textContent += possibleCharacters[randomNumber]
}

})

password1.addEventListener("click", function copyPassword(){
      navigator.clipboard.writeText(password1.textContent);
      alert("Copied Password: " + password1.textContent)
})

password2.addEventListener("click", function copyPassword(){
      navigator.clipboard.writeText(password2.textContent);
      alert("Copied Password: " + password2.textContent)
})

password3.addEventListener("click", function copyPassword(){
      navigator.clipboard.writeText(password3.textContent);
      alert("Copied Password: " + password3.textContent)
})

password4.addEventListener("click", function copyPassword(){
      navigator.clipboard.writeText(password4.textContent);
      alert("Copied Password: " + password1.textContent)
})
