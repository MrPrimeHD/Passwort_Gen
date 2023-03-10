const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
const firstPassword = document.getElementById("password1");
const secondPassword = document.getElementById("password2");
const generateButton = document.getElementById("genBtn");
let lengthOfPassword = 0;

generateButton.addEventListener("click", renderPassword);
function generatePassword() {
    let password = "";
    for (let i = 0; i <= lengthOfPassword; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

function renderPassword() {
    lengthOfPassword = document.getElementById("lengthOfPassword").value;
    firstPassword.textContent = generatePassword();
    secondPassword.textContent = generatePassword();
}

//Copy the text of the button to the clipboard
function copyToClipboard(id) {
    let text = document.getElementById(id);
    navigator.clipboard.writeText(text.textContent);
    alert("Copied to clipboard");
}