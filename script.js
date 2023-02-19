const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let generateButton = document.getElementById("genBtn");
let firstPassword = document.getElementById("password1");
let secondPassword = document.getElementById("password2");
let lengthOfPassword = 0;

function generatePassword() {
    let password = "";
    if(lengthOfPassword > 25 || lengthOfPassword < 1) {
        alert("Password length must be between 1 and 25 characters");
    } else {
        for (let i = 0; i <= lengthOfPassword; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }

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
}