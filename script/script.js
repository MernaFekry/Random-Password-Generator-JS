

const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrsruvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    // Added only 4 chars to password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    

    // To continue adding till 12 chars
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;

}

// Copy Password to Clipboard
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Copied the Password" + passwordBox.value);
}

